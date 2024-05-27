import React, { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  styled,
  Grid,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StyledGrid = styled(Grid)(() => ({
  backgroundColor: "#002e6e",
}));

export default function WaitingVehiclesPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  const [searchValue, setSearchValue] = useState("");

  const waitingVehicles = [
    { vehicleNumber: "MP48MH3930" },
    { vehicleNumber: "MP09CZ7111" },
    { vehicleNumber: "MP04CY7544" },
  ];

  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value);
    setHighlightedIndex(-1);
  };

  const handleSearch = () => {
    const index = waitingVehicles.findIndex(
      (vehicle) => vehicle.vehicleNumber === searchValue
    );
    setHighlightedIndex(index);
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
        <Box mb={2}>
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
            onChange={handleSearchChange}
          />

          <Button
            variant="contained"
            sx={{ marginLeft: "1rem", mt: 9 }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>

        {waitingVehicles.map((vehicle, index) => (
          <Box
            key={index}
            mb={1}
            sx={{
              backgroundColor:
                highlightedIndex === index ? "#ffef9f" : "transparent",
              padding: 1,
            }}
            onClick={() => setHighlightedIndex(index)}
          >
            <Typography
              color={highlightedIndex === index ? "#002e6e" : "inherit"}
            >
              {vehicle.vehicleNumber}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
