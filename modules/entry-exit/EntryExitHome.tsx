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
  Tab,
  Tabs,
  Divider,
} from "@mui/material";
import VehicleEntryPage from "./VehicleEntryPage";
import VehicleExitPage from "./VehicleExitPage";

const StyledGrid = styled(Grid)(() => ({
  backgroundColor: "#002e6e",
}));

export default function EntryExitHome() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));
  const [tabValue, setTabValue] = React.useState<String>("VEHICLE_ENTRY");

  const handleTabChange = (
    event: React.SyntheticEvent,
    newTabValue: string
  ) => {
    setTabValue(newTabValue);
  };
  console.log("tab==", tabValue);
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
            Welcome Onboard
          </Typography>
          <Typography variant="body1" color="white">
            Enter your details and start your journey with us.
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
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          textColor="primary"
          centered={!isMobile}
          variant={isMobile ? "scrollable" : "standard"}
          onChange={handleTabChange}
        >
          <Tab label="Vehicle Entry" value="VEHICLE_ENTRY" />
          <Tab label="Vehicle Exit" value="VEHICLE_EXIT" />
        </Tabs>

        {tabValue == "VEHICLE_ENTRY" && <VehicleEntryPage />}
        {tabValue == "VEHICLE_EXIT" && <VehicleExitPage />}
      </Grid>
    </Grid>
  );
}
