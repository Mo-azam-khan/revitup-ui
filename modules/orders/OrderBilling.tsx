
import { Box, Button, Chip, Grid, Stack, Table, Typography } from '@mui/joy';
import { Paper } from '@mui/material';
import React from 'react'

const OrderBilling = () => {
  return (
    <div>
        <Typography mb={4} component="h1" level='h4'>List Order Billing</Typography>
        <Box px={2} py={1} borderRadius={10} bgcolor={"#FFF"} border={"1px solid #dadada"} mb={3}>
            <Grid container>
                <Grid md={6}>
                    <Typography mb={1} component="h3" fontSize={18} fontWeight={500}>Order #46123</Typography>
                    <Chip color='primary'>Ready to ship</Chip>

                    <Stack my={2} flexDirection="row" alignItems="center" columnGap={1}>
                        <Box><Typography fontSize={12} p={1} bgcolor="#eee" textColor="#A51818">Paid on: 2024-12-04 12:56</Typography></Box>
                        <Box><Typography fontSize={12} p={1} bgcolor="#eee" textColor="#A51818">Placed on: 2024-12-04 12:56</Typography></Box>
                        <Box><Typography fontSize={12} p={1} bgcolor="#eee" textColor="#A51818">Updated on: 2024-12-04 12:56</Typography></Box>
                    </Stack>
                </Grid>
                <Grid md={6} alignSelf={'center'}>
                    <Stack flexDirection={'row'} justifyContent={'flex-end'}>
                        <Button size='lg' variant='outlined' sx={{mx: 1}}>More</Button>
                        <Button size='lg' variant='outlined' sx={{mx: 1}}>Export</Button>
                        <Button size='lg' sx={{mx: 1}}>Create Billing Orders</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
        <Grid container spacing={2} mb={3}>
            <Grid md={4}>
                <Box height={"100%"} px={2} py={1} borderRadius={10} bgcolor={"#FFF"} border={"1px solid #dadada"}>
                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Typography component="h3" fontSize={18} fontWeight={500}>Customer Order</Typography>
                        <Button variant='outlined' sx={{mx: 1}}>Edit</Button>
                    </Stack>
                     <Table borderAxis='none'>
                      <thead>
                        <tr>
                            <td>Name</td>
                            <td>: Ajay Singh</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>: example@basic.com</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Phone</td>
                            <td>: 9876543210</td>
                        </tr>
                        <tr>
                            <td>PO</td>
                            <td>: 45222151</td>
                        </tr>
                        <tr>
                            <td>Payment Item</td>
                            <td>: Net 30</td>
                        </tr>
                        <tr>
                            <td>Delivery Method</td>
                            <td>: Company</td>
                        </tr>
                        </tbody>
                    </Table>
                </Box>
            </Grid>
            <Grid md={4}>
                <Box height={"100%"} px={2} py={1} borderRadius={10} bgcolor={"#FFF"} border={"1px solid #dadada"}>
                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} mb={3}>
                        <Typography component="h3" fontSize={18} fontWeight={500}>Shipping Address</Typography>
                        <Button variant='outlined' sx={{mx: 1}}>Edit</Button>
                    </Stack>

                    <Typography fontSize={14} textColor={"common.black"} letterSpacing={-0.2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Typography>
                </Box>
            </Grid>
            <Grid md={4}>
                <Box height={"100%"} px={2} py={1} borderRadius={10} bgcolor={"#FFF"} border={"1px solid #dadada"}>
                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} mb={3}>
                        <Typography component="h3" fontSize={18} fontWeight={500}>Billing Address</Typography>
                        <Button variant='outlined' sx={{mx: 1}}>Edit</Button>
                    </Stack>

                    <Typography fontSize={14} textColor={"common.black"} letterSpacing={-0.2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Typography>
                </Box>
            </Grid>
        </Grid>
        <Box mb={3} height={"30%"} borderRadius={10} bgcolor={"#FFF"} border={"1px solid #dadada"}>
            <Stack px={2} py={1} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Typography component="h3" fontSize={18} fontWeight={500}>Item Ordered</Typography>
                <Button variant='outlined' sx={{mx: 1}}>Edit</Button>
            </Stack>
            <Table borderAxis="xBetween" variant="plain">
                <thead>
                    <tr style={{background: "var(--joy-palette-neutral-100, #F0F4F8)"}}>
                        <td style={{padding: "0 15px"}}><Typography fontSize={16} fontWeight={500}>Item Name</Typography></td>
                        <td style={{padding: "0 15px"}}><Typography fontSize={16} fontWeight={500}>Stock ID</Typography></td>
                        <td style={{padding: "0 15px"}}><Typography fontSize={16} fontWeight={500}>Quantity</Typography></td>
                        <td style={{padding: "0 15px"}}><Typography fontSize={16} fontWeight={500}>Price</Typography></td>
                        <td style={{padding: "0 15px", textAlign: "right"}}><Typography fontSize={16} fontWeight={500}>Total</Typography></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{padding: "0 15px"}}><Box sx={{float: "left", verticalAlign: "middle"}} mr={1} lineHeight={2.5} fontWeight={700} bgcolor={"danger.solidDisabledBg"} borderRadius={"100%"} textAlign={'center'} width={35} height={35}>A</Box> Air Filter SID</td>
                        <td style={{padding: "0 15px"}}>SID 785421</td>
                        <td style={{padding: "0 15px"}}>50</td>
                        <td style={{padding: "0 15px"}}>500</td>
                        <td style={{padding: "0 15px", textAlign: "right"}}>25000</td>
                    </tr>
                    <tr>
                        <td style={{padding: "0 15px"}}><Box sx={{float: "left", verticalAlign: "middle"}} mr={1} lineHeight={2.5} fontWeight={700} bgcolor={"danger.solidDisabledBg"} borderRadius={"100%"} textAlign={'center'} width={35} height={35}>A</Box> Air Filter SID</td>
                        <td style={{padding: "0 15px"}}>SID 785421</td>
                        <td style={{padding: "0 15px"}}>50</td>
                        <td style={{padding: "0 15px"}}>500</td>
                        <td style={{padding: "0 15px", textAlign: "right"}}>25000</td>
                    </tr>
                    <tr>
                        <td style={{padding: "0 15px"}}></td>
                        <td style={{padding: "0 15px"}}></td>
                        <td style={{padding: "0 15px"}}></td>
                        <td style={{padding: "0 15px"}}>Sub Total</td>
                        <td style={{padding: "0 15px", textAlign: "right"}}>50000</td>
                    </tr>
                    <tr>
                        <td style={{padding: "0 15px"}}>Charges Laver</td>
                        <td style={{padding: "0 15px"}}></td>
                        <td style={{padding: "0 15px"}}></td>
                        <td style={{padding: "0 15px"}}>Within Material</td>
                        <td style={{padding: "0 15px", textAlign: "right"}}>500</td>
                    </tr>
                    <tr>
                        <td style={{padding: "0 15px"}}>Total</td>
                        <td style={{padding: "0 15px"}}></td>
                        <td style={{padding: "0 15px"}}></td>
                        <td style={{padding: "0 15px"}}>Tax amount with GST</td>
                        <td style={{padding: "0 15px", textAlign: "right"}}>500</td>
                    </tr>
                    <tr>
                        <td style={{padding: "0 15px"}}>Currency Rupees</td>
                        <td style={{padding: "0 15px"}}></td>
                        <td style={{padding: "0 15px"}}></td>
                        <td style={{padding: "0 15px"}}><strong>Total</strong></td>
                        <td style={{padding: "0 15px", textAlign: "right"}}><strong>Rs. 51000</strong></td>
                    </tr>
                </tbody>
            </Table>
        </Box>
        <Box height={"20%"} borderRadius={10} bgcolor={"#FFF"} border={"1px solid #dadada"} mb={3}>
            <Stack px={2} py={1} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Typography component="h3" fontSize={18} fontWeight={500}>Invoices</Typography>
            </Stack>
             <Table borderAxis="xBetween" variant="plain">
                <thead>
                    <tr style={{background: "var(--joy-palette-neutral-100, #F0F4F8)"}}>
                        <td style={{padding: "0 15px"}}><Typography fontSize={16} fontWeight={500}>No</Typography></td>
                        <td style={{padding: "0 15px"}}><Typography fontSize={16} fontWeight={500}>Amount</Typography></td>
                        <td style={{padding: "0 15px"}}><Typography fontSize={16} fontWeight={500}>Customers</Typography></td>
                        <td style={{padding: "0 15px"}}><Typography fontSize={16} fontWeight={500}>Status</Typography></td>
                        <td style={{padding: "0 15px"}}><Typography textAlign={"right"} fontSize={16} fontWeight={500}>Date</Typography></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{padding: "0 15px"}}>12345678</td>
                        <td style={{padding: "0 15px"}}>51500</td>
                        <td style={{padding: "0 15px"}}>Josh Baker</td>
                        <td style={{padding: "0 15px"}}>14</td>
                        <td style={{textAlign: "right", padding: "0 15px"}}>21 Feb 2024</td>
                    </tr>
                </tbody>
            </Table> 
        </Box>
        <Grid container>
            <Grid md={8}></Grid>
            <Grid md={4} display={'flex'} alignItems={'center'} justifyContent={'flex-end'} flexDirection={'row'} columnGap={2}>
                <Button size='lg' variant='outlined'>Cancel</Button>
                <Button size='lg'>Submit Billing Order</Button>
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderBilling;