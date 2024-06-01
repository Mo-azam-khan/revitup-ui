import React from "react";
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

const UploadPhotoExterior = ({ open, handleClose }) => {
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
            Upload Vehicle Photographs
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Please upload vehicle photographs from every angle possible focusing on the damaged areas.
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          {[
            "Front",
            "Rear",
            "Right",
            "Left",
            "Focus Area 1",
            "Focus Area 2",
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
                <Typography variant="body1">{item}</Typography>
                <Button
                  variant="contained"
                  fullWidth
                  component="label"
                  sx={{ mt: 1 }}
                >
                  Upload Photograph
                  <input type="file" hidden />
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={handleClose}>
            Proceed with test drive
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UploadPhotoExterior;
