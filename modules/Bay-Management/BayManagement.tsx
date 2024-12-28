// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   Avatar,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Divider,
//   IconButton,
//   Collapse,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// const BayManagement = () => {
//   const [expandedRow, setExpandedRow] = useState(null);

//   const vehicles = [
//     {
//       make: "BMW Black Adition",
//       id: "BMW00232152",
//       modelYear: "2017",
//       model: "X1",
//       license: "MP 00 GD 1234",
//       type: "Auto Transmission",
//       status: "Working",
//     },
//     {
//       make: "Hundai Grand I10",
//       id: "Hu2132145544",
//       modelYear: "2022",
//       model: "i10",
//       license: "MP 00 GH 1234",
//       type: "Auto Transmission",
//       status: "Working",
//     },
//     {
//       make: "Hundai i20",
//       id: "Hu2132145544",
//       modelYear: "2022",
//       model: "i10",
//       license: "MP 00 GH 1234",
//       type: "Auto Transmission",
//       status: "Parking",
//     },
//   ];

//   const workers = [
//     {
//       name: "Holly Golightly",
//       rating: 3.5,
//       availability: "Available in 2nd half for 2 days",
//     },
//     {
//       name: "Holly Golightly",
//       rating: 3.5,
//       availability: "Available in 2nd half for 2 days",
//     },
//   ];

//   const parts = [
//     {
//       sn: 1,
//       id: "ST012345",
//       date: "22-02-2024",
//       name: "Air Filter",
//       category: "Car Part",
//       modelNo: "BNP-1236",
//       quantity: 2,
//       stock: 1000,
//       price: 50000,
//     },
//   ];

//   const maintenanceLog = [
//     {
//       sn: 1,
//       vehicleNo: "MP 00 GH 1234",
//       date: "22-02-2024",
//       description: "Car Part",
//       modelName: "Grand I10",
//       estimate: 1500,
//       spareCost: 250,
//       labourCost: 150,
//       totalCost: 1900,
//     },
//   ];

//   const parkingLog = [
//     {
//       parkingDate: "22-02-2024",
//       parkingTime: "10:30:12 AM",
//       vehicleType: "Car",
//       vehicleNo: "MP09CZ0001",
//       parkingZone: "Par-J",
//       parkDays: 5,
//     },
//   ];

//   const handleRowClick = (index: any) => {
//     setExpandedRow(expandedRow === index ? null : index);
//   };

//   return (
//     <Box sx={{ padding: 1 }}>
//       <Box
//         display="flex"
//         flexDirection={{ xs: "column", sm: "row" }}
//         justifyContent="space-between"
//         alignItems={{ xs: "flex-start", sm: "center" }}
//         mb={2}
//       >
//         <Typography variant="h5" gutterBottom>
//           Bay Management
//         </Typography>
//         <Box
//           display="flex"
//           flexDirection={{ xs: "column", sm: "row" }}
//           alignItems={{ xs: "flex-start", sm: "center" }}
//           mt={{ xs: 2, sm: 0 }}
//         >
//           <TextField
//             label="Search orders"
//             variant="outlined"
//             size="small"
//             sx={{ marginBottom: { xs: 2, sm: 0 }, marginRight: { sm: 2 } }}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginBottom: { xs: 2, sm: 0 }, marginRight: { sm: 2 } }}
//           >
//             Search
//           </Button>
//         </Box>
//       </Box>
//       <Divider />
//       <Box sx={{ display: "flex", alignItems: "center", mb: 3, mt: 2 }}>
//         <Avatar sx={{ mr: 2 }}>CM</Avatar>
//         <Box>
//           <Typography variant="h6">Christopher Master</Typography>
//           <Typography variant="body2" color="textSecondary">
//             Chief Bay Manager
//           </Typography>
//         </Box>
//       </Box>
//       <Divider />

//       <Typography variant="h5" gutterBottom sx={{ mt: 1 }}>
//         Vehicle Maintenance Log
//       </Typography>

