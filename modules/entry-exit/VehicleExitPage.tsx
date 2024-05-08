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
  Checkbox,
  FormControlLabel,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";

const StyledGrid = styled(Grid)(() => ({
  backgroundColor: "#002e6e",
}));

export default function VehicleExitPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  return (
    <>
      <Typography variant="h4" color="#002e6e" pb={3} pt={7}>
        Vehicle Exit
      </Typography>

      <Grid
        alignItems="center"
        display="flex"
        columnGap={"1.6rem"}
        rowGap={"1.2rem"}
      >
        <TextField
          id="vehicle-number"
          label="Enter Vehicle Number"
          variant="outlined"
          size={isMobile ? "small" : "medium"}
          sx={{ mb: 2, width: isMobile ? "17rem" : "22rem" }}
        />

        <Button variant="contained">Ask for Approval</Button>
      </Grid>

      <Box my={2}>
        <Grid container spacing={2} alignItems="center" color={"blue"}>
          <Grid item xs={2} sm={2}>
            <Typography>Vehicle Number</Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography>Driver</Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography>Technician</Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Typography>Status</Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Typography>Approval</Typography>
          </Grid>
        </Grid>
        <Divider />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2} sm={2}>
            <Typography>ABC123</Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography>John Doe</Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography>Jane Smith</Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Typography>Approved</Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Approve"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
