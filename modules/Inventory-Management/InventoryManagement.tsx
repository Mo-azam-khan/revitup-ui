import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Avatar,
  Divider,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category_id: "",
    stock: "",
    price: "",
    incoming: "",
    outgoing: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAddCategoryDialogOpen, setIsAddCategoryDialogOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: "" });

  const handleAddCategory = async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/categories/create`,
        newCategory
      );
      if (response.data.success) {
        fetchCategories();
        setNewCategory({ name: "" });
        setIsAddCategoryDialogOpen(false);
      }
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchInventory();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories`);
      if (response.data.status) {
        setCategories(response.data.data.data);
        console.log("Categories Response:", response.data.data.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    if (isDialogOpen) {
      fetchCategories();
    }
  }, [isDialogOpen]);

  const fetchInventory = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products`);
      if (response.data.status) {
        setInventory(response.data.data.data);
      }
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/products/create`,
        newProduct
      );
      if (response.data.success) {
        fetchInventory();
        setNewProduct({
          name: "",
          category_id: "",
          stock: "",
          price: "",
          incoming: "",
          outgoing: "",
        });
        setIsDialogOpen(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <Box sx={{ padding: 1 }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        mb={2}
      >
        <Typography variant="h5">Inventory Management</Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          mt={{ xs: 2, sm: 0 }}
        >
          <TextField
            label="Search products"
            variant="outlined"
            size="small"
            sx={{ marginBottom: { xs: 2, sm: 0 }, marginRight: { sm: 2 } }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ marginBottom: { xs: 2, sm: 0 }, marginRight: { sm: 2 } }}
          >
            Search
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setIsDialogOpen(true)}
          >
            Add Product
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setIsAddCategoryDialogOpen(true)}
          >
            Add Category
          </Button>
        </Box>
      </Box>
      <Grid container spacing={3} mb={3}>
        {/* Summary Cards */}
        {[
          "Currently Stock",
          "Stock Value",
          "Stock Cost",
          "Re Order",
          "Out of Stock",
        ].map((text, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <Card>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5" component="div" color={"#FF681F"}>
                  {index === 0
                    ? "1084 Unit(s)"
                    : index === 1
                    ? "300526"
                    : index === 2
                    ? "201561"
                    : index === 3
                    ? "20"
                    : "5"}
                </Typography>
                <Divider sx={{ width: "100%", my: 1 }} />
                <Typography color="#0d47a1">{text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for Adding Category */}
      <Dialog
        open={isAddCategoryDialogOpen}
        onClose={() => setIsAddCategoryDialogOpen(false)}
      >
        <DialogTitle>Add New Category</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
            <TextField
              name="name"
              label="Category Name"
              variant="outlined"
              size="small"
              value={newCategory.name}
              onChange={(e) =>
                setNewCategory({ ...newCategory, name: e.target.value })
              }
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsAddCategoryDialogOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddCategory}
          >
            Add Category
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for Adding Product */}
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
            <TextField
              name="name"
              label="Product Name"
              variant="outlined"
              size="small"
              value={newProduct.name}
              onChange={handleInputChange}
            />
            <FormControl fullWidth size="small">
              <InputLabel>Category</InputLabel>
              <Select
                name="category_id"
                value={newProduct.category_id}
                onChange={handleInputChange}
                displayEmpty
              >
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              name="stock"
              label="Stock"
              variant="outlined"
              size="small"
              value={newProduct.stock}
              onChange={handleInputChange}
            />
            <TextField
              name="price"
              label="Unit Price"
              variant="outlined"
              size="small"
              value={newProduct.price}
              onChange={handleInputChange}
            />
            <TextField
              name="incoming"
              label="Incoming Stock"
              variant="outlined"
              size="small"
              value={newProduct.incoming}
              onChange={handleInputChange}
            />
            <TextField
              name="outgoing"
              label="Outgoing Stock"
              variant="outlined"
              size="small"
              value={newProduct.outgoing}
              onChange={handleInputChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProduct}
          >
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
      {/* Inventory Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#0d47a1" }}>
            <TableRow>
              {[
                "Product Name",
                "Category",
                "Stock",
                "Unit Price",
                "Incoming",
                "Outgoing",
                "Actions",
              ].map((header) => (
                <TableCell key={header} sx={{ color: "white" }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category_details?.name || "N/A"}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.incoming}</TableCell>
                <TableCell>{item.outgoing}</TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton sx={{ color: "#d50000" }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InventoryManagement;
