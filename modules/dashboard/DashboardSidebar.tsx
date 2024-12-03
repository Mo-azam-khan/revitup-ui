// import React, { useState } from "react";
// import List from "@mui/joy/List";
// import ListItem from "@mui/joy/ListItem";
// import ListItemDecorator from "@mui/joy/ListItemDecorator";
// import ListItemContent from "@mui/joy/ListItemContent";
// import { Person } from "@mui/icons-material";
// import { Box } from "@mui/joy";
// import Link from "next/link";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import LocalParkingIcon from "@mui/icons-material/LocalParking";
// import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
// import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
// import DefineCustomer from "../waiting-vehicles/DefineCustomer";
// import VehicleInfo from "../waiting-vehicles/VehicleInfo";
// import UploadPhotoInterior from "../waiting-vehicles/UploadPhotoInterior";
// import UploadPhotoExterior from "../waiting-vehicles/UploadPhotoExterior";

// export default function DashboardSidebar() {
//   const classes =
//     "MuiListItemButton-root MuiListItemButton-colorNeutral MuiListItemButton-variantPlain css-1xphdof-JoyListItemButton-root";
//   const [openDefineCustomerModal, setOpenDefineCustomerModal] = useState(false);
//   const [openVehicleInfoModal, setOpenVehicleInfoModal] = useState(false);

//   const handleCloseDefineCustomerModal = () =>
//     setOpenDefineCustomerModal(false);
//   const handleOpenDefineCustomerModal = () => setOpenDefineCustomerModal(true);

//   const handleCloseVehicleInfoModal = () => setOpenVehicleInfoModal(false);
//   const handleOpenVehicleInfoModal = () => {
//     setOpenDefineCustomerModal(false);
//     setOpenVehicleInfoModal(true);
//   };

//   const [isVehicleInfoOpen, setIsVehicleInfoOpen] = useState(false);
//   const [isUploadPhotographsOpen, setIsUploadPhotographsOpen] = useState(false);

//   const handleVehicleInfoOpen = () => setIsVehicleInfoOpen(true);
//   const handleVehicleInfoClose = () => setIsVehicleInfoOpen(false);

//   const handleUploadPhotographsOpen = () => {
//     setIsVehicleInfoOpen(false);
//     setIsUploadPhotographsOpen(true);
//   };
//   const handleUploadPhotographsClose = () => setIsUploadPhotographsOpen(false);

//   const [openInteriorUpload, setOpenInteriorUpload] = useState(false);
//   const [openExteriorUpload, setOpenExteriorUpload] = useState(false);

//   const handleOpenInteriorUpload = () => {
//     setOpenInteriorUpload(true);
//   };

//   const handleCloseInteriorUpload = () => {
//     setOpenInteriorUpload(false);
//   };

//   const handleOpenExteriorUpload = () => {
//     setOpenExteriorUpload(true);
//   };

//   const handleCloseExteriorUpload = () => {
//     setOpenExteriorUpload(false);
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           "--ListItem-radius": "var(--joy-radius-sm)",
//           "--List-gap": "15px",
//         }}
//       >
//         <List
//           aria-labelledby="nav-list-browse"
//           sx={{
//             "& .JoyListItemButton-root": { p: "8px" },
//             rowGap: 1,
//           }}
//         >
//           <ListItem
//             sx={(theme) => ({
//               justifyContent: "center",
//               padding: "15px 10px",
//               "&:hover": {
//                 background: theme.colorSchemes.light.palette.background.level2,
//               },
//             })}
//           >
//             <Link className={classes} href="/">
//               <ListItemDecorator
//                 sx={{ m: 0, justifyContent: "center", width: "100%" }}
//               >
//                 <DashboardIcon />
//               </ListItemDecorator>
//               <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
//                 Dashboard
//               </ListItemContent>
//             </Link>
//           </ListItem>
//           <ListItem
//             sx={(theme) => ({
//               justifyContent: "center",
//               padding: "15px 10px",
//               "&:hover": {
//                 background: theme.colorSchemes.light.palette.background.level2,
//               },
//             })}
//           >
//             <Link className={classes} href="/">
//               <ListItemDecorator
//                 sx={{
//                   color: "neutral.500",
//                   width: "100%",
//                   m: 0,
//                   justifyContent: "center",
//                 }}
//               >
//                 <LocalParkingIcon />
//               </ListItemDecorator>
//               <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
//                 Parked
//               </ListItemContent>
//             </Link>
//           </ListItem>
//           <ListItem
//             sx={(theme) => ({
//               justifyContent: "center",
//               padding: "15px 10px",
//               "&:hover": {
//                 background: theme.colorSchemes.light.palette.background.level2,
//               },
//             })}
//           >
//             <Link className={classes} href="/quotation">
//               <ListItemDecorator
//                 sx={{
//                   color: "neutral.500",
//                   width: "100%",
//                   m: 0,
//                   justifyContent: "center",
//                 }}
//               >
//                 <DirectionsCarIcon />
//               </ListItemDecorator>
//               <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
//                 Complete Vehicle
//               </ListItemContent>
//             </Link>
//           </ListItem>
//           <ListItem
//             sx={(theme) => ({
//               justifyContent: "center",
//               padding: "15px 10px",
//               "&:hover": {
//                 background: theme.colorSchemes.light.palette.background.level2,
//               },
//             })}
//           >
//             <Link className={classes} href="/">
//               <ListItemDecorator
//                 sx={{
//                   color: "neutral.500",
//                   width: "100%",
//                   m: 0,
//                   justifyContent: "center",
//                 }}
//                 onClick={handleOpenDefineCustomerModal}
//               >
//                 <HourglassEmptyIcon />
//               </ListItemDecorator>
//               <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
//                 Waiting Vehicle
//               </ListItemContent>
//             </Link>
//           </ListItem>
//           <ListItem
//             sx={(theme) => ({
//               justifyContent: "center",
//               padding: "15px 10px",
//               "&:hover": {
//                 background: theme.colorSchemes.light.palette.background.level2,
//               },
//             })}
//           >
//             <Link className={classes} href="/">
//               <ListItemDecorator
//                 sx={{
//                   color: "neutral.500",
//                   width: "100%",
//                   m: 0,
//                   justifyContent: "center",
//                 }}
//               >
//                 <PeopleIcon />
//               </ListItemDecorator>
//               <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
//                 Workforce
//               </ListItemContent>
//             </Link>
//           </ListItem>
//           <ListItem
//             sx={(theme) => ({
//               justifyContent: "center",
//               padding: "15px 10px",
//               "&:hover": {
//                 background: theme.colorSchemes.light.palette.background.level2,
//               },
//             })}
//           >
//             <Link className={classes} href="/profile">
//               <ListItemDecorator
//                 sx={{
//                   color: "neutral.500",
//                   width: "100%",
//                   m: 0,
//                   justifyContent: "center",
//                 }}
//               >
//                 <Person />
//               </ListItemDecorator>
//               <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
//                 Profile
//               </ListItemContent>
//             </Link>
//           </ListItem>
//         </List>
//       </Box>
//       <DefineCustomer
//         open={openDefineCustomerModal}
//         handleClose={handleCloseDefineCustomerModal}
//         handleOpenVehicleInfo={handleOpenVehicleInfoModal}
//       />

