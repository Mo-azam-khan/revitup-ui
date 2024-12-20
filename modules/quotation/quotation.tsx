import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  ModalOverflow,
  Sheet,
  Stack,
  Table,
  Textarea,
  Typography,
} from "@mui/joy";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TabIcon from "@mui/icons-material/Tab";
import axios from "axios";
import { Dialog } from "@mui/material";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const Quotation = ({ open, handleClose, jobCardId }: any) => {
  const [modal, setModal] = useState(false);
  const [jobCardData, setJobCardData] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(1);
  const [total, setTotal] = useState(1);
  const [quotations, setQuotations] = useState([]);

  useEffect(() => {
    const fetchJobCardData = async () => {
      if (!jobCardId) {
        console.error("No JobCardId provided");
        return;
      }

      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `http://localhost:8000/api/vehicles/get-job-card/${jobCardId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.status) {
          setJobCardData(response.data.data);
        } else {
          console.error("Failed to fetch job card:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching job card:", error);
      }
    };

    if (open && jobCardId) {
      fetchJobCardData();
    }
  }, [open, jobCardId]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/products/get-all-products"
        );
        if (response.data.status) setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const selected = products.find((p) => p._id === selectedProduct);
    if (selected) {
      setPrice(selected.price);
      setTotal(selected.price * quantity);
    }
  }, [selectedProduct, quantity]);

  const submitQuotation = async () => {
    if (!selectedProduct || !quantity) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/vehicles/create-job-card-quotation",
        {
          job_card_id: jobCardId,
          product_id: selectedProduct,
          quotaion_for: "Revels",
          quantity,
          price,
          total_price: total,
        }
      );

      if (response.data.status) {
        alert("Quotation submitted successfully!");

        const newQuotation = {
          _id: response.data.data._id,
          product: products.find((p) => p._id === selectedProduct).name,
          quantity,
          price,
          total_price: total,
        };

        setQuotations((prevQuotations) => [...prevQuotations, newQuotation]);

        setModal(false);

        await fetchQuotations();
      } else {
        alert("Failed to submit quotation.");
      }
    } catch (error) {
      console.error("Error submitting quotation:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const fetchQuotations = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/vehicles/get-job-card-quotation/${jobCardId}`
      );
      console.log("Fetched Quotations API Response:", response.data);
      if (response.data.status) {
        console.log("Fetched Quotations:", response.data.data);
        setQuotations(response.data.data);
      } else {
        console.error("Failed to fetch quotations:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching quotations:", error);
    }
  };

  const deleteQuotation = async (quotationId) => {
    if (!window.confirm("Are you sure you want to delete this quotation?")) {
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:8000/api/vehicles/delete-job-card-quotation/${quotationId}`
      );
      if (response.data.status) {
        alert("Quotation deleted successfully!");
        setQuotations((prevQuotations) =>
          prevQuotations.filter((quotation) => quotation._id !== quotationId)
        );
      } else {
        alert("Failed to delete the quotation.");
      }
    } catch (error) {
      console.error("Error deleting quotation:", error);
      alert("An error occurred while trying to delete the quotation.");
    }
  };

  if (!jobCardData) {
    return (
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Job Card Details</DialogTitle>
        <DialogContent>
          <Typography>Loading or no job card data found.</Typography>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      // onClose={() => setOpen(false)}
      onClose={handleClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalOverflow>
        <ModalDialog
          sx={{ background: "transparent", p: 0, border: 0, boxShadow: "none" }}
          aria-labelledby="modal-dialog-overflow"
        >
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: "80vw",
              borderRadius: "md",
              p: 3,
              boxShadow: "lg",
              width: "100%",
            }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              Job Cards
            </Typography>

            <Sheet
              sx={(theme) => ({ boxShadow: theme.shadow.lg, marginBottom: 2 })}
            >
              <Table borderAxis="none">
                <thead>
                  <tr>
                    <td style={{ backgroundColor: "#00b9f1" }}>
                      <Typography component="h4" fontSize={16} fontWeight="md">
                        Customer Information
                      </Typography>
                    </td>
                    <td style={{ backgroundColor: "#00b9f1" }}>
                      <Typography component="h4" fontSize={16} fontWeight="md">
                        Vehicle Information
                      </Typography>
                    </td>
                    <td style={{ backgroundColor: "#00b9f1" }}>
                      <Typography component="h4" fontSize={16} fontWeight="md">
                        Service Information
                      </Typography>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Table borderAxis="none">
                        <tr>
                          <td>Name</td>
                          <td>{jobCardData.customer_name}</td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td>{jobCardData.address}</td>
                        </tr>
                        <tr>
                          <td>Pin Code</td>
                          <td>{jobCardData.pin_code}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{jobCardData.email}</td>
                        </tr>
                        <tr>
                          <td>Contact No.</td>
                          <td>{jobCardData.contact_number}</td>
                        </tr>
                        <tr>
                          <td>Booking No.</td>
                          <td>{jobCardData.booking_number}</td>
                        </tr>
                        <tr>
                          <td>GSTIN</td>
                          <td>{jobCardData.gst_number}</td>
                        </tr>
                        <tr>
                          <td>Visit Type</td>
                          <td>{jobCardData.visit_type}</td>
                        </tr>
                      </Table>
                    </td>
                    <td>
                      <Table borderAxis="none">
                        <tr>
                          <td>Reg no.</td>
                          <td>{jobCardData.vehicle_reg_no}</td>
                        </tr>
                        <tr>
                          <td>Vin No.</td>
                          <td>{jobCardData.vin_no}</td>
                        </tr>
                        <tr>
                          <td>Engine No.</td>
                          <td>{jobCardData.engine_no}</td>
                        </tr>
                        <tr>
                          <td>Model</td>
                          <td>{jobCardData.make_and_model}</td>
                        </tr>
                        <tr>
                          <td>Attended by</td>
                          <td>assassas</td>
                        </tr>
                        <tr>
                          <td>Attended date</td>
                          <td>12121212</td>
                        </tr>
                        <tr>
                          <td>ODO</td>
                          <td>{jobCardData.odo}</td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td>{jobCardData.color_name}</td>
                        </tr>
                      </Table>
                    </td>
                    <td>
                      <Table borderAxis="none">
                        <tr>
                          <td>Work Type</td>
                          <td>{jobCardData.work_type}</td>
                        </tr>
                        <tr>
                          <td>RO Date</td>
                          <td>{jobCardData.ro_date}</td>
                        </tr>
                        <tr>
                          <td>RO Number</td>
                          <td>{jobCardData.ro_number}</td>
                        </tr>
                        <tr>
                          <td>Printing time</td>
                          <td>{jobCardData.printing_time}</td>
                        </tr>
                        <tr>
                          <td>EXT WTY NO</td>
                          <td>RSA NO</td>
                        </tr>
                      </Table>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Sheet>

            <Stack flexDirection="row" gap={2} justifyContent="space-between">
              <Stack flexDirection="row" gap={2}>
                <Typography level="body-md">Requistion</Typography>
                <Typography level="body-md">#574554854</Typography>
              </Stack>
              <Stack flexDirection="row" gap={2}>
                <Typography level="body-md">Requistion date</Typography>
                <Typography level="body-md">12 April 2024</Typography>
              </Stack>
            </Stack>

            <Grid
              container
              mt={2}
              wrap="nowrap"
              sx={{ flexGrow: 1, flexDirection: { xs: "column", md: "row" } }}
            >
              <Grid md={3} p={1}>
                <FormControl>
                  <FormLabel>AC Filter</FormLabel>
                  {/* <Input defaultValue="Clean and Replace" /> */}
                  <Typography>{jobCardData.printing_time}</Typography>
                </FormControl>
              </Grid>
              <Grid md={3} p={1}>
                <FormControl>
                  <FormLabel>Brakes</FormLabel>
                  {/* <Input defaultValue="No Problem" /> */}
                  <Typography>{jobCardData.printing_time}</Typography>
                </FormControl>
              </Grid>
              <Grid md={3} p={1}>
                <FormControl>
                  <FormLabel>Engine Oil</FormLabel>
                  {/* <Input defaultValue="Topup" /> */}
                  <Typography>{jobCardData.printing_time}</Typography>
                </FormControl>
              </Grid>
              <Grid md={3} p={1}>
                <FormControl>
                  <FormLabel>Air Filter</FormLabel>
                  {/* <Input defaultValue="FOC" /> */}
                  <Typography>{jobCardData.printing_time}</Typography>
                </FormControl>
              </Grid>
              <Grid md={3} p={1}>
                <FormControl>
                  <FormLabel>Service Type</FormLabel>
                  {/* <Input defaultValue="Free" /> */}
                  <Typography>{jobCardData.printing_time}</Typography>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container mt={2}>
              <Grid md={5}>
                <Box mb={2}>
                  <FormControl>
                    <FormLabel>Customer Request</FormLabel>
                    <Textarea
                      minRows={6}
                      defaultValue="Lorem Ipsum is simply dummy"
                    />
                  </FormControl>
                </Box>

                <Box mb={2}>
                  <FormControl>
                    <FormLabel>Mechanic Name</FormLabel>
                    <Input defaultValue="John Doe" />
                  </FormControl>
                </Box>

                <Box mb={2}>
                  <FormControl>
                    <FormLabel>Model Number</FormLabel>
                    <Input defaultValue="XY78 AB9876" />
                  </FormControl>
                </Box>

                <Box mb={2}>
                  <Typography
                    component="h5"
                    level="body-lg"
                    fontWeight="md"
                    mb={1}
                  >
                    Additional Description
                  </Typography>
                  <FormControl>
                    <FormLabel>Remarks</FormLabel>
                    <Textarea
                      minRows={5}
                      defaultValue="Lorem Ipsum is simply dummy"
                    />
                  </FormControl>
                </Box>

                <Stack flexDirection="row" gap={2}>
                  <FormControl>
                    <FormLabel>Expected Date</FormLabel>
                    <Input type="date" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Expected Time</FormLabel>
                    <Input type="time" />
                  </FormControl>
                </Stack>
              </Grid>

              <Grid md={6} mdOffset={1} container>
                {[
                  "Wheels and Wrenches",
                  "Gears and Grease",
                  "Drive in Autoshop",
                  "Reved Up Repairs",
                  "Rajkamal Car Home",
                  "Additional General Parts",
                ].map((item, i) => (
                  <Grid xs={12} key={i}>
                    <FormControl>
                      <FormLabel sx={{ width: "100%" }}>
                        <Stack
                          flexGrow={1}
                          justifyContent="space-between"
                          flexDirection={"row"}
                          alignItems={"center"}
                        >
                          {item}{" "}
                          <IconButton onClick={() => setModal(true)}>
                            <TabIcon />
                          </IconButton>
                        </Stack>
                      </FormLabel>
                      <Input
                        sx={{ "--Input-decoratorChildHeight": "45px" }}
                        defaultValue="9877254"
                        required
                        endDecorator={
                          <Button
                            variant="solid"
                            color="primary"
                            type="submit"
                            sx={{
                              borderTopLeftRadius: 0,
                              borderBottomLeftRadius: 0,
                            }}
                          >
                            Add
                          </Button>
                        }
                      />
                    </FormControl>
                  </Grid>
                ))}

                <Modal
                  aria-labelledby="modal-title"
                  aria-describedby="modal-desc"
                  open={modal}
                  onClose={() => setModal(false)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Sheet
                    variant="outlined"
                    sx={{
                      maxWidth: 500,
                      p: 3,
                      borderRadius: "md",
                      boxShadow: "lg",
                    }}
                  >
                    <ModalClose variant="solid" color="danger" sx={{ m: 1 }} />
                    <Typography
                      component="h2"
                      id="modal-title"
                      level="h4"
                      textColor="inherit"
                      fontWeight="lg"
                      mb={2}
                    >
                      Reved Up Repairs
                    </Typography>
                    <Stack spacing={3} mb={5}>
                      <FormControl>
                        <FormLabel>Product</FormLabel>
                        <select
                          value={selectedProduct}
                          onChange={(e) => setSelectedProduct(e.target.value)}
                        >
                          <option value="" disabled>
                            Select a product
                          </option>
                          {products.map((product) => (
                            <option key={product._id} value={product._id}>
                              {product.name} (₹{product.price})
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Quantity</FormLabel>
                        <Input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Price</FormLabel>
                        <Input type="number" value={price} readOnly />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Total</FormLabel>
                        <Input type="number" value={total} readOnly />
                      </FormControl>
                    </Stack>
                    <Button
                      onClick={submitQuotation}
                      variant="solid"
                      color="success"
                    >
                      Submit
                    </Button>
                    <Button
                      variant="plain"
                      color="neutral"
                      onClick={() => setModal(false)}
                    >
                      Back
                    </Button>
                  </Sheet>
                </Modal>
              </Grid>
            </Grid>

            <Box pt={5}>
              <Box sx={{ backgroundColor: "#00b9f1" }} p={1}>
                <Typography level="body-lg">Pre Work Quotation</Typography>
              </Box>
              <Table borderAxis="none">
                <thead>
                  <tr>
                    <td>
                      <Typography component="h3" level="body-md">
                        Product
                      </Typography>
                    </td>
                    <td>
                      <Typography component="h3" level="body-md">
                        Quantity
                      </Typography>
                    </td>
                    <td>
                      <Typography component="h3" level="body-md">
                        Unit Price
                      </Typography>
                    </td>
                    <td>
                      <Typography component="h3" level="body-md">
                        Total Price
                      </Typography>
                    </td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {quotations.map((quotation) => (
                    <tr key={quotation._id}>
                      <td>
                        <Typography>{quotation.product}</Typography>
                      </td>
                      <td>
                        <Typography>{quotation.quantity}</Typography>
                      </td>
                      <td>
                        <Typography>INR {quotation.price}</Typography>
                      </td>
                      <td>
                        <Typography>INR {quotation.total_price}</Typography>
                      </td>
                      <td>
                        <IconButton
                          onClick={() => deleteQuotation(quotation._id)}
                        >
                          <DeleteForeverIcon />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Box>
          </Sheet>
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  );
};

export default Quotation;
