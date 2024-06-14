import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";

const products = Array(18).fill({
  name: "Mukesh Prasad",
  rating: 4.5,
  product: "Samsung M30",
  price: "20,000 INR",
  availability: "Available",
  busyStatus: "Busy. Available in 3d 2 hrs",
});

const ProductCard = ({ product }) => (
  <Card>
    <CardContent>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar sx={{ bgcolor: "blue" }}>{product.name.charAt(0)}</Avatar>
        <Box ml={2}>
          <Typography variant="h6">{product.name}</Typography>
          <Typography color="text.secondary">{product.product}</Typography>
        </Box>
      </Box>
      <Box mb={1}>
        <Typography color="text.primary">{product.price}</Typography>
        <Typography color="text.secondary">
          Rating: {product.rating}{" "}
          <StarIcon
            sx={{ color: "gold", fontSize: 20, verticalAlign: "bottom" }}
          />
        </Typography>
      </Box>
      <Box>
        <Typography color="green">{product.availability}</Typography>
        <Typography color="red">{product.busyStatus}</Typography>
      </Box>
    </CardContent>
    <CardActions>
      <Button variant="outlined">View</Button>
      <Button variant="contained" color="primary">
        Add
      </Button>
    </CardActions>
  </Card>
);

const App = () => (
  <Grid container spacing={2} sx={{ padding: 3 }}>
    {products.map((product, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <ProductCard product={product} />
      </Grid>
    ))}
  </Grid>
);

export default App;
