import React, { useState } from "react";
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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const StyledGrid = styled(Grid)(() => ({
  backgroundColor: "#002e6e",
}));

export default function VehicleEntryPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  const [vehicleNumber, setVehicleNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    toast.success(`Vehicle ${vehicleNumber} selected for ${selectedOption}`);
    setIsModalOpen(true);
    console.log("Vehicle Number:", vehicleNumber);
    console.log("Selected Option:", selectedOption);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
      <Box>
      </Box>
      </Grid>
      <Grid item xs={6} md={8}>
      <Box sx={{border: 1 , borderColor: 'divider' , borderRadius: '16px' , mt :15 , p :2 , mr : 24}}>
      <Tabs aria-label="basic tabs example">
          <Tab label="Vehicle Entry" style={{minWidth:"50%"}}  />
          <Tab label="Vehicle Exit"  style={{minWidth:"50%"}}/>
        </Tabs>
     </Box>
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
        <Box width={"9rem"}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => setSelectedOption("Service")}
          >
            Service
          </Button>
        </Box>
        <Box width={"9rem"}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => setSelectedOption("Delivery")}
          >
            Delivery
          </Button>
        </Box>
        <Box width={"9rem"}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => setSelectedOption("Pickup")}
          >
            Pickup
          </Button>
        </Box>
        <Box width={"9rem"}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => setSelectedOption("Staff")}
          >
            Staff
          </Button>
        </Box>
        <Box width={"9rem"}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => setSelectedOption("Test Drive")}
          >
            Test Drive
          </Button>
        </Box>
      </Grid>
      {isModalOpen && (
        <div className="modalBackground" onClick={handleCloseModal}>
          <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
            <Typography variant="h6" gutterBottom>
              Are you absolutely sure?
            </Typography>
            <Typography variant="body1">
              This action cannot be undone. This will permanently save your data
              on our server.
            </Typography>
            <Box
              sx={{
                mt: 1,
                display: "flex",
                gap: 1,
                flexDirection: { xs: "column", sm: "row-reverse" },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleCloseModal}
              >
                Continue
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
            </Box>
          </div>
        </div>
      )} 
      </Grid>
   </Grid>   
    </>
  );
}
