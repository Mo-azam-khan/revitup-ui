import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  Typography,
  Stack,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const initialData = [
  {
    name: "Pranshul Sohani",
    proficiency: "Project Manager, UX design, WP+3 more",
    department: "Body shop",
    performance: "48%",
    attendance: "48%",
    joining: "12 December 2024",
    checkIn: "22:10 hrs",
  },
  {
    name: "Himanshu Mankar",
    proficiency: "Project Manager, UX design, WP+3 more",
    department: "Body shop",
    performance: "48%",
    attendance: "48%",
    joining: "12 December 2024",
    checkIn: "22:10 hrs",
  },
];

const ProfileTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(initialData);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredData = initialData.filter(
      (row) =>
        row.name.toLowerCase().includes(query) ||
        row.proficiency.toLowerCase().includes(query) ||
        row.department.toLowerCase().includes(query) ||
        row.performance.toLowerCase().includes(query) ||
        row.attendance.toLowerCase().includes(query) ||
        row.joining.toLowerCase().includes(query) ||
        row.checkIn.toLowerCase().includes(query)
    );
    setData(filteredData);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          p: 2,
          marginLeft: 3,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          sx={{ width: "100%", maxWidth: "300px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   p: 4,
        }}
      >
        <Paper sx={{ width: "100%", maxWidth: "1000px" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Proficiency</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Performance</TableCell>
                  <TableCell>Attendance</TableCell>
                  <TableCell>Joining</TableCell>
                  <TableCell>Check In</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar alt={row.name} src="/path/to/avatar.jpg" />
                        <Typography>{row.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{row.proficiency}</TableCell>
                    <TableCell>{row.department}</TableCell>
                    <TableCell>{row.performance}</TableCell>
                    <TableCell>{row.attendance}</TableCell>
                    <TableCell>{row.joining}</TableCell>
                    <TableCell>{row.checkIn}</TableCell>
                    <TableCell>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
};

export default ProfileTable;
