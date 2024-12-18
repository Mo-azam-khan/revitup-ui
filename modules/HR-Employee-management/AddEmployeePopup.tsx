import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "axios";

export default function AddEmployeePopup({ open, onClose, onSubmit }) {
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

  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/departments"
        );
        if (response.data.status) {
          setDepartments(response.data.data);
        } else {
          console.error("No departments found");
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    fetchDepartments();
  }, []);

  const handleDesignationChange = (event: any) => {
    const designation = event.target.value;
    const roleMap = {
      Admin: 1,
      "Bay Manager": 2,
      "Project Manager": 3,
      Worker: 4,
      CEO: 5,
      "Security Guard": 6,
      "Service Manager": 7,
      "Inventory Manager": 8,
      "HR Manager": 9,
    };

    setUser({
      ...user,
      designation: designation,
      role_id: roleMap[designation],
    });
  };

  const handleDepartmentChange = (event) => {
    const selectedDepartment = departments.find(
      (dept) => dept.department_name === event.target.value
    );

    setUser({
      ...user,
      department_name: selectedDepartment.department_name,
      department_id: selectedDepartment._id,
    });
  };

  const handleSubmit = () => {
    if (user.password !== user.confirm_password) {
      setError("Passwords do not match");
      return;
    }
    setError("");

    const { department_name, ...submitData } = user;

    onSubmit(submitData);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Employee</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill the details to add a new employee.
        </DialogContentText>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              value={user.full_name}
              onChange={(e) => setUser({ ...user, full_name: e.target.value })}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              margin="normal"
              type="email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              required
              value={user.mobile_number}
              onChange={(e) =>
                setUser({ ...user, mobile_number: e.target.value })
              }
              margin="normal"
              type="tel"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Designation</InputLabel>
              <Select
                value={user.designation}
                onChange={handleDesignationChange}
                label="Designation"
                required
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Bay Manager">Bay Manager</MenuItem>
                <MenuItem value="Project Manager">Project Manager</MenuItem>
                <MenuItem value="Worker">Worker</MenuItem>
                <MenuItem value="CEO">CEO</MenuItem>
                <MenuItem value="Security Guard">Security Guard</MenuItem>
                <MenuItem value="Service Manager">Service Manager</MenuItem>
                <MenuItem value="Inventory Manager">Inventory Manager</MenuItem>
                <MenuItem value="HR Manager">HR Manager</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Department</InputLabel>
              <Select
                value={user.department_name}
                onChange={handleDepartmentChange}
                label="Department"
                required
              >
                {departments.map((department) => (
                  <MenuItem
                    key={department._id}
                    value={department.department_name}
                  >
                    {department.department_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Employment Type"
              name="employment_type"
              value={user.employment_type}
              onChange={(e) =>
                setUser({ ...user, employment_type: e.target.value })
              }
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Joining Date"
              name="joining_date"
              type="date"
              value={user.joining_date}
              onChange={(e) =>
                setUser({ ...user, joining_date: e.target.value })
              }
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirm_password"
              type="password"
              value={user.confirm_password}
              onChange={(e) =>
                setUser({ ...user, confirm_password: e.target.value })
              }
              variant="outlined"
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            </Grid>
          )}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
