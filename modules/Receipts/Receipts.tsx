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
  Typography,
  Chip,
  Button,
} from "@mui/material";

const data = [
  {
    receiptNo: "1234568",
    customer: "Josh Baker",
    amount: 51000,
    status: "Pending",
    date: "21 Feb 2024",
  },
  {
    receiptNo: "1234568",
    customer: "Josh Baker",
    amount: 51000,
    status: "Pending",
    date: "21 Feb 2024",
  },
  {
    receiptNo: "1234568",
    customer: "Josh Baker",
    amount: 51000,
    status: "Pending",
    date: "21 Feb 2024",
  },
  {
    receiptNo: "1234568",
    customer: "Josh Baker",
    amount: 51000,
    status: "Pending",
    date: "21 Feb 2024",
  },
  {
    receiptNo: "1234568",
    customer: "Josh Baker",
    amount: 51000,
    status: "Pending",
    date: "21 Feb 2024",
  },
  {
    receiptNo: "1234568",
    customer: "Josh Baker",
    amount: 51000,
    status: "Pending",
    date: "21 Feb 2024",
  },
];

const customerDetails = {
  receiptNo: "123456789",
  customer: "Josh Baker",
  position: "Chief Executive Officer",
  email: "josh@gmail.com",
  items: [
    {
      name: "Air Filter Lorem Ipsum",
      stockId: "SID123456",
      quantity: 50,
      price: 500,
      total: 25000,
    },
  ],
  subtotal: 50000,
  charges: 500,
  tax: 500,
  total: 51000,
  invoiceDate: "24-12-2024",
};

const Receipts = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleCustomerClick = (receiptNo) => {
    setSelectedCustomer(customerDetails);
  };

  const handleBackClick = () => {
    setSelectedCustomer(null);
  };

  return (
    <Box p={2}>
      {!selectedCustomer ? (
        <Box>
          <Typography variant="h6" gutterBottom>
            Invoices to
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr. No.</TableCell>
                  <TableCell>Receipt No</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{String(index + 1).padStart(2, "0")}</TableCell>
                    <TableCell>{row.receiptNo}</TableCell>
                    <TableCell sx={{ padding: "8px" }}>
                      <Box display="flex" alignItems="center">
                        <Avatar alt={row.customer} src="/path/to/avatar.jpg" />
                        <Box ml={2}>
                          <Typography
                            component="span"
                            style={{
                              textDecoration: "none",
                              color: "inherit",
                              cursor: "pointer",
                            }}
                            onClick={() => handleCustomerClick(row.receiptNo)}
                          >
                            {row.customer}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Chief Executive Officer
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>
                      <Chip label={row.status} color="warning" />
                    </TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box>
          <Typography variant="h6" gutterBottom>
            Receipt
          </Typography>
          <Box display="flex" justifyContent="space-between" mb={2} mt={2}>
            <Box>
              <Box display="flex" alignItems="center">
                <Avatar
                  alt={selectedCustomer.customer}
                  src="/path/to/avatar.jpg"
                />
                <Box ml={2}>
                  <Typography variant="h6">
                    {selectedCustomer.customer}{" "}
                    <Chip label="Senior" size="small" />
                  </Typography>
                  <Typography variant="body1">
                    {selectedCustomer.position}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Email: {selectedCustomer.email}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box textAlign="right">
              <Typography>Invoice No: {selectedCustomer.receiptNo}</Typography>
              <Typography>
                Invoice date: {selectedCustomer.invoiceDate}
              </Typography>
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "gray" }}>
                <TableRow>
                  <TableCell>Item Name</TableCell>
                  <TableCell>Stock ID</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedCustomer.items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.stockId}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.total}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={3}>Sub Total</TableCell>
                  <TableCell>{selectedCustomer.subtotal}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3}>Charges Laver</TableCell>
                  <TableCell>{selectedCustomer.charges}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3}>Tax Amount with GST</TableCell>
                  <TableCell>{selectedCustomer.tax}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan={1} />
                  <TableCell colSpan={3}>
                    <strong>Total</strong>
                  </TableCell>
                  <TableCell>
                    <strong>{selectedCustomer.total}</strong>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box mt={2} textAlign="right">
            <Button variant="contained" color="primary">
              Print / Export
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleBackClick}
              style={{ marginLeft: "10px" }}
            >
              Back
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Receipts;
