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

const products = Array(18).fill({
  name: "Mukesh Prasad",
  rating: 4.5,
  proficiency1: "Painter",
  proficiency2: "Fitting",
  availability: "Available",
  busyStatus: "Busy. Available in 3d 2 hrs",
});

const ProductCard = ({ product }) => (
  <Card>
    <CardContent>
      <Box display="flex" alignItems="center" mb={2} flexDirection={"column"}>
        <Avatar sx={{ bgcolor: "blue" }}>{product.name.charAt(0)}</Avatar>
        <Box ml={2}>
          <Typography variant="h6">{product.name}</Typography>
        </Box>
        <Box display="flex" mt={2}>
          <Typography
            color="text.secondary"
            bgcolor={"#42a5f5"}
            borderRadius={2}
            p={0.5}
          >
            {product.proficiency1}
          </Typography>
          <Typography
            color="text.secondary"
            ml={3}
            bgcolor={"#bdbdbd"}
            borderRadius={2}
            p={0.5}
          >
            {product.proficiency2}
          </Typography>
          <Typography color="text.secondary" ml={3}>
            {product.rating}{" "}
            <StarIcon
              sx={{ color: "gold", fontSize: 20, verticalAlign: "bottom" }}
            />
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography color="green">{product.availability}</Typography>
        <Typography color="red">{product.busyStatus}</Typography>
      </Box>
    </CardContent>
    <CardActions style={{ justifyContent: "space-between" }}>
      <Button variant="outlined">View</Button>
      <Button variant="contained" style={{ backgroundColor: "#A29415" }}>
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