//       <TableContainer component={Paper} sx={{ mb: 2 }}>
//         <Table>
//           <TableHead>
//             <TableRow sx={{ backgroundColor: "#D3D3D3" }}>
//               <TableCell>Vehicle Make</TableCell>
//               <TableCell>Vehicle ID No</TableCell>
//               <TableCell>Model Year</TableCell>
//               <TableCell>Model</TableCell>
//               <TableCell>License Plate No</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {vehicles.map((vehicle, index) => (
//               <>
//                 <TableRow key={index}>
//                   <TableCell>{vehicle.make}</TableCell>
//                   <TableCell>{vehicle.id}</TableCell>
//                   <TableCell>{vehicle.modelYear}</TableCell>
//                   <TableCell>{vehicle.model}</TableCell>
//                   <TableCell>{vehicle.license}</TableCell>
//                   <TableCell>{vehicle.type}</TableCell>
//                   <TableCell>{vehicle.status}</TableCell>
//                   <TableCell>
//                     <IconButton onClick={() => handleRowClick(index)}>
//                       {expandedRow === index ? (
//                         <ExpandLessIcon />
//                       ) : (
//                         <ExpandMoreIcon />
//                       )}
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell
//                     style={{ paddingBottom: 0, paddingTop: 0 }}
//                     colSpan={8}
//                   >
//                     <Collapse
//                       in={expandedRow === index}
//                       timeout="auto"
//                       unmountOnExit
//                     >
//                       <Box sx={{ margin: 2 }}>
//                         {vehicle.status === "Working" && (
//                           <>
//                             <Typography variant="h6" gutterBottom>
//                               Assign Workers
//                             </Typography>
//                             <Grid container spacing={2} sx={{ mb: 3 }}>
//                               {workers.map((worker, workerIndex) => (
//                                 <Grid item xs={12} md={4} key={workerIndex}>
//                                   <Paper sx={{ p: 2 }}>
//                                     <Box
//                                       sx={{
//                                         display: "flex",
//                                         alignItems: "center",
//                                         mb: 2,
//                                       }}
//                                     >
//                                       <Avatar sx={{ mr: 2 }}>HG</Avatar>
//                                       <Box>
//                                         <Typography variant="body1">
//                                           {worker.name}
//                                         </Typography>
//                                         <Typography
//                                           variant="body2"
//                                           color="textSecondary"
//                                         >
//                                           {worker.rating} ★★★★★
//                                         </Typography>
//                                       </Box>
//                                     </Box>
//                                     <Typography
//                                       variant="body2"
//                                       color="textSecondary"
//                                       sx={{ mb: 2 }}
//                                     >
//                                       {worker.availability}
//                                     </Typography>
//                                     <Button variant="contained" size="small">
//                                       Add Worker
//                                     </Button>
//                                   </Paper>
//                                 </Grid>
//                               ))}
//                             </Grid>

//                             <Typography variant="h6" gutterBottom>
//                               Request Part
//                             </Typography>
//                             <TableContainer component={Paper} sx={{ mb: 3 }}>
//                               <Table>
//                                 <TableHead>
//                                   <TableRow sx={{ backgroundColor: "#0000FF" }}>
//                                     <TableCell sx={{ color: "white" }}>
//                                       S.No.
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       ID
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Date
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Product Name Items
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Category
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Model No
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Quantity
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Available Stock
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Unit Price
//                                     </TableCell>
//                                   </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                   {parts.map((part, partIndex) => (
//                                     <TableRow key={partIndex}>
//                                       <TableCell>{part.sn}</TableCell>
//                                       <TableCell>{part.id}</TableCell>
//                                       <TableCell>{part.date}</TableCell>
//                                       <TableCell>{part.name}</TableCell>
//                                       <TableCell>{part.category}</TableCell>
//                                       <TableCell>{part.modelNo}</TableCell>
//                                       <TableCell>{part.quantity}</TableCell>
//                                       <TableCell>{part.stock}</TableCell>
//                                       <TableCell>{part.price}</TableCell>
//                                     </TableRow>
//                                   ))}
//                                 </TableBody>
//                               </Table>
//                             </TableContainer>

