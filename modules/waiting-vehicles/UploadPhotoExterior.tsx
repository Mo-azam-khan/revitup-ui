import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
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

const UploadPhotoExterior = ({ open, handleClose, onProceed }: any) => {
  const [uploadedFiles, setUploadedFiles] = useState({
    vehicle_front_pic: null,
    vehicle_rear_pic: null,
    vehicle_right_pic: null,
    vehicle_left_pic: null,
    focus_area_1_pic: null,
    focus_area_2_pic: null,
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setUploadedFiles((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handleProceed = () => {
    // Save data to localStorage
    localStorage.setItem("uploadedPhotos", JSON.stringify(uploadedFiles));
    onProceed();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="upload-vehicle-exterior-photographs-title"
      aria-describedby="upload-vehicle-exterior-photographs-description"
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
          <Typography
            id="upload-vehicle-exterior-photographs-title"
            variant="h6"
            component="h2"
          >
            Upload Vehicle Photographs Exterior
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Please upload vehicle photographs from every angle possible focusing
          on the damaged areas.
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          {[
            { field: "vehicle_front_pic", label: "Front" },
            { field: "vehicle_rear_pic", label: "Rear" },
            { field: "vehicle_right_pic", label: "Right" },
            { field: "vehicle_left_pic", label: "Left" },
            { field: "focus_area_1_pic", label: "Focus Area 1" },
            { field: "focus_area_2_pic", label: "Focus Area 2" },
          ].map((item, index) => (
            <Grid item xs={6} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  border: "1px solid #ddd",
                  borderRadius: 2,
                }}
              >
                <Typography variant="body1">{item.label}</Typography>
                <Button variant="contained" component="label" sx={{ mt: 1 }}>
                  Upload Photograph
                  <input
                    type="file"
                    hidden
                    onChange={(e) => handleFileChange(e, item.field)}
                  />
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="success" onClick={handleProceed}>
            Proceed
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UploadPhotoExterior;
