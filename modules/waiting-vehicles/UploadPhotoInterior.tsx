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
import axios from "axios";

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

const UploadPhotoInterior = ({
  open,
  handleClose,
  apiEndpoint,
  onProceed,
}: any) => {
  const [photos, setPhotos] = useState({
    seat_pic: null,
    odometer_pic: null,
    focus_area_1_pic: null,
    focus_area_2_pic: null,
  });

  const handleFileUpload = (event, fieldName) => {
    const file = event.target.files[0];
    setPhotos((prevState) => ({
      ...prevState,
      [fieldName]: file,
    }));
  };

  const savePhotosToLocalStorage = () => {
    const photosToSave = {};
    Object.keys(photos).forEach((key) => {
      if (photos[key]) {
        photosToSave[key] = photos[key];
      }
    });
    localStorage.setItem("interiorPhotos", JSON.stringify(photosToSave));
  };

  const handleProceed = async () => {
    try {
      savePhotosToLocalStorage();

      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("Authentication token is missing. Please log in again.");
        return;
      }

      const firstModalData = JSON.parse(
        localStorage.getItem("firstModalData") || "{}"
      );
      const exteriorPhotos = JSON.parse(
        localStorage.getItem("uploadedPhotos") || "{}"
      );
      const interiorPhotos = JSON.parse(
        localStorage.getItem("interiorPhotos") || "{}"
      );

      const formData = new FormData();
      Object.keys(exteriorPhotos).forEach((key) => {
        if (exteriorPhotos[key]) {
          formData.append(key, exteriorPhotos[key]);
        }
      });
      Object.keys(interiorPhotos).forEach((key) => {
        if (interiorPhotos[key]) {
          formData.append(key, interiorPhotos[key]);
        }
      });
      Object.keys(firstModalData).forEach((key) => {
        formData.append(key, firstModalData[key]);
      });

      const endpoint =
        apiEndpoint || "http://localhost:8000/api/vehicles/create-job-card";

      const response = await axios.post(endpoint, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response from API:", response);

      if (response.data?.status) {
        alert(response.data?.message || "Data submitted successfully!");

        // Save jobCardId to localStorage or state
        const jobCardId = response.data?.data?._id;
        if (jobCardId) {
          localStorage.setItem("jobCardId", jobCardId); // Optionally store in localStorage or pass to the modal
        }

        localStorage.removeItem("firstModalData");
        localStorage.removeItem("uploadedPhotos");
        localStorage.removeItem("interiorPhotos");

        handleClose();
        if (onProceed) onProceed(jobCardId); // Pass the jobCardId if necessary
      } else {
        alert(
          "Submission failed: " + (response.data?.message || "Unknown error")
        );
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="upload-vehicle-interior-photos-title"
      aria-describedby="upload-vehicle-interior-photos-description"
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
          <Typography id="upload-vehicle-interior-photos-title" variant="h6">
            Upload Vehicle Interior Photos
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Please upload the required interior photos.
        </Typography>
        <Grid container spacing={2}>
          {[
            { field: "seat_pic", label: "Seats" },
            { field: "odometer_pic", label: "Odometer" },
            { field: "focus_area_1_pic", label: "Focus Area 1" },
            { field: "focus_area_2_pic", label: "Focus Area 2" },
          ].map((item, index) => (
            <Grid item xs={6} key={index}>
              <Box sx={{ textAlign: "center", p: 2, border: "1px solid #ddd" }}>
                <Typography>{item.label}</Typography>
                <Button variant="contained" component="label">
                  Upload
                  <input
                    type="file"
                    hidden
                    onChange={(e) => handleFileUpload(e, item.field)}
                  />
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button variant="contained" color="success" onClick={handleProceed}>
            Proceed
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UploadPhotoInterior;
