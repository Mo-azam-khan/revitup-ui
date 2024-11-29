import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "100vh",
  overflowY: "auto",
};

const VehicleInfo = ({ open, handleClose, onProceed }) => {
  const [formData, setFormData] = useState({
    customer_name: "",
    vehicle_number: "",
    address: "",
    pin_code: "",
    email: "",
    visit_type: "",
    vehicle_type: "",
    make_and_model: "",
    contact_number: "",
    dob: "",
    booking_number: "",
    gst_number: "",
    vehicle_reg_no: "",
    vin_no: "",
    engine_no: "",
    model_no: "",
    sold_by: "",
    sold_date: "",
    odo: "",
    color_name: "",
    work_type: "",
    ro_date: "",
    ro_number: "",
    printing_time: "",
    special_message: "",
    ac_filter: "",
    brakes: "",
    air_filter: "",
    engine_oil: "",
    service_type: "",
    customer_request: "",
    additional_description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to calculate expected delivery time
  const calculateExpectedDelivery = (ro_date) => {
    const date = new Date(ro_date);
    date.setDate(date.getDate() + 2);
    return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  };

  const handleSaveToLocalStorage = () => {
    try {
      const expected_delivery_date = calculateExpectedDelivery(
        formData.ro_date
      );
      const updatedData = { ...formData, expected_delivery_date };

      console.log("Data to Save:", updatedData);

      // Save to localStorage or send to backend
      localStorage.setItem("firstModalData", JSON.stringify(updatedData));

      onProceed();
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            MP20 CA 2824
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          To personalize your experience, please complete setting up vehicle
          information.
        </Typography>
        {/* Form Fields */}
        {Object.keys(formData).map((field) =>
          field === "ro_date" ? (
            <TextField
              key={field}
              name={field}
              label="RO Date"
              type="date"
              value={formData[field]}
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              sx={{ mb: 2 }}
              required
            />
          ) : (
            <TextField
              key={field}
              name={field}
              label={field
                .replace(/_/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())}
              value={formData[field]}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              multiline={[
                "customer_request",
                "additional_description",
              ].includes(field)}
              rows={
                ["customer_request", "additional_description"].includes(field)
                  ? 3
                  : 1
              }
            />
          )
        )}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth component="label">
              Upload Vehicle RC
              <input type="file" hidden />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth component="label">
              Upload Insurance Policy
              <input type="file" hidden />
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" onClick={handleClose} disabled={loading}>
            Back
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleSaveToLocalStorage}
            disabled={loading}
          >
            {loading ? "Saving..." : "Proceed"}
          </Button>
          <Button variant="outlined" onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default VehicleInfo;
