import React, { useState } from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import { Person } from "@mui/icons-material";
import { Box } from "@mui/joy";
import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import DefineCustomer from "../waiting-vehicles/DefineCustomer";
import VehicleInfo from "../waiting-vehicles/VehicleInfo";
import UploadPhotoInterior from "../waiting-vehicles/UploadPhotoInterior";
import UploadPhotoExterior from "../waiting-vehicles/UploadPhotoExterior";

export default function DashboardSidebar() {
  const classes =
    "MuiListItemButton-root MuiListItemButton-colorNeutral MuiListItemButton-variantPlain css-1xphdof-JoyListItemButton-root";
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
      <Box
        sx={{
          "--ListItem-radius": "var(--joy-radius-sm)",
          "--List-gap": "15px",
        }}
      >
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            "& .JoyListItemButton-root": { p: "8px" },
            rowGap: 1,
          }}
        >
          <ListItem
            sx={(theme) => ({
              justifyContent: "center",
              padding: "15px 10px",
              "&:hover": {
                background: theme.colorSchemes.light.palette.background.level2,
              },
            })}
          >
            <Link className={classes} href="/">
              <ListItemDecorator
                sx={{ m: 0, justifyContent: "center", width: "100%" }}
              >
                <DashboardIcon />
              </ListItemDecorator>
              <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
                Dashboard
              </ListItemContent>
            </Link>
          </ListItem>
          <ListItem
            sx={(theme) => ({
              justifyContent: "center",
              padding: "15px 10px",
              "&:hover": {
                background: theme.colorSchemes.light.palette.background.level2,
              },
            })}
          >
            <Link className={classes} href="/">
              <ListItemDecorator
                sx={{
                  color: "neutral.500",
                  width: "100%",
                  m: 0,
                  justifyContent: "center",
                }}
              >
                <LocalParkingIcon />
              </ListItemDecorator>
              <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
                Parked
              </ListItemContent>
            </Link>
          </ListItem>
          <ListItem
            sx={(theme) => ({
              justifyContent: "center",
              padding: "15px 10px",
              "&:hover": {
                background: theme.colorSchemes.light.palette.background.level2,
              },
            })}
          >
            <Link className={classes} href="/quotation">
              <ListItemDecorator
                sx={{
                  color: "neutral.500",
                  width: "100%",
                  m: 0,
                  justifyContent: "center",
                }}
              >
                <DirectionsCarIcon />
              </ListItemDecorator>
              <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
                Complete Vehicle
              </ListItemContent>
            </Link>
          </ListItem>
          <ListItem
            sx={(theme) => ({
              justifyContent: "center",
              padding: "15px 10px",
              "&:hover": {
                background: theme.colorSchemes.light.palette.background.level2,
              },
            })}
          >
            <Link className={classes} href="/">
              <ListItemDecorator
                sx={{
                  color: "neutral.500",
                  width: "100%",
                  m: 0,
                  justifyContent: "center",
                }}
                onClick={handleOpenDefineCustomerModal}
              >
                <HourglassEmptyIcon />
              </ListItemDecorator>
              <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
                Waiting Vehicle
              </ListItemContent>
            </Link>
          </ListItem>
          <ListItem
            sx={(theme) => ({
              justifyContent: "center",
              padding: "15px 10px",
              "&:hover": {
                background: theme.colorSchemes.light.palette.background.level2,
              },
            })}
          >
            <Link className={classes} href="/">
              <ListItemDecorator
                sx={{
                  color: "neutral.500",
                  width: "100%",
                  m: 0,
                  justifyContent: "center",
                }}
              >
                <PeopleIcon />
              </ListItemDecorator>
              <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
                Workforce
              </ListItemContent>
            </Link>
          </ListItem>
          <ListItem
            sx={(theme) => ({
              justifyContent: "center",
              padding: "15px 10px",
              "&:hover": {
                background: theme.colorSchemes.light.palette.background.level2,
              },
            })}
          >
            <Link className={classes} href="/profile">
              <ListItemDecorator
                sx={{
                  color: "neutral.500",
                  width: "100%",
                  m: 0,
                  justifyContent: "center",
                }}
              >
                <Person />
              </ListItemDecorator>
              <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
                Profile
              </ListItemContent>
            </Link>
          </ListItem>
        </List>
      </Box>
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
}
