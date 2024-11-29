// import React from "react";
// import {
//   TextField,
//   Button,
//   Typography,
//   Box,
//   styled,
//   Grid,
//   useMediaQuery,
//   useTheme,
//   Checkbox,
//   FormControlLabel,
//   Divider,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";

// const StyledGrid = styled(Grid)(() => ({
//   backgroundColor: "#002e6e",
// }));

// export default function VehicleExitPage() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down(800));

//   return (
//     <>
//       <Typography variant="h4" color="#002e6e" pb={3} pt={7}>
//         Vehicle Exit
//       </Typography>

//       <Grid
//         alignItems="center"
//         display="flex"
//         columnGap={"1.6rem"}
//         rowGap={"1.2rem"}
//       >
//         <TextField
//           id="vehicle-number"
//           label="Enter Vehicle Number"
//           variant="outlined"
//           size={isMobile ? "small" : "medium"}
//           sx={{ mb: 2, width: isMobile ? "17rem" : "22rem" }}
//         />

//         <Button variant="contained">Ask for Approval</Button>
//       </Grid>

//       <Box my={2}>
//         <Grid container spacing={2} alignItems="center" color={"blue"}>
//           <Grid item xs={2} sm={2}>
//             <Typography>Vehicle Number</Typography>
//           </Grid>
//           <Grid item xs={3} sm={3}>
//             <Typography>Driver</Typography>
//           </Grid>
//           <Grid item xs={3} sm={3}>
//             <Typography>Technician</Typography>
//           </Grid>
//           <Grid item xs={2} sm={2}>
//             <Typography>Status</Typography>
//           </Grid>
//           <Grid item xs={2} sm={2}>
//             <Typography>Approval</Typography>
//           </Grid>
//         </Grid>
//         <Divider />

//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={2} sm={2}>
//             <Typography>ABC123</Typography>
//           </Grid>
//           <Grid item xs={3} sm={3}>
//             <Typography>John Doe</Typography>
//           </Grid>
//           <Grid item xs={3} sm={3}>
//             <Typography>Jane Smith</Typography>
//           </Grid>
//           <Grid item xs={2} sm={2}>
//             <Typography>Approved</Typography>
//           </Grid>
//           <Grid item xs={2} sm={2}>
//             <FormControlLabel
//               control={<Checkbox color="primary" />}
//               label="Approve"
//             />
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// }

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

const API_BASE_URL = "http://localhost:8000/api/vehicles"; // Replace with your API base URL

export default function VehicleExitPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  const [vehicleLogId, setVehicleLogId] = useState(""); // Input for exit request
  const [enteredVehicles, setEnteredVehicles] = useState([]); // For displaying the list of entered vehicles
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

  // Submit an exit request
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
            Authorization: `Bearer ${token}`, // Include token
          },
        }
      );

      if (response.data.status) {
        toast.success("Vehicle exit request submitted successfully.");
        setVehicleLogId(""); // Clear input after successful request
        fetchEnteredVehicles(); // Refresh the list
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
    fetchEnteredVehicles(); // Load entered vehicles on page load
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
                {vehicle.vehicle_number} {/* Display vehicle number */}
              </Grid>
              <Grid item xs={3}>
                {vehicle.status || "Pending"}
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setVehicleLogId(vehicle._id); // Use the `_id` from the vehicle log
                    submitExitRequest(); // Call the exit request function
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