//                             <Typography variant="h6" gutterBottom>
//                               Add Maintenance Logs
//                             </Typography>
//                             <TableContainer component={Paper} sx={{ mb: 3 }}>
//                               <Table>
//                                 <TableHead>
//                                   <TableRow sx={{ backgroundColor: "#0000FF" }}>
//                                     <TableCell sx={{ color: "white" }}>
//                                       S.No.
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Vehicle No.
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Date
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Description
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Model Name
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Estimate
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Spare Cost
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Labour Cost
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Total Cost
//                                     </TableCell>
//                                   </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                   {maintenanceLog.map((log, logIndex) => (
//                                     <TableRow key={logIndex}>
//                                       <TableCell>{log.sn}</TableCell>
//                                       <TableCell>{log.vehicleNo}</TableCell>
//                                       <TableCell>{log.date}</TableCell>
//                                       <TableCell>{log.description}</TableCell>
//                                       <TableCell>{log.modelName}</TableCell>
//                                       <TableCell>{log.estimate}</TableCell>
//                                       <TableCell>{log.spareCost}</TableCell>
//                                       <TableCell>{log.labourCost}</TableCell>
//                                       <TableCell>{log.totalCost}</TableCell>
//                                     </TableRow>
//                                   ))}
//                                 </TableBody>
//                               </Table>
//                             </TableContainer>
//                           </>
//                         )}
//                         {vehicle.status === "Parking" && (
//                           <>
//                             <Typography variant="h6" gutterBottom>
//                               Parking Details
//                             </Typography>
//                             <TableContainer component={Paper} sx={{ mb: 3 }}>
//                               <Table>
//                                 <TableHead>
//                                   <TableRow sx={{ backgroundColor: "#0000FF" }}>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Parking Date
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Parking Time
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Vehicle Type
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Vehicle No
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Parking Zone
//                                     </TableCell>
//                                     <TableCell sx={{ color: "white" }}>
//                                       Park Days
//                                     </TableCell>
//                                   </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                   {parkingLog.map((log, logIndex) => (
//                                     <TableRow key={logIndex}>
//                                       <TableCell>{log.parkingDate}</TableCell>
//                                       <TableCell>{log.parkingTime}</TableCell>
//                                       <TableCell>{log.vehicleType}</TableCell>
//                                       <TableCell>{log.vehicleNo}</TableCell>
//                                       <TableCell>{log.parkingZone}</TableCell>
//                                       <TableCell>{log.parkDays}</TableCell>
//                                     </TableRow>
//                                   ))}
//                                 </TableBody>
//                               </Table>
//                             </TableContainer>
//                           </>
//                         )}
//                       </Box>
//                     </Collapse>
//                   </TableCell>
//                 </TableRow>
//               </>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default BayManagement;

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Divider,
  IconButton,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const BayManagement = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8000/api/vehicles/bay",
          {
            params: { search_key: searchKey, page: 1, limit: 10 },
          }
        );

        const vehicleData = response.data.data?.data;
        console.log("API Response:", vehicleData);

        if (Array.isArray(vehicleData)) {
          setVehicles(vehicleData);
        } else {
          console.error("Unexpected data format:", vehicleData);
          setVehicles([]);
        }
      } catch (error) {
        console.error("Error fetching vehicles:", error);
        setVehicles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [searchKey]);

  // Handle search button click
  const handleSearch = () => {
    setLoading(true);
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  const workers = [
    {
      name: "Holly Golightly",
      rating: 3.5,
      availability: "Available in 2nd half for 2 days",
    },
    {
      name: "Holly Golightly",
      rating: 3.5,
      availability: "Available in 2nd half for 2 days",
    },
  ];

  const maintenanceLog = [
    {
      sn: 1,
      vehicleNo: "MP 00 GH 1234",
      date: "22-02-2024",
      description: "Car Part",
      modelName: "Grand I10",
      estimate: 1500,
      spareCost: 250,
      labourCost: 150,
      totalCost: 1900,
    },
  ];

  const parkingLog = [
    {
      parkingDate: "22-02-2024",
      parkingTime: "10:30:12 AM",
      vehicleType: "Car",
      vehicleNo: "MP09CZ0001",
      parkingZone: "Par-J",
      parkDays: 5,
    },
  ];

  const handleRowClick = (index: any) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <Box sx={{ padding: 1 }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        mb={2}
      >
        <Typography variant="h5" gutterBottom>
          Bay Management
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          mt={{ xs: 2, sm: 0 }}
        >
          <TextField
            label="Search orders"
            variant="outlined"
            size="small"
            sx={{ marginBottom: { xs: 2, sm: 0 }, marginRight: { sm: 2 } }}
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{ marginBottom: { xs: 2, sm: 0 }, marginRight: { sm: 2 } }}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", alignItems: "center", mb: 3, mt: 2 }}>
        <Avatar sx={{ mr: 2 }}>CM</Avatar>
        <Box>
          <Typography variant="h6">Christopher Master</Typography>
          <Typography variant="body2" color="textSecondary">
            Chief Bay Manager
          </Typography>
        </Box>
      </Box>
      <Divider />

      <Typography variant="h5" gutterBottom sx={{ mt: 1 }}>
        Vehicle Maintenance Log
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#D3D3D3" }}>
              <TableCell>Vehicle Make</TableCell>
              <TableCell>Vehicle ID No</TableCell>
              <TableCell>Model Year</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>License Plate No</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles.map((vehicle) => (
              <>
                <TableRow key={vehicle._id}>
                  <TableCell>{vehicle.make_and_model}</TableCell>
                  <TableCell>{vehicle.vehicle_number}</TableCell>
                  <TableCell>{vehicle.modelYear}</TableCell>
                  <TableCell>{vehicle.model_no}</TableCell>
                  <TableCell>{vehicle.license}</TableCell>
                  <TableCell>{vehicle.vehicle_type}</TableCell>
                  <TableCell>{vehicle.status}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleRowClick(vehicle._id)}>
                      {expandedRow === vehicle._id ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={8}
                  >
                    <Collapse
                      in={expandedRow === vehicle._id}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box sx={{ margin: 2 }}>
                        {vehicle.status === "Parking" && (
                          <>
                            <Typography variant="h6" gutterBottom>
                              Assign Workers
                            </Typography>
                            <Grid container spacing={2} sx={{ mb: 3 }}>
                              {workers.map((worker, workerIndex) => (
                                <Grid item xs={12} md={4} key={workerIndex}>
                                  <Paper sx={{ p: 2 }}>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 2,
                                      }}
                                    >
                                      <Avatar sx={{ mr: 2 }}>HG</Avatar>
                                      <Box>
                                        <Typography variant="body1">
                                          {worker.name}
                                        </Typography>
                                        <Typography
                                          variant="body2"
                                          color="textSecondary"
                                        >
                                          {worker.rating} ★★★★★
                                        </Typography>
                                      </Box>
                                    </Box>
                                    <Typography
                                      variant="body2"
                                      color="textSecondary"
                                      sx={{ mb: 2 }}
                                    >
                                      {worker.availability}
                                    </Typography>
                                    <Button variant="contained" size="small">
                                      Add Worker
                                    </Button>
                                  </Paper>
                                </Grid>
                              ))}
                            </Grid>

                            <Typography variant="h6" gutterBottom>
                              Request Part
                            </Typography>
                            <TableContainer component={Paper} sx={{ mb: 3 }}>
                              <Table>
                                <TableHead>
                                  <TableRow sx={{ backgroundColor: "#0000FF" }}>
                                    <TableCell sx={{ color: "white" }}>
                                      S.No.
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Date
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Product Name
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Category
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Quantity
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Available Stock
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Unit Price
                                    </TableCell>
                                  </TableRow>
                                </TableHead>

                                <TableBody>
                                  {vehicle.request_parts.map(
                                    (part, partIndex) => (
                                      <TableRow key={partIndex}>
                                        <TableCell>{partIndex + 1}</TableCell>
                                        <TableCell>
                                          {new Date(
                                            part.createdAt
                                          ).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell>
                                          {part.product_details?.name || "N/A"}
                                        </TableCell>
                                        <TableCell>
                                          {part.product_details?.category_id ||
                                            "N/A"}
                                        </TableCell>
                                        <TableCell>
                                          {part.quantity || 0}
                                        </TableCell>
                                        <TableCell>
                                          {part.product_details?.stock || 0}
                                        </TableCell>
                                        <TableCell>
                                          {part.product_details?.price || 0}
                                        </TableCell>
                                      </TableRow>
                                    )
                                  )}
                                </TableBody>
                              </Table>
                            </TableContainer>

                            <Typography variant="h6" gutterBottom>
                              Add Maintenance Logs
                            </Typography>
                            <TableContainer component={Paper} sx={{ mb: 3 }}>
                              <Table>
                                <TableHead>
                                  <TableRow sx={{ backgroundColor: "#0000FF" }}>
                                    <TableCell sx={{ color: "white" }}>
                                      S.No.
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Vehicle No.
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Date
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Description
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Model Name
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Estimate
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Spare Cost
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Labour Cost
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Total Cost
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {maintenanceLog.map((log, logIndex) => (
                                    <TableRow key={logIndex}>
                                      <TableCell>{log.sn}</TableCell>
                                      <TableCell>{log.vehicleNo}</TableCell>
                                      <TableCell>{log.date}</TableCell>
                                      <TableCell>{log.description}</TableCell>
                                      <TableCell>{log.modelName}</TableCell>
                                      <TableCell>{log.estimate}</TableCell>
                                      <TableCell>{log.spareCost}</TableCell>
                                      <TableCell>{log.labourCost}</TableCell>
                                      <TableCell>{log.totalCost}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </>
                        )}
                        {/* {vehicle.status === "Parking" && (
                          <>
                            <Typography variant="h6" gutterBottom>
                              Parking Details
                            </Typography>
                            <TableContainer component={Paper} sx={{ mb: 3 }}>
                              <Table>
                                <TableHead>
                                  <TableRow sx={{ backgroundColor: "#0000FF" }}>
                                    <TableCell sx={{ color: "white" }}>
                                      Parking Date
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Parking Time
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Vehicle Type
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Vehicle No
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Parking Zone
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }}>
                                      Park Days
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {parkingLog.map((log, logIndex) => (
                                    <TableRow key={logIndex}>
                                      <TableCell>{log.parkingDate}</TableCell>
                                      <TableCell>{log.parkingTime}</TableCell>
                                      <TableCell>{log.vehicleType}</TableCell>
                                      <TableCell>{log.vehicleNo}</TableCell>
                                      <TableCell>{log.parkingZone}</TableCell>
                                      <TableCell>{log.parkDays}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </>
                        )} */}
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BayManagement;
