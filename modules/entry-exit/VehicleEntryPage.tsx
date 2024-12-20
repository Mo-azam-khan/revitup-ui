import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  styled,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";

const StyledGrid = styled(Grid)(() => ({
  backgroundColor: "#002e6e",
}));

export default function VehicleEntryPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  const [vehicleNumber, setVehicleNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = "http://localhost:8000/api";
  const token =
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  useEffect(() => {
    if (!token) {
      toast.error("Authentication token is missing. Please log in.");
    }
  }, [token]);

  const handleSubmit = async () => {
    if (!vehicleNumber || !selectedOption) {
      toast.error("Please enter vehicle number and select an option!");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        vehicle_number: vehicleNumber,
        entry_for: selectedOption.toLowerCase(),
      };

      const response = await axios.post(
        `${API_BASE_URL}/vehicles/entry`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("Vehicle entry successfully saved!");
        setVehicleNumber("");
        setSelectedOption("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error);
      if (error.response?.status === 401) {
        toast.error("Unauthorized. Please log in again.");
      } else {
        toast.error(
          error.response?.data?.message || "Failed to save vehicle entry."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Typography variant="h4" color="#002e6e" pb={3} pt={7}>
            Vehicle Entry
          </Typography>
          <TextField
            id="vehicle-number"
            label="Enter Vehicle Number"
            variant="outlined"
            size={isMobile ? "small" : "medium"}
            sx={{ mb: 2, width: isMobile ? "17rem" : "22rem" }}
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
          />
          <Grid
            display="flex"
            flexWrap="wrap"
            columnGap={"1.6rem"}
            rowGap={"1.2rem"}
          >
            {["Service", "Delivery", "Pickup", "Staff", "Test Drive"].map(
              (option) => (
                <Box width={"9rem"} key={option}>
                  <Button
                    variant={
                      selectedOption === option ? "outlined" : "contained"
                    }
                    fullWidth
                    onClick={() => setSelectedOption(option)}
                  >
                    {option}
                  </Button>
                </Box>
              )
            )}
          </Grid>
          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!vehicleNumber || !selectedOption || loading}
            >
              {loading ? "Saving..." : "Submit"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
