import React from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  styled,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";

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
          id="email-phone-input"
          label="Email/Phone number"
          variant="outlined"
          size={isMobile ? "small" : "medium"}
          sx={{ mb: 2, width: isMobile ? "17rem" : "22rem" }}
        />
        <TextField
          id="password-input"
          label="Password"
          variant="outlined"
          size={isMobile ? "small" : "medium"}
          type="password"
          sx={{ mb: 2, width: isMobile ? "17rem" : "22rem" }}
        />
        <Box width={isMobile ? "17rem" : "22rem"}>
          <StyledLoginButton variant="contained" fullWidth>
            Login
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
