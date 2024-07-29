import React from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { blue, green, yellow, red, grey } from "@mui/material/colors";

const data = [
  { name: "Jan", uv: 40, pv: 24, amt: 24 },
  { name: "Feb", uv: 30, pv: 13, amt: 22 },
  { name: "Mar", uv: 20, pv: 98, amt: 22 },
  { name: "Apr", uv: 27, pv: 39, amt: 20 },
  { name: "May", uv: 18, pv: 48, amt: 21 },
  { name: "Jun", uv: 23, pv: 38, amt: 25 },
  { name: "Jul", uv: 34, pv: 43, amt: 21 },
  { name: "Aug", uv: 23, pv: 29, amt: 20 },
  { name: "Sep", uv: 25, pv: 31, amt: 20 },
  { name: "Oct", uv: 28, pv: 32, amt: 21 },
  { name: "Nov", uv: 30, pv: 25, amt: 24 },
  { name: "Dec", uv: 32, pv: 27, amt: 24 },
];

const expenseData = [
  { name: "Transport", value: 1200, color: blue[500] },
  { name: "Raw Material", value: 1200, color: green[500] },
  { name: "Stock Goods", value: 1200, color: yellow[500] },
];

const transactionData = [
  {
    category: "Car",
    date: "14-02-2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    amount: 3000,
    color: blue[500],
  },
  {
    category: "Car",
    date: "14-02-2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    amount: 3000,
    color: green[500],
  },
  {
    category: "Car",
    date: "14-02-2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    amount: 3000,
    color: yellow[500],
  },
  {
    category: "Car",
    date: "14-02-2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    amount: 3000,
    color: red[500],
  },
  {
    category: "Car",
    date: "14-02-2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    amount: 3000,
    color: blue[500],
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const FinanceManagement = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        mb={2}
      >
        <Typography variant="h5" gutterBottom>
          Finance Management
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          mt={{ xs: 2, sm: 0 }}
        >
          <TextField
            label="Search orders"
            variant="outlined"
            size="small"
            sx={{ marginBottom: { xs: 2, sm: 0 }, marginRight: { sm: 2 } }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ marginBottom: { xs: 2, sm: 0 }, marginRight: { sm: 2 } }}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Analytics" {...a11yProps(0)} />
            <Tab label="Expenses" {...a11yProps(1)} />
            <Tab label="Sales" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={3}>
              <Paper elevation={2} sx={{ padding: 2, textAlign: "center" }}>
                <Typography variant="h6">₹12345.25</Typography>
                <Typography variant="subtitle2">Daily Average</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={2} sx={{ padding: 2, textAlign: "center" }}>
                <Typography variant="h6" color="green">
                  +45%
                </Typography>
                <Typography variant="subtitle2">Change</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={2} sx={{ padding: 2, textAlign: "center" }}>
                <Typography variant="h6">500</Typography>
                <Typography variant="subtitle2">Total Transaction</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={2} sx={{ padding: 2, textAlign: "center" }}>
                <Typography variant="h6" color="error">
                  20
                </Typography>
                <Typography variant="subtitle2">Categories</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Weekly Expenses
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Expenses Breakdown
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={expenseData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <Box mt={2}>
                  {expenseData.map((entry, index) => (
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      key={index}
                    >
                      <Typography variant="subtitle2">{entry.name}</Typography>
                      <Typography variant="subtitle2">
                        ₹{entry.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper elevation={2} sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Transaction History
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {transactionData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Box display="flex" alignItems="center">
                              <Avatar
                                sx={{ bgcolor: row.color, marginRight: 1 }}
                              >
                                {row.category.charAt(0)}
                              </Avatar>
                              {row.category}
                            </Box>
                          </TableCell>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>{row.description}</TableCell>
                          <TableCell>₹{row.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h6">Income Content</Typography>
        </TabPanel>
      </Paper>
    </Container>
  );
};
export default FinanceManagement;
