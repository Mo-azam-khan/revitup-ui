import React from "react";
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
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const VehicleInfo = ({ open, handleClose }) => {
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
          To personalize your experience please complete setting up vehicle
          information
        </Typography>
        <TextField
          label="Customer Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Vehicle Type"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Make and Model"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Contact Number"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Date of Birth"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
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
          <Button variant="outlined" onClick={handleClose}>
            Back
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Proceed
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default VehicleInfo;
