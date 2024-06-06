import { Padding } from '@mui/icons-material';
import { Box, FormControl, FormHelperText, FormLabel, Grid, Input, Modal, ModalClose, ModalDialog, ModalOverflow, Sheet, Stack, Table, Textarea, Typography } from '@mui/joy'
import React from 'react'

const Quotation = () => {
    const [open, setOpen] = React.useState<boolean>(true);

    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <ModalOverflow>
            <ModalDialog sx={{background: "transparent", p: 0, border: 0, boxShadow: "none"}} aria-labelledby="modal-dialog-overflow">
                <Sheet
                variant="outlined"
                sx={{
                    maxWidth: "80vw",
                    borderRadius: 'md',
                    p: 3,
                    boxShadow: 'lg',
                    width: "100%"
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

                    <Sheet sx={theme => ({boxShadow: theme.shadow.lg, marginBottom: 2})}>
                        <Table borderAxis='none'>
                            <thead>
                                <tr>
                                    <td style={{backgroundColor: "#00b9f1"}}><Typography component="h4" fontSize={16} fontWeight="md">Customer Information</Typography></td>
                                    <td style={{backgroundColor: "#00b9f1"}}><Typography component="h4" fontSize={16} fontWeight="md">Vehicle Information</Typography></td>
                                    <td style={{backgroundColor: "#00b9f1"}}><Typography component="h4" fontSize={16} fontWeight="md">Service Information</Typography></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Table borderAxis='none'>
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
                                        <Table borderAxis='none'>
                                            <tr>
                                                <td>Reg no.</td>
                                                <td>Sahil Dawani</td>
                                            </tr>
                                            <tr>
                                                <td>Vin No.</td>
                                                <td>121 aass</td>
                                            </tr>
                                            <tr>
                                                <td>Pin Code</td>
                                                <td>434346545</td>
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
                                                <td>Sold by</td>
                                                <td>assassas</td>
                                            </tr>
                                            <tr>
                                                <td>Sold date</td>
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
                                        <Table borderAxis='none'>
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
                                                <td>Category</td>
                                                <td>98765443210</td>
                                            </tr>
                                            <tr>
                                                <td><Typography component="h4">Special message</Typography></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>EXT WTY NO</td>
                                                <td>RSA NO</td>
                                            </tr>
                                            <tr>
                                                <td>HAP No</td>
                                                <td>Insurance Renewal 4343443</td>
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

                    <Grid container mt={2} wrap="nowrap" sx={{ flexGrow: 1, flexDirection: { xs: "column", md: "row" } }}>
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
                                    <Textarea minRows={6} defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
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
                                <Typography component="h5" level='body-lg' fontWeight="md" mb={1}>Additional Description</Typography>
                                <FormControl>
                                    <FormLabel>Remarks</FormLabel>
                                    <Textarea minRows={5} defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                                </FormControl>
                            </Box>
                            
                            <Box mb={2}>
                                <Typography component="h5" level='body-lg' fontWeight="md" mb={1}>Additional Description</Typography>
                                <FormControl>
                                    <FormLabel>Remarks</FormLabel>
                                    <Textarea minRows={5} defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                                </FormControl>
                            </Box>

                            <Stack flexDirection="row" gap={2}>
                                <FormControl>
                                    <FormLabel>Expected Date</FormLabel>
                                    <Input type='date' />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Expected Time</FormLabel>
                                    <Input type='time' />
                                </FormControl>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Box pt={2}>
                        <Box sx={{backgroundColor: "#00b9f1"}} p={1}><Typography level='body-lg'>Pre Work Quotation</Typography></Box>
                        <Table borderAxis='none'>
                            <thead>
                                <tr>
                                    <td>Product</td>
                                    <td>Quantity</td>
                                    <td>Unit Price</td>
                                    <td>Total Price</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Wind Screen</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Box>
                    
                </Sheet>
                </ModalDialog>
            </ModalOverflow>
        </Modal>
    )
}

export default Quotation