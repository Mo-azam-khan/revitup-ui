import React, { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
  Button,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const StyledGrid = styled(Grid)(() => ({
  backgroundColor: "#002e6e",
}));

export default function WaitingVehiclesPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  const [searchValue, setSearchValue] = useState("");
  const [waitingVehicles, setWaitingVehicles] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // Fetch the list of waiting vehicles
  const fetchVehicles = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const response = await axios.get(
        "http://localhost:8000/api/vehicles/waiting",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            search_key: searchValue,
            page: 1,
            limit: 10,
          },
        }
      );

      console.log("API Response:", response.data);

      if (response.data.status) {
        setWaitingVehicles(response.data.data.data);
      } else {
        setWaitingVehicles([]);
      }
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      setWaitingVehicles([]);
    }
  };

  const handleSearch = () => {
    fetchVehicles();
  };

  return (
    <Grid container height="100vh">
      {!isMobile && (
        <StyledGrid
          item
          xs={12}
          sm={4}
          px={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant="h4" color="white">
            Welcome Onboard
          </Typography>
          <Typography variant="body1" color="white">
            Enter your details and start your journey with us.
          </Typography>
        </StyledGrid>
      )}

      <Grid
        item
        xs={12}
        sm={isMobile ? 12 : 8}
        px={4}
        py={3}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography variant="h4" color="#002e6e">
          Waiting Vehicles
        </Typography>

        <Box mb={2} display="flex" alignItems="center">
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            size={isMobile ? "small" : "medium"}
            sx={{ width: isMobile ? "100%" : "22rem", mt: 7 }}
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />

          <Button
            variant="contained"
            sx={{ marginLeft: "1rem", mt: 9 }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>

        {waitingVehicles.length > 0 ? (
          waitingVehicles.map((vehicle: any, index: number) => (
            <Box
              key={vehicle._id}
              mb={1}
              sx={{
                backgroundColor:
                  highlightedIndex === index ? "#ffef9f" : "transparent",
                padding: 1,
                cursor: "pointer",
              }}
              onClick={() => setHighlightedIndex(index)}
            >
              <Typography
                color={highlightedIndex === index ? "#002e6e" : "inherit"}
              >
                {vehicle.vehicle_number}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography color="#002e6e">No vehicles found.</Typography>
        )}
      </Grid>
    </Grid>
  );
}
