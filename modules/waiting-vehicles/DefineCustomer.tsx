import React from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DefineCustomer = ({ open, handleClose, handleOpenVehicleInfo }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="customer-type-modal-title"
      aria-describedby="customer-type-modal-description"
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
            id="customer-type-modal-title"
            variant="h6"
            component="h2"
          >
            Select Customer Type
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Please select the type of customer you are.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 2 }}
          onClick={handleOpenVehicleInfo}
        >
          Service
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleClose}
        >
          Accessories
        </Button>
      </Box>
    </Modal>
  );
};

export default DefineCustomer;
