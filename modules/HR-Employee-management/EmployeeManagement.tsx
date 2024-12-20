import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Avatar,
  Stack,
  Tabs,
  Tab,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Divider,
  Drawer,
  IconButton as MuiIconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddEmployeePopup from "./AddEmployeePopup";
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

const EmployeeManagement = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState(true);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    designation: "",
    department_name: "",
    role_id: "",
    department_id: "",
    employment_type: "",
    joining_date: "",
    password: "",
    confirm_password: "",
  });
  const [employees, setEmployees] = useState([]);
  const [counts, setCounts] = useState({
    total_employees: 0,
    present_employees: 0,
    absent_employees: 0,
    leave_employees: 0,
  });

  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  const handleAddEmployee = async (data) => {
    try {
      setLoading(true);
      const userData = { ...user };
      delete userData.department_name;
      const response = await axios.post(
        "http://localhost:8000/api/employees/create",
        data
      );
      console.log("Success:", response.data);
      alert("Employee added successfully!");
      fetchEmployees();
    } catch (error) {
      console.error("Error adding employee:", error.response.data);
      alert("Failed to add employee.");
    }
    setPopupOpen(false);
  };

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(new Date());
    };
    updateDate();
    const timer = setInterval(updateDate, 24 * 60 * 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/api/employees", {
        params: {
          page: 1,
          limit: 10,
          role_id: null,
          search_key: "",
        },
      });
      if (response.data.status) {
        setEmployees(response.data.data.data);
      } else {
        setEmployees([]);
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setIsDrawerOpen(true);
    setViewMode(false);
  };

  const handleUpdateSubmit = async (employee) => {
    try {
      // Exclude `_id` from the payload
      const {
        _id,
        token,
        availablity_status,
        isTokenActive,
        createdAt,
        updatedAt,
        __v,
        department_details,
        name_initial,
        department_name,
        ...updateData
      } = employee;

      const response = await axios.put(
        `http://localhost:8000/api/employees/${_id}`,
        updateData
      );
      if (response.data.status) {
        alert("Employee updated successfully");
        setIsDrawerOpen(false);
        fetchEmployees();
      } else {
        alert(response.data.message || "Update failed");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("An error occurred while updating the employee.");
    }
  };

  const handleDeleteClick = async (employeeId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        const response = await axios.delete(
          `http://localhost:8000/api/employees/${employeeId}`
        );
        if (response.data.status) {
          alert("Employee deleted successfully");
          fetchEmployees();
        } else {
          alert(response.data.message || "Deletion failed");
        }
      } catch (error) {
        console.error("Error deleting employee:", error);
        alert("An error occurred while deleting the employee.");
      }
    }
  };

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/employees/get-counts"
        );
        if (response.data.status) {
          setCounts({
            total_employees: response.data.data.total_employees,
            present_employees: response.data.data.present_employees,
            absent_employees: response.data.data.absent_employees,
            leave_employees: 0,
          });
        }
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  const handleViewClick = (employee) => {
    setSelectedEmployee(employee);
    setIsDrawerOpen(true);
    setViewMode(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedEmployee(null);
  };

  const attendance = [
    {
      date: "13 June 2024",
      employee: "Josh Baker",
      role: "Chief Executive Officer",
      employeeType: "Full Time",
      status: "Present",
      checkIn: "09:15 AM",
      checkOut: "07:00 PM",
      overTime: "on",
    },
  ];

  const formatDate = (date: any) => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  // if (loading) {
  //   return <Typography>Loading employees...</Typography>;
  // }

  return (
    <Box sx={{ padding: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          mb: 2,
        }}
      >
        <Typography variant="h6">HR Employee Management</Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: { xs: "left", sm: "right" } }}
        >
          {formatDate(currentDate)}
        </Typography>
      </Box>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mt: 2 }}
      >
        <Tab label="Employee Management" />
        <Tab label="Employee Attendance" />
      </Tabs>

      {tabIndex === 0 && (
        <>
          <Grid container spacing={2} sx={{ my: 2 }}>
            {["Employee", "Present", "Absent", "Leave"].map((title, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h4" color={"#FF681F"}>
                      {index === 0
                        ? counts.total_employees
                        : index === 1
                        ? counts.present_employees
                        : index === 2
                        ? counts.absent_employees
                        : counts.leave_employees}
                    </Typography>
                    <Divider sx={{ width: "100%", my: 1 }} />
                    <Typography>{title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "stretch", sm: "center" },
              mb: 2,
            }}
          >
            <TextField
              label="Search orders"
              variant="outlined"
              size="small"
              sx={{ flexGrow: 1, mb: { xs: 6, sm: 0 }, mr: { sm: 2 } }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mb: { xs: 2, sm: 0 }, mr: { sm: 2 } }}
            >
              Search
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleOpenPopup}
            >
              Add Employee
            </Button>
            <AddEmployeePopup
              open={isPopupOpen}
              onClose={handleClosePopup}
              onSubmit={handleAddEmployee}
            />
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#0d47a1" }}>
                <TableRow>
                  <TableCell sx={{ color: "white" }}>Name</TableCell>
                  <TableCell sx={{ color: "white" }}>Department</TableCell>
                  <TableCell sx={{ color: "white" }}>Joining</TableCell>
                  <TableCell sx={{ color: "white" }}>Availability</TableCell>
                  <TableCell sx={{ color: "white" }}>Check In</TableCell>
                  <TableCell sx={{ color: "white" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee, index) => (
                  <TableRow key={index}>
                    <TableCell onClick={() => handleViewClick(employee)}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar
                          alt={employee.full_name}
                          src="/path/to/avatar.jpg"
                        />
                        <Box>
                          <Typography>{employee.full_name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {employee.designation}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      {employee.department_details?.department_name || "N/A"}
                    </TableCell>
                    <TableCell>
                      {new Date(employee.joining_date).toLocaleDateString()}
                    </TableCell>
                    {/* <TableCell>{employee.joining_date}</TableCell> */}
                    <TableCell>
                      <Typography
                        color={
                          employee.availablity_status === "available"
                            ? "green"
                            : "red"
                        }
                      >
                        {employee.availablity_status || "unavailable"}
                      </Typography>
                    </TableCell>
                    <TableCell>{employee.checkIn || "N/A"}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleEditClick(employee)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        sx={{ color: "#d50000" }}
                        onClick={() => handleDeleteClick(employee._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}

      {tabIndex === 1 && (
        <>
          <Grid container spacing={2} sx={{ my: 2 }}>
            {[
              { value: counts.total_employees, label: "Total Workforce" },
              { value: counts.present_employees, label: "Present" },
              { value: counts.absent_employees, label: "Absent" },
              { value: 0, label: "Late Arrival" },
              { value: counts.leave_employees, label: "On Leave" },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} lg={2.4} key={index}>
                <Card>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h4" color={"#FF681F"}>
                      {item.value}
                    </Typography>
                    <Divider sx={{ width: "100%", my: 1 }} />
                    <Typography>{item.label}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box display="flex" alignItems="center" mb={2} flexWrap="wrap">
            <TextField
              label="Search by real name or department"
              variant="outlined"
              size="small"
              sx={{ marginRight: 2, flexGrow: 1, minWidth: 220 }}
            />
            <FormControl sx={{ minWidth: 120, marginRight: 2, flexGrow: 1 }}>
              <InputLabel>Department</InputLabel>
              <Select label="Department">
                <MenuItem value="">
                  <em>All Department</em>
                </MenuItem>
                <MenuItem value={10}>Engineering</MenuItem>
                <MenuItem value={20}>HR</MenuItem>
                <MenuItem value={30}>Sales</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Date"
              variant="outlined"
              size="small"
              type="date"
              defaultValue="2023-05-13"
              sx={{ marginRight: 2, flexGrow: 1, minWidth: 180 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button variant="contained" color="primary" sx={{ flexGrow: 0 }}>
              Search
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#0d47a1" }}>
                <TableRow>
                  <TableCell sx={{ color: "white" }}>Date</TableCell>
                  <TableCell sx={{ color: "white" }}>Employee</TableCell>
                  <TableCell sx={{ color: "white" }}>Role</TableCell>
                  <TableCell sx={{ color: "white" }}>Employee Type</TableCell>
                  <TableCell sx={{ color: "white" }}>Status</TableCell>
                  <TableCell sx={{ color: "white" }}>Check In</TableCell>
                  <TableCell sx={{ color: "white" }}>Check Out</TableCell>
                  <TableCell sx={{ color: "white" }}>Over Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendance.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell>{formatDate(currentDate)}</TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar
                          alt={entry.employee}
                          src="/path/to/avatar.jpg"
                        />
                        <Box>
                          <Typography>{entry.employee}</Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>{entry.role}</TableCell>
                    <TableCell>{entry.employeeType}</TableCell>
                    <TableCell>
                      <Typography
                        color={entry.status === "Present" ? "green" : "red"}
                      >
                        {entry.status}
                      </Typography>
                    </TableCell>
                    <TableCell>{entry.checkIn}</TableCell>
                    <TableCell>{entry.checkOut}</TableCell>
                    <TableCell>{entry.overTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: viewMode ? "70%" : "30%" },
            padding: 2,
          },
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          {selectedEmployee && viewMode ? (
            <Grid item xs>
              <Typography variant="h6">{selectedEmployee.name}</Typography>
              <Typography variant="body1">
                {selectedEmployee.designation}
              </Typography>
            </Grid>
          ) : (
            <Grid item xs>
              <Typography variant="h6">Edit Profile</Typography>
            </Grid>
          )}
          <Grid item>
            <MuiIconButton
              color="inherit"
              onClick={handleCloseDrawer}
              sx={{ justifyContent: "flex-end" }}
              disableRipple
            >
              <CloseIcon />
            </MuiIconButton>
          </Grid>
        </Grid>

        {selectedEmployee && viewMode ? (
          <Box sx={{ mt: 1, px: 2 }}>
            <Divider sx={{ my: 1 }} />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="subtitle1">Overview</Typography>
              <Button variant="outlined">Full Time</Button>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Experience: {selectedEmployee.joiningDate} - 9 years
            </Typography>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1">Attendance</Typography>
                <Typography variant="h6" color="#0d47a1">
                  25/30
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1">Working Hours</Typography>
                <Typography variant="h6" color="#0d47a1">
                  08.40 H
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1">Award</Typography>
                <Typography variant="h6" color="#0d47a1">
                  2
                </Typography>
              </Grid>
            </Grid>

            <Divider style={{ margin: "10px 0" }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="subtitle1">Work Details</Typography>
              <Typography variant="subtitle1">EMP 0123456789</Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <List>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={4}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Company Overview"
                      secondary="Lorem ipsum dolor sit amet"
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <CalendarTodayIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Date Join"
                      secondary={selectedEmployee.joiningDate}
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <GroupIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Team" secondary="12+ members" />
                  </ListItem>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <BusinessIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Country" secondary="India" />
                  </ListItem>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <PhoneIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Phone Number"
                      secondary="9087654321"
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <LocationOnIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Address" secondary="Indore" />
                  </ListItem>
                </Grid>
              </Grid>
            </List>

            <Divider style={{ margin: "10px 0" }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="subtitle1">Employee Activity</Typography>
              <Button variant="contained" color="primary">
                Enter Time
              </Button>
            </Box>
            <Divider style={{ margin: "10px 0" }} />

            <List>
              <ListItem>
                <ListItemText
                  primary="Check Out"
                  secondary="20 June 2024 16:20 - You have successfully checked out"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Create a Proposal Project"
                  secondary="20 June 2024 09:20 - Have a great time doing it"
                />
              </ListItem>
            </List>
          </Box>
        ) : selectedEmployee && !viewMode ? (
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={selectedEmployee.full_name}
              onChange={(e) =>
                setSelectedEmployee({
                  ...selectedEmployee,
                  full_name: e.target.value,
                })
              }
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Designation"
              variant="outlined"
              value={selectedEmployee.designation}
              onChange={(e) =>
                setSelectedEmployee({
                  ...selectedEmployee,
                  designation: e.target.value,
                })
              }
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Department"
              variant="outlined"
              value={selectedEmployee.department_details?.department_name}
              onChange={(e) =>
                setSelectedEmployee({
                  ...selectedEmployee,
                  department_name: e.target.value,
                })
              }
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Joining Date"
              variant="outlined"
              type="date"
              value={
                selectedEmployee.joining_date
                  ? new Date(selectedEmployee.joining_date)
                      .toISOString()
                      .split("T")[0]
                  : ""
              }
              onChange={(e) =>
                setSelectedEmployee({
                  ...selectedEmployee,
                  joining_date: e.target.value,
                })
              }
              sx={{ mb: 2 }}
            />

            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
              <InputLabel>Availability</InputLabel>
              <Select
                value={selectedEmployee.availablity_status || ""}
                onChange={(e) =>
                  setSelectedEmployee({
                    ...selectedEmployee,
                    availablity_status: e.target.value,
                  })
                }
                label="Availability"
              >
                <MenuItem value="available">Available</MenuItem>
                <MenuItem value="unavailable">Unavailable</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Check In"
              variant="outlined"
              value={selectedEmployee.checkIn}
              onChange={(e) =>
                setSelectedEmployee({
                  ...selectedEmployee,
                  checkIn: e.target.value,
                })
              }
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => handleUpdateSubmit(selectedEmployee)}
            >
              Save
            </Button>
          </Box>
        ) : null}
      </Drawer>
    </Box>
  );
};

export default EmployeeManagement;
