import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    designation: "",
    department_name: "",
    role_id: "",
    department_id: "",
    password: "",
    confirm_password: "",
  });

  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

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

  const onSignup = async (event: any) => {
    event.preventDefault();
    try {
      setLoading(true);
      const userData = { ...user };
      delete userData.department_name;
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        userData
      );
      console.log("signup success", response.data);
      router.push("/login");
    } catch (error) {
      console.log("signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSignup(event);
  };

  const StyledGrid = styled(Grid)(() => ({
    backgroundColor: "#002e6e",
  }));

  const StyledLoginButton = styled(Button)(() => ({
    backgroundColor: "#002e6e",
    "&:hover": {
      backgroundColor: "#073a7c",
    },
  }));

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
            Welcome Back
          </Typography>
          <Typography variant="body1" color="white">
            Enter your details and continue your journey with us.
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
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4" color="#002e6e" mb={2}>
            Sign up
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              value={user.full_name}
              onChange={(e) => setUser({ ...user, full_name: e.target.value })}
              margin="normal"
            />

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

            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              margin="normal"
              type="password"
            />

            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              required
              value={user.confirm_password}
              onChange={(e) =>
                setUser({ ...user, confirm_password: e.target.value })
              }
              margin="normal"
              type="password"
            />

            <Box mt={2} mb={2}>
              <StyledLoginButton
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
              </StyledLoginButton>
            </Box>

            <Typography variant="body2" align="center">
              Already have an account?{" "}
              <Button
                color="primary"
                onClick={() => router.push("/login")}
                type="button"
              >
                Sign in
              </Button>
            </Typography>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
