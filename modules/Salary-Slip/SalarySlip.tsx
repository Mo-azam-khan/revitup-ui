import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import { jsPDF } from "jspdf";

export default function SalarySlip() {
  const [ctc, setCtc] = useState("");
  const [salaryDetails, setSalaryDetails] = useState(null);

  const handleGenerateSlip = () => {
    // Calculate the salary details based on the CTC (simple example)
    const monthlySalary = ctc / 12;
    const deductions = monthlySalary * 0.1; // 20% deductions
    const netSalary = monthlySalary - deductions;

    setSalaryDetails({ monthlySalary, deductions, netSalary });
  };

  const handleDownloadPdf = () => {
    if (salaryDetails) {
      const doc = new jsPDF();
      doc.text("Salary Slip", 10, 10);
      doc.text(`CTC: ${ctc}`, 10, 20);
      doc.text(`Monthly Salary: ${salaryDetails.monthlySalary}`, 10, 30);
      doc.text(`Deductions: ${salaryDetails.deductions}`, 10, 40);
      doc.text(`Net Salary: ${salaryDetails.netSalary}`, 10, 50);
      doc.save("salary-slip.pdf");
    }
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Salary Slip Generator
      </Typography>
      <Paper elevation={3} style={{ padding: "16px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="CTC (Annual)"
              fullWidth
              value={ctc}
              onChange={(e) => setCtc(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleGenerateSlip}
            >
              Generate Salary Slip
            </Button>
          </Grid>
        </Grid>
        {salaryDetails && (
          <Paper style={{ marginTop: "16px", padding: "16px" }}>
            <Typography variant="h6">Salary Details</Typography>
            <Typography>
              Monthly Salary: {salaryDetails.monthlySalary}
            </Typography>
            <Typography>Deductions: {salaryDetails.deductions}</Typography>
            <Typography>Net Salary: {salaryDetails.netSalary}</Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "16px" }}
              onClick={handleDownloadPdf}
            >
              Download PDF
            </Button>
          </Paper>
        )}
      </Paper>
    </Container>
  );
}
