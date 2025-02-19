import React, { useState } from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// line chart
const linechart = {
  credits: {
    enabled: false,
  },
  chart: {
    height: "300px",
    type: "line",
  },
  title: {
    text: "Vehicle Count",
    align: "left",
  },

  xAxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {},
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: false,
    },
  },
  series: [
    {
      data: [10, 16, 21, 29, 32, 39, 45],
    },
  ],
};

// column chart
const columnchart = {
  credits: {
    enabled: false,
  },
  chart: {
    height: "300px",
    type: "column",
  },
  title: {
    text: "Monthly Data",
    align: "left",
  },

  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    crosshair: true,
    accessibility: {
      description: "Months",
    },
  },
  yAxis: {
    min: 0,
  },
  tooltip: {
    valueSuffix: " (1000 MT)",
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Service",
      data: [200, 300, 500, 100, 400, 500],
    },
    {
      name: "Accessories",
      data: [500, 200, 400, 300, 100, 200],
    },
  ],
};

// pie chart
const piechart = {
  credits: {
    enabled: false,
  },
  chart: {
    height: "300px",
    type: "pie",
  },
  title: {
    text: "Staff Details",
  },
  tooltip: {
    valueSuffix: "%",
  },

  plotOptions: {
    series: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: [
        {
          enabled: true,
          distance: 20,
        },
        {
          enabled: true,
          distance: -40,
          format: "{point.percentage:.1f}%",
          style: {
            fontSize: "1.2em",
            textOutline: "none",
            opacity: 0.7,
          },
          filter: {
            operator: ">",
            property: "percentage",
            value: 10,
          },
        },
      ],
    },
  },
  series: [
    {
      name: "Percentage",
      colorByPoint: true,
      data: [
        {
          name: "Bay",
          y: 55.02,
        },
        {
          name: "Admin",
          sliced: true,
          selected: true,
          y: 26.71,
        },
        {
          name: "Manager",
          y: 15.5,
        },
      ],
    },
  ],
};

const DashboardMain = () => {
  return (
    <>
      {/* Grid Cards */}
      <Grid container spacing={3} style={{ padding: "20px" }}>
        {" "}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <div>
              <HighchartsReact highcharts={Highcharts} options={linechart} />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <div>
              <HighchartsReact highcharts={Highcharts} options={columnchart} />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <div>
              <HighchartsReact highcharts={Highcharts} options={piechart} />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Yard Vehicles</Typography>
              <Typography>Currently Active: 7</Typography>
              <Typography>Last Week: 6</Typography>
              <Typography>Last 30 Days: 10</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Vehicles Received</Typography>
              <Typography>Against Active RFQ: 5</Typography>
              <Typography>Last Week: 3</Typography>
              <Typography>Last 30 Days: 10</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Vehicles Placed</Typography>
              <Typography>Last 7 Days: 4</Typography>
              <Typography>Last Week: 3</Typography>
              <Typography>Last 30 Days: 9</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardMain;
