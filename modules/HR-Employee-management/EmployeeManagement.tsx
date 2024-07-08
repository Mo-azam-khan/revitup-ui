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

const EmployeeManagement = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState(true);

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(new Date());
    };
    updateDate();
    const timer = setInterval(updateDate, 24 * 60 * 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setIsDrawerOpen(true);
    setViewMode(false);
  };

  const handleViewClick = (employee) => {
    setSelectedEmployee(employee);
    setIsDrawerOpen(true);
    setViewMode(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedEmployee(null);
  };

  const employees = [
    {
      name: "Josh Baker",
      position: "Chief Executive Officer",
      department: "Engineer",
      joiningDate: "02 March 2015",
      availability: "Available",
      checkIn: "09:15 AM",
    },
    {
      name: "Josh Baker",
      position: "Chief Executive Officer",
      department: "Engineer",
      joiningDate: "02 March 2015",
      availability: "Unavailable",
      checkIn: "09:15 AM",
    },
    {
      name: "Josh Baker",
      position: "Chief Executive Officer",
      department: "Engineer",
      joiningDate: "02 March 2015",
      availability: "Available",
      checkIn: "09:15 AM",
    },
    {
      name: "Josh Baker",
      position: "Chief Executive Officer",
      department: "Engineer",
      joiningDate: "02 March 2015",
      availability: "Unavailable",
      checkIn: "09:15 AM",
    },
  ];

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
                        ? 250
                        : index === 1
                        ? 200
                        : index === 2
                        ? 50
                        : 10}
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
            <Button variant="outlined" color="primary">
              Add Employee
            </Button>
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
                        <Avatar alt={employee.name} src="/path/to/avatar.jpg" />
                        <Box>
                          <Typography>{employee.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {employee.position}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.joiningDate}</TableCell>
                    <TableCell>
                      <Typography
                        color={
                          employee.availability === "Available"
                            ? "green"
                            : "red"
                        }
                      >
                        {employee.availability}
                      </Typography>
                    </TableCell>
                    <TableCell>{employee.checkIn}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleEditClick(employee)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton sx={{ color: "#d50000" }}>
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
              { value: 150, label: "Total Workforce" },
              { value: 125, label: "Present Workforce" },
              { value: 15, label: "Absent Workforce" },
              { value: 5, label: "Late Arrival" },
              { value: 5, label: "On Leave" },
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
                {selectedEmployee.position}
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
              defaultValue={selectedEmployee.name}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Position"
              variant="outlined"
              defaultValue={selectedEmployee.position}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Department"
              variant="outlined"
              defaultValue={selectedEmployee.department}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Joining Date"
              variant="outlined"
              defaultValue={selectedEmployee.joiningDate}
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
              <InputLabel>Availability</InputLabel>
              <Select
                defaultValue={selectedEmployee.availability}
                label="Availability"
              >
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="Unavailable">Unavailable</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Check In"
              variant="outlined"
              defaultValue={selectedEmployee.checkIn}
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" fullWidth>
              Save
            </Button>
          </Box>
        ) : null}
      </Drawer>
    </Box>
  );
};

export default EmployeeManagement;
