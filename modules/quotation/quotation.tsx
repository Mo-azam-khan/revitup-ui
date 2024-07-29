import React from "react";
import {
  Box,
  Button,
  DialogActions,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  ModalOverflow,
  Option,
  Select,
  Sheet,
  Stack,
  Table,
  Textarea,
  Typography,
} from "@mui/joy";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TabIcon from "@mui/icons-material/Tab";

const Quotation = () => {
  const [open, setOpen] = React.useState<boolean>(true);
  const [modal, setModal] = React.useState<boolean>(false);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
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
                          <td>Sahil Dawani</td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td>121 aass</td>
                        </tr>
                        <tr>
                          <td>Pin Code</td>
                          <td>434346545</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>test@gmail.com</td>
                        </tr>
                        <tr>
                          <td>Contact No.</td>
                          <td>98765443210</td>
                        </tr>
                        <tr>
                          <td>Booking No.</td>
                          <td>12121221</td>
                        </tr>
                        <tr>
                          <td>GSTIN</td>
                          <td>23AAAAFGCGA54</td>
                        </tr>
                        <tr>
                          <td>Visit Type</td>
                          <td>Shop</td>
                        </tr>
                      </Table>
                    </td>
                    <td>
                      <Table borderAxis="none">
                        <tr>
                          <td>Reg no.</td>
                          <td>Sahil Dawani</td>
                        </tr>
                        <tr>
                          <td>Vin No.</td>
                          <td>121 aass</td>
                        </tr>
                        <tr>
                          <td>Engine No.</td>
                          <td>4343443</td>
                        </tr>
                        <tr>
                          <td>Model</td>
                          <td>Venue 2022</td>
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
                          <td>22222</td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td>Grey</td>
                        </tr>
                      </Table>
                    </td>
                    <td>
                      <Table borderAxis="none">
                        <tr>
                          <td>Work Type</td>
                          <td>Free Service</td>
                        </tr>
                        <tr>
                          <td>RO Date</td>
                          <td>121 aass</td>
                        </tr>
                        <tr>
                          <td>RO Number</td>
                          <td>434346545</td>
                        </tr>
                        <tr>
                          <td>Printing time</td>
                          <td>test@gmail.com</td>
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
                  <Input defaultValue="Clean and Replace" />
                </FormControl>
              </Grid>
              <Grid md={3} p={1}>
                <FormControl>
                  <FormLabel>Brakes</FormLabel>
                  <Input defaultValue="No Problem" />
                </FormControl>
              </Grid>
              <Grid md={3} p={1}>
                <FormControl>
                  <FormLabel>Engine Oil</FormLabel>
                  <Input defaultValue="Topup" />
                </FormControl>
              </Grid>
              <Grid md={3} p={1}>
                <FormControl>
                  <FormLabel>Air Filter</FormLabel>
                  <Input defaultValue="FOC" />
                </FormControl>
              </Grid>
              <Grid md={3} p={1}>
                <FormControl>
                  <FormLabel>Service Type</FormLabel>
                  <Input defaultValue="Free" />
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
                      defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
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
                      defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
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
                      {/* {data.status === 'failure' && (
                                        <FormHelperText
                                            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
                                        >
                                            Oops! something went wrong, please try again later.
                                        </FormHelperText>
                                        )}
                                        {data.status === 'sent' && (
                                        <FormHelperText
                                            sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
                                        >
                                            You are all set!
                                        </FormHelperText>
                                        )} */}
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
                      borderRadius: "md",
                      p: 3,
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
                        <FormLabel>Item</FormLabel>
                        <Input defaultValue="Wind Shield" />
                      </FormControl>

                      <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Input defaultValue="Maruti Omni" />
                      </FormControl>

                      <Grid container columnSpacing={3}>
                        <Grid md={4}>
                          <FormControl>
                            <FormLabel>Quantity</FormLabel>
                            <Input defaultValue="2" />
                          </FormControl>
                        </Grid>
                        <Grid md={4}>
                          <FormControl>
                            <FormLabel>Cost</FormLabel>
                            <Input defaultValue="2200" />
                          </FormControl>
                        </Grid>
                        <Grid md={4}>
                          <FormControl>
                            <FormLabel>Total</FormLabel>
                            <Input defaultValue="4400" />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Stack>
                    <DialogActions>
                      <Button
                        variant="solid"
                        color="success"
                        onClick={() => setModal(false)}
                      >
                        Confirm
                      </Button>
                      <Button
                        variant="plain"
                        color="neutral"
                        onClick={() => setModal(false)}
                      >
                        Back
                      </Button>
                    </DialogActions>
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
                  {Array.from({ length: 3 }).map((_, i) => (
                    <tr key={i}>
                      <td>
                        <Typography>Wind Screen</Typography>
                        <Typography component="small" level="body-xs">
                          Model no. 78765
                        </Typography>
                      </td>
                      <td>
                        <Select defaultValue="1 Peices">
                          <Option value="1 Peices">1 Peices</Option>
                          <Option value="2 Peices">2 Peices</Option>
                          <Option value="3 Peices">3 Peices</Option>
                          <Option value="4 Peices">4 Peices</Option>
                          <Option value="5 Peices">5 Peices</Option>
                        </Select>
                      </td>
                      <td>
                        <Typography component="p">INR 20,000</Typography>
                      </td>
                      <td>
                        <Typography component="p">INR 1,00,000</Typography>
                      </td>
                      <td>
                        <IconButton>
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
