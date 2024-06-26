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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const EmployeeManagement = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());

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
    <Box sx={{ padding: 2 }}>
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
                    <TableCell>
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
                      <IconButton color="primary">
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
    </Box>
  );
};

export default EmployeeManagement;
