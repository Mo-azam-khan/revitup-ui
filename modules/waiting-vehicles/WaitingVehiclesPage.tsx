import React, { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
  Button,
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import VehicleInfo from "./VehicleInfo";
import UploadPhotoExterior from "./UploadPhotoExterior";
import UploadPhotoInterior from "./UploadPhotoInterior";
import Quotation from "../quotation/quotation";

const StyledGrid = styled(Grid)(() => ({
  backgroundColor: "#002e6e",
}));

export default function WaitingVehiclesPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  const [searchValue, setSearchValue] = useState("");
  const [waitingVehicles, setWaitingVehicles] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const [open, setOpen] = useState(false);
  const [vehicleInfoOpen, setVehicleInfoOpen] = useState(false);
  const [uploadPhotoOpen, setUploadPhotoOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [openPhotoInterior, setOpenPhotoInterior] = useState(false);
  const [openQuotationPopup, setOpenQuotationPopup] = useState(false);

  const fetchVehicles = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const response = await axios.get(
        "http://localhost:8000/api/vehicles/waiting",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            search_key: searchValue,
            page: 1,
            limit: 10,
          },
        }
      );

      if (response.data.status) {
        setWaitingVehicles(response.data.data.data);
      } else {
        setWaitingVehicles([]);
      }
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      setWaitingVehicles([]);
    }
  };

  const handleSearch = () => {
    fetchVehicles();
  };

  // Open vehicle details modal
  const handleOpenDefineCustomerModal = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setOpen(true);
  };

  // Close vehicle details modal
  const handleCloseModal = () => {
    setOpen(false);
    setSelectedVehicle(null);
  };

  // Open job card modal
  const handleOpenVehicleInfoModal = () => {
    setOpen(false);
    setVehicleInfoOpen(true);
  };

  // Close job card modal
  const handleCloseVehicleInfoModal = () => {
    setVehicleInfoOpen(false);
  };

  // Open upload photo modal
  const handleOpenUploadPhotoModal = () => {
    setVehicleInfoOpen(false);
    setUploadPhotoOpen(true);
  };

  // Close upload photo modal
  const handleCloseUploadPhotoModal = () => {
    setUploadPhotoOpen(false);
  };

  // Open UploadPhotoInterior modal
  const handleOpenPhotoInterior = () => {
    setUploadPhotoOpen(false);
    setOpenPhotoInterior(true);
  };

  // Close UploadPhotoInterior modal
  const handleClosePhotoInterior = () => {
    setOpenPhotoInterior(false);
  };

  const handleOpenQuotationPopup = () => {
    setOpenPhotoInterior(false); // Close the current modal
    setOpenQuotationPopup(true); // Open the quotation popup
  };

  const handleCloseQuotationPopup = () => {
    setOpenQuotationPopup(false);
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

        <Box mb={2} display="flex" alignItems="center">
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
            onChange={(event) => setSearchValue(event.target.value)}
          />

          <Button
            variant="contained"
            sx={{ marginLeft: "1rem", mt: 9 }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>

        {waitingVehicles.length > 0 ? (
          waitingVehicles.map((vehicle: any, index: number) => (
            <Box
              key={vehicle._id}
              mb={1}
              sx={{
                backgroundColor:
                  highlightedIndex === index ? "#ffef9f" : "transparent",
                padding: 1,
                cursor: "pointer",
              }}
              onClick={() => handleOpenDefineCustomerModal(vehicle)}
            >
              <Typography
                color={highlightedIndex === index ? "#002e6e" : "inherit"}
              >
                {vehicle.vehicle_number}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography color="#002e6e">No vehicles found.</Typography>
        )}
      </Grid>

      {/* Vehicle Details Modal */}
      <Dialog open={open} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle>Define Customer</DialogTitle>
        <DialogContent>
          {selectedVehicle ? (
            <Box>
              <Typography variant="body1">
                Vehicle Number: {selectedVehicle.vehicle_number}
              </Typography>
              <Typography variant="body1">
                Entry For: {selectedVehicle.entry_for}
              </Typography>
              <Typography variant="body1">
                Status: {selectedVehicle.status}
              </Typography>
              <Typography variant="body1">
                Entry Time:{" "}
                {new Date(selectedVehicle.entry_time).toLocaleString()}
              </Typography>
            </Box>
          ) : (
            <Typography variant="body1">No vehicle selected.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenVehicleInfoModal} // Open job card modal
          >
            Create Job Card
          </Button>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Job Card Modal */}
      <VehicleInfo
        open={vehicleInfoOpen}
        handleClose={handleCloseVehicleInfoModal}
        onProceed={handleOpenUploadPhotoModal}
      />

      {/* Upload Photo Exterior Modal */}
      <UploadPhotoExterior
        open={uploadPhotoOpen}
        handleClose={handleCloseUploadPhotoModal}
        onProceed={handleOpenPhotoInterior}
      />

      <UploadPhotoInterior
        open={openPhotoInterior}
        handleClose={handleClosePhotoInterior}
        onProceed={handleOpenQuotationPopup}
      />

      <Quotation
        open={openQuotationPopup}
        handleClose={handleCloseQuotationPopup}
      />
    </Grid>
  );
}