//       <VehicleInfo
//         open={openVehicleInfoModal}
//         handleClose={handleCloseVehicleInfoModal}
//         onProceed={handleUploadPhotographsOpen}
//       />

//       <UploadPhotoInterior
//         open={isUploadPhotographsOpen}
//         handleClose={handleUploadPhotographsClose}
//         onProceed={() => {
//           handleCloseInteriorUpload();
//           handleOpenExteriorUpload();
//         }}
//       />
//       <UploadPhotoExterior
//         open={openExteriorUpload}
//         handleClose={handleCloseExteriorUpload}
//       />
//     </>
//   );
// }

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
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import InventoryIcon from "@mui/icons-material/Inventory";
import BadgeIcon from "@mui/icons-material/Badge";
import router, { useRouter } from "next/router";

export default function DashboardSidebar({ setCurrentPage }: any) {
  const router = useRouter();
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
            <Link
              className={classes}
              // href="/dashboard"
              // onClick={() => setCurrentPage("dashboard")}
              href="/dashboard"
              onClick={(e) => {
                e.preventDefault();
                router.push("/dashboard");
              }}
            >
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
            <Link className={classes} href="">
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
            <Link
              className={classes}
              // href="/quotation"
              // onClick={() => setCurrentPage("quotation")}
              href="/quotation"
              onClick={(e) => {
                e.preventDefault();
                router.push("/quotation");
              }}
            >
              <ListItemDecorator
                sx={{
                  color: "neutral.500",
                  width: "100%",
                  m: 0,
                  justifyContent: "center",
                }}
              >
                <SpeakerNotesIcon />
              </ListItemDecorator>
              <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
                Quotation
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
            <Link
              className={classes}
              // href="/bayManagement"
              // onClick={() => setCurrentPage("bayManagement")}
              href="/bayManagement"
              onClick={(e) => {
                e.preventDefault();
                router.push("/bayManagement");
              }}
            >
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
                Bay Management
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
            <Link
              className={classes}
              // href="/workerManagement"
              // onClick={() => setCurrentPage("workerManagement")}
              href="/workerManagement"
              onClick={(e) => {
                e.preventDefault();
                router.push("/workerManagement");
              }}
            >
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
                Worker
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
            <Link
              className={classes}
              // href="/employeeManagement"
              // onClick={() => setCurrentPage("employeeManagement")}
              href="/employeeManagement"
              onClick={(e) => {
                e.preventDefault();
                router.push("/employeeManagement");
              }}
            >
              <ListItemDecorator
                sx={{
                  color: "neutral.500",
                  width: "100%",
                  m: 0,
                  justifyContent: "center",
                }}
              >
                <BadgeIcon />
              </ListItemDecorator>
              <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
                HR Employee
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
            <Link
              className={classes}
              // href="/inventoryManagement"
              // onClick={() => setCurrentPage("inventoryManagement")}
              href="/inventoryManagement"
              onClick={(e) => {
                e.preventDefault();
                router.push("/inventoryManagement");
              }}
            >
              <ListItemDecorator
                sx={{
                  color: "neutral.500",
                  width: "100%",
                  m: 0,
                  justifyContent: "center",
                }}
              >
                <InventoryIcon />
              </ListItemDecorator>
              <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
                Inventory
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
            <Link
              className={classes}
              // href="/financeManagement"
              // onClick={() => setCurrentPage("financeManagement")}
              href="/financeManagement"
              onClick={(e) => {
                e.preventDefault();
                router.push("/financeManagement");
              }}
            >
              <ListItemDecorator
                sx={{
                  color: "neutral.500",
                  width: "100%",
                  m: 0,
                  justifyContent: "center",
                }}
              >
                <CurrencyRupeeIcon />
              </ListItemDecorator>
              <ListItemContent sx={{ color: "neutral.500", fontWeight: 400 }}>
                Finance
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
            <Link
              className={classes}
              // href="/profile"
              // onClick={() => setCurrentPage("profile")}
              href="/profile"
              onClick={(e) => {
                e.preventDefault();
                router.push("/profile");
              }}
            >
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
