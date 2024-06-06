import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Card,
  CardContent,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DefineCustomer from "../waiting-vehicles/DefineCustomer";
import VehicleInfo from "../waiting-vehicles/VehicleInfo";
import UploadPhotoInterior from "../waiting-vehicles/UploadPhotoInterior";
import UploadPhotoExterior from "../waiting-vehicles/UploadPhotoExterior";

// line chart
const linechart = {
  credits: {
    enabled: false,
  },
  chart: {
    height: "300px",
    type: "line",
  },
  title: {
    text: "Vehicle Count",
    align: "left",
  },

  xAxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {},
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: false,
    },
  },
  series: [
    {
      data: [10, 16, 21, 29, 32, 39, 45],
    },
  ],
};

// column chart
const columnchart = {
  credits: {
    enabled: false,
  },
  chart: {
    height: "300px",
    type: "column",
  },
  title: {
    text: "Monthly Data",
    align: "left",
  },

  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    crosshair: true,
    accessibility: {
      description: "Months",
    },
  },
  yAxis: {
    min: 0,
  },
  tooltip: {
    valueSuffix: " (1000 MT)",
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Corn",
      data: [200, 300, 500, 100, 400, 500],
    },
    {
      name: "Wheat",
      data: [500, 200, 400, 300, 100, 200],
    },
  ],
};

// pie chart
const piechart = {
  credits: {
    enabled: false,
  },
  chart: {
    height: "300px",
    type: "pie",
  },
  title: {
    text: "Staff Details",
  },
  tooltip: {
    valueSuffix: "%",
  },

  plotOptions: {
    series: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: [
        {
          enabled: true,
          distance: 20,
        },
        {
          enabled: true,
          distance: -40,
          format: "{point.percentage:.1f}%",
          style: {
            fontSize: "1.2em",
            textOutline: "none",
            opacity: 0.7,
          },
          filter: {
            operator: ">",
            property: "percentage",
            value: 10,
          },
        },
      ],
    },
  },
  series: [
    {
      name: "Percentage",
      colorByPoint: true,
      data: [
        {
          name: "Water",
          y: 55.02,
        },
        {
          name: "Fat",
          sliced: true,
          selected: true,
          y: 26.71,
        },
        {
          name: "Protein",
          y: 15.5,
        },
      ],
    },
  ],
};

const DashboardPage = () => {
  const [openDefineCustomerModal, setOpenDefineCustomerModal] = useState(false);
  const [openVehicleInfoModal, setOpenVehicleInfoModal] = useState(false);

  const handleCloseDefineCustomerModal = () =>
    setOpenDefineCustomerModal(false);
  const handleOpenDefineCustomerModal = () => setOpenDefineCustomerModal(true);

  const handleCloseVehicleInfoModal = () => setOpenVehicleInfoModal(false);
  const handleOpenVehicleInfoModal = () => {
    setOpenDefineCustomerModal(false);
    setOpenVehicleInfoModal(true);
  };

  const [isVehicleInfoOpen, setIsVehicleInfoOpen] = useState(false);
  const [isUploadPhotographsOpen, setIsUploadPhotographsOpen] = useState(false);

  const handleVehicleInfoOpen = () => setIsVehicleInfoOpen(true);
  const handleVehicleInfoClose = () => setIsVehicleInfoOpen(false);

  const handleUploadPhotographsOpen = () => {
    setIsVehicleInfoOpen(false);
    setIsUploadPhotographsOpen(true);
  };
  const handleUploadPhotographsClose = () => setIsUploadPhotographsOpen(false);

  const [openInteriorUpload, setOpenInteriorUpload] = useState(false);
  const [openExteriorUpload, setOpenExteriorUpload] = useState(false);

  const handleOpenInteriorUpload = () => {
    setOpenInteriorUpload(true);
  };

  const handleCloseInteriorUpload = () => {
    setOpenInteriorUpload(false);
  };

  const handleOpenExteriorUpload = () => {
    setOpenExteriorUpload(true);
  };

  const handleCloseExteriorUpload = () => {
    setOpenExteriorUpload(false);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="fixed">
        <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer variant="permanent" anchor="left">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                py: 2,
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
            >
              <ListItemIcon sx={{ justifyContent: "center", minWidth: "auto" }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                py: 2,
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
            >
              <ListItemIcon sx={{ justifyContent: "center", minWidth: "auto" }}>
                <LocalParkingIcon />
              </ListItemIcon>
              <ListItemText primary="Parked" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                py: 2,
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
            >
              <ListItemIcon sx={{ justifyContent: "center", minWidth: "auto" }}>
                <DirectionsCarIcon />
              </ListItemIcon>
              <ListItemText primary="Completed Vehicles" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                py: 2,
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
              // onClick={handleOpen}
              onClick={handleOpenDefineCustomerModal}
            >
              <ListItemIcon sx={{ justifyContent: "center", minWidth: "auto" }}>
                <HourglassEmptyIcon />
              </ListItemIcon>
              <ListItemText primary="Waiting Vehicles" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                py: 2,
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
            >
              <ListItemIcon sx={{ justifyContent: "center", minWidth: "auto" }}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Workforce" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                py: 2,
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
            >
              <ListItemIcon sx={{ justifyContent: "center", minWidth: "auto" }}>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Grid Cards */}
      <Grid
        container
        spacing={3}
        style={{ padding: "20px" }}
        marginLeft={"135px"}
        marginTop={"30px"}
      >
        {" "}
        <Grid item xs={12} sm={6} md={3.5}>
          <Card>
            <div>
              <HighchartsReact highcharts={Highcharts} options={linechart} />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3.5}>
          <Card>
            <div>
              <HighchartsReact highcharts={Highcharts} options={columnchart} />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3.5}>
          <Card>
            <div>
              <HighchartsReact highcharts={Highcharts} options={piechart} />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3.5}>
          <Card>
            <CardContent>
              <Typography variant="h6">Yard Vehicles</Typography>
              <Typography>Currently Active: 7</Typography>
              <Typography>Last Week: 6</Typography>
              <Typography>Last 30 Days: 10</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3.5}>
          <Card>
            <CardContent>
              <Typography variant="h6">Vehicles Received</Typography>
              <Typography>Against Active RFQ: 5</Typography>
              <Typography>Last Week: 3</Typography>
              <Typography>Last 30 Days: 10</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3.5}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Vehicles Placed</Typography>
              <Typography>Last 7 Days: 4</Typography>
              <Typography>Last Week: 3</Typography>
              <Typography>Last 30 Days: 9</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <DefineCustomer
        open={openDefineCustomerModal}
        handleClose={handleCloseDefineCustomerModal}
        handleOpenVehicleInfo={handleOpenVehicleInfoModal}
      />

      <VehicleInfo
        open={openVehicleInfoModal}
        handleClose={handleCloseVehicleInfoModal}
        onProceed={handleUploadPhotographsOpen}
      />

      <UploadPhotoInterior
        open={isUploadPhotographsOpen}
        handleClose={handleUploadPhotographsClose}
        onProceed={() => {
          handleCloseInteriorUpload();
          handleOpenExteriorUpload();
        }}
      />
      <UploadPhotoExterior
        open={openExteriorUpload}
        handleClose={handleCloseExteriorUpload}
      />
    </>
  );
};

export default DashboardPage;
