import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Grid,
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
    fullName: "",
    email: "",
    mobile: "",
    designation: "",
    password: "",
    confirmpassword: "",
  });

  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  const onSignup = async (event: any) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/register",
        user
      );
      console.log("signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Submitted user data:", user);
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
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
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
              value={user.mobile}
              onChange={(e) => setUser({ ...user, mobile: e.target.value })}
              margin="normal"
              type="tel"
            />

            <TextField
              label="Designation"
              variant="outlined"
              fullWidth
              required
              value={user.designation}
              onChange={(e) =>
                setUser({ ...user, designation: e.target.value })
              }
              margin="normal"
            />

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
              value={user.confirmpassword}
              onChange={(e) =>
                setUser({ ...user, confirmpassword: e.target.value })
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
              <Button href="/login" color="primary">
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
