import React, { useState } from "react";
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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const InventoryManagement = () => {
  const inventory = [
    {
      product: "Air Filter",
      category: "Raw Materials",
      stockid: "STI012345",
      incoming: "50",
      outgoing: "100",
      stock: "1000",
      unitprice: "20000",
    },
    {
      product: "Air Filter",
      category: "Raw Materials",
      stockid: "STI012345",
      incoming: "50",
      outgoing: "100",
      stock: "1000",
      unitprice: "20000",
    },
    {
      product: "Air Filter",
      category: "Raw Materials",
      stockid: "STI012345",
      incoming: "50",
      outgoing: "100",
      stock: "1000",
      unitprice: "20000",
    },
  ];

  return (
    <Box sx={{ padding: 3 }}>
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
            label="Search orders"
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
          <Button variant="outlined" color="primary">
            Add Product
          </Button>
        </Box>
      </Box>
      <Grid container spacing={3} mb={3}>
        {[
          "Currently Stock",
          "Stock Value",
          "Stock Cast",
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#0d47a1" }}>
            <TableRow>
              {[
                "Product Name",
                "Category",
                "Stock ID",
                "Incoming",
                "Outgoing",
                "Stock",
                "Unit Price",
                "Action",
              ].map((header) => (
                <TableCell key={header} sx={{ color: "white" }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar alt={item.product} src="/path/to/avatar.jpg" />
                    <Typography sx={{ marginLeft: 2 }}>
                      {item.product}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.stockid}</TableCell>
                <TableCell>{item.incoming}</TableCell>
                <TableCell>{item.outgoing}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>{item.unitprice}</TableCell>
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
