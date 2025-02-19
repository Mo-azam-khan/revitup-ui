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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";

const StyledGrid = styled(Grid)(() => ({
  backgroundColor: "#002e6e",
}));

const StyledLoginButton = styled(Button)(() => ({
  backgroundColor: "#002e6e",
  "&:hover": {
    backgroundColor: "#073a7c",
  },
}));

const StyledIdCardButton = styled(Button)(() => ({
  color: "#002e6e",
  borderColor: "#002e6e",
  "&:hover": {
    color: "#002e6e",
  },
}));

export default function LoginPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    username: "",
    role_id: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event: any) => {
    const { id, value, name } = event.target;
    setLoginData({
      ...loginData,
      [id || name]: value,
    });
  };

  const handleLogin = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        loginData
      );

      // Log full response to verify structure
      console.log("Full Response:", response.data);

      // Extract token and role_id from nested data object
      const { token, role_id } = response.data.data;

      if (!token || role_id === undefined) {
        console.error("Missing token or role_id in response.");
        return toast.error("Login failed. Invalid response from server.");
      }

      localStorage.setItem("authToken", token);
      localStorage.setItem("roleId", role_id);

      localStorage.setItem("token", response.data.data.token);

      toast.success("Login successful!");

      // Redirect based on role_id
      if (role_id === 6) {
        router.push("/EntryExitHome");
      } else if (role_id === 7) {
        router.push("/WaitingVehiclesPage");
      } else if (role_id === 2) {
        router.push("/bayManagement");
      } else if (role_id === 8) {
        router.push("/inventoryManagement");
      } else if (role_id === 9) {
        router.push("/employeeManagement");
      } else if (role_id === 3) {
        router.push("/workerManagement");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      toast.error("Login failed. Please check your credentials and try again.");
    }
  };

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
        <Typography variant="h4" color="#002e6e" pb={3}>
          Employee Login
        </Typography>

        <TextField
          id="username"
          label="Email/Phone number"
          variant="outlined"
          size={isMobile ? "small" : "medium"}
          sx={{ mb: 2, width: isMobile ? "17rem" : "22rem" }}
          value={loginData.username}
          onChange={handleChange}
        />

        <FormControl
          fullWidth
          sx={{ mb: 2, width: isMobile ? "17rem" : "22rem" }}
        >
          <InputLabel>Role ID</InputLabel>
          <Select
            name="role_id"
            value={loginData.role_id}
            onChange={handleChange}
            label="Role ID"
            required
          >
            <MenuItem value={1}>Admin</MenuItem>
            <MenuItem value={2}>Bay Manager</MenuItem>
            <MenuItem value={3}>Project Manager</MenuItem>
            <MenuItem value={4}>Worker</MenuItem>
            <MenuItem value={5}>CEO</MenuItem>
            <MenuItem value={6}>Security Guard</MenuItem>
            <MenuItem value={7}>Service Manager</MenuItem>
            <MenuItem value={8}>Inventory Manager</MenuItem>
            <MenuItem value={9}>HR Manager</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="password"
          label="Password"
          variant="outlined"
          size={isMobile ? "small" : "medium"}
          type="password"
          sx={{ mb: 2, width: isMobile ? "17rem" : "22rem" }}
          value={loginData.password}
          onChange={handleChange}
        />

        <Box width={isMobile ? "17rem" : "22rem"}>
          <StyledLoginButton
            variant="contained"
            fullWidth
            onClick={handleLogin}
            disabled={loading}
          >
            {/* {loading ? "Logging in..." : "Login"} */}
            {loading ? <CircularProgress size={24} /> : "Login"}
          </StyledLoginButton>
        </Box>
        <Typography variant="body1" color="#002e6e" py={isMobile ? 1 : 2}>
          or
        </Typography>
        <Box width={isMobile ? "17rem" : "22rem"} color="#002e6e">
          <StyledIdCardButton variant="outlined" fullWidth sx={{ py: 1.5 }}>
            <BadgeIcon /> <Typography pl={1}>Tap Your Id card here</Typography>
          </StyledIdCardButton>
        </Box>
      </Grid>
    </Grid>
  );
}
