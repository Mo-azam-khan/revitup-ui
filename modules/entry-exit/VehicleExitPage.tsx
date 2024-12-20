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
  Divider,
} from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";

const StyledGrid = styled(Grid)(() => ({
  backgroundColor: "#002e6e",
}));

const API_BASE_URL = "http://localhost:8000/api/vehicles";

export default function VehicleExitPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  const [vehicleLogId, setVehicleLogId] = useState("");
  const [enteredVehicles, setEnteredVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  useEffect(() => {
    if (!token) {
      toast.error("Authentication token is missing. Please log in.");
    }
  }, [token]);

  const fetchEnteredVehicles = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("Authentication token is missing. Please log in.");
      return;
    }
    console.log("Sending token:", token);

    try {
      const response = await axios.get(`${API_BASE_URL}/entered`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status) {
        setEnteredVehicles(response.data.data || []);
      } else {
        toast.error(response.data.message || "No entered vehicles found.");
      }
    } catch (error) {
      console.error("Error fetching entered vehicles:", error);
      if (error.response && error.response.status === 401) {
        toast.error("Authentication failed. Please log in again.");
        localStorage.removeItem("authToken");
      } else {
        toast.error("Failed to fetch entered vehicles.");
      }
    }
  };

  const submitExitRequest = async () => {
    if (!vehicleLogId) {
      toast.error("Please provide a valid vehicle log ID.");
      return;
    }

    setLoading(true);
    const token = localStorage.getItem("authToken");

    if (!token) {
      toast.error("Authentication token is missing. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/exit-request`,
        { vehicle_log_id: vehicleLogId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status) {
        toast.success("Vehicle exit request submitted successfully.");
        setVehicleLogId("");
        fetchEnteredVehicles();
      } else {
        toast.error(response.data.message || "Failed to submit exit request.");
      }
    } catch (error) {
      console.error("Error submitting exit request:", error);
      toast.error("Failed to submit exit request.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnteredVehicles();
  }, []);

  return (
    <>
      <Typography variant="h4" color="#002e6e" pb={3} pt={7}>
        Vehicle Exit
      </Typography>

      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 3 }}
      >
        <TextField
          id="vehicle-log-id"
          label="Enter Vehicle Log ID"
          variant="outlined"
          size={isMobile ? "small" : "medium"}
          sx={{ mb: 2, width: isMobile ? "17rem" : "22rem" }}
          value={vehicleLogId}
          onChange={(e) => setVehicleLogId(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={submitExitRequest}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Exit Request"}
        </Button>
      </Grid>

      <Box>
        <Typography variant="h6" mb={2}>
          Entered Vehicles
        </Typography>
        <Grid container spacing={2} alignItems="center">
          {/* <Grid item xs={3}>
            <Typography fontWeight="bold">Vehicle Log ID</Typography>
          </Grid> */}
          <Grid item xs={6}>
            <Typography fontWeight="bold">Vehicle Number</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography fontWeight="bold">Status</Typography>
          </Grid>
        </Grid>
        <Divider />
        {enteredVehicles.length > 0 ? (
          enteredVehicles.map((vehicle) => (
            <Grid
              container
              spacing={2}
              alignItems="center"
              key={vehicle._id}
              sx={{ mt: 1 }}
            >
              {/* <Grid item xs={3}>
                {vehicle._id} 
              </Grid> */}
              <Grid item xs={6}>
                {vehicle.vehicle_number}
              </Grid>
              <Grid item xs={3}>
                {vehicle.status || "Pending"}
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setVehicleLogId(vehicle._id);
                    submitExitRequest();
                  }}
                >
                  Exit
                </Button>
              </Grid>
            </Grid>
          ))
        ) : (
          <Typography>No entered vehicles found.</Typography>
        )}
      </Box>
    </>
  );
}
