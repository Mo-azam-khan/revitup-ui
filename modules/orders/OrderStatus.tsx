import { Search } from '@mui/icons-material';
import { Box, Button, Checkbox, Grid, Input, Stack, Typography } from '@mui/joy';
import React from 'react'

const OrderStatus = () => {
  return (
    <>
      <Grid container mb={5}>
        <Grid md={8}>
          <Stack flexDirection={'row'} columnGap={2} alignItems={'center'}>
            <Typography>Completed Orders</Typography>
            <Button size='lg'>Pending Orders</Button>
          </Stack>
        </Grid>

        <Grid md={4}>
          <Input size="lg" startDecorator={<Search />} placeholder="Search" />
        </Grid>
      </Grid>

      <Box mb={2}>
        <Box>
            <Stack p={1} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={theme => ({bgcolor: theme.colorSchemes.light.palette.primary[400], borderTopLeftRadius: 7, borderTopRightRadius: 7})}>
                <Typography>Vehicle No.- MP125942</Typography>
                <Typography>Quotation No. - 78145412</Typography>
            </Stack>
        </Box>

        <Box bgcolor={"primary.100"}>
          <Grid container>
            <Grid md={4}>
              <Typography p={2} textColor={"text.icon"}>Part Name</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Samsung M30 dual sim</Typography>
                  <Typography level='body-sm'>Part no.: 8675</Typography>
                </Stack>)}
              </Stack>
            </Grid>

            <Grid md={4}>
              <Typography p={2} textColor={"text.icon"}>Delivery Location</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Body Shop bay 1</Typography>
                </Stack>)}
              </Stack>
            </Grid>
            
            <Grid md={2}>
              <Typography p={2} textColor={"text.icon"}>Manager</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Azam</Typography>
                </Stack>)}
              </Stack>
            </Grid>
            
            <Grid md={2}>
              <Typography p={2} textColor={"text.icon"}>Technician</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Person {i + 1}</Typography>
                </Stack>)}
              </Stack>
            </Grid>
          </Grid>

          <Grid container>
            <Grid md={9} bgcolor={"white"} p={2}>
              <Stack flexDirection="row" alignItems={"center"} columnGap={3}>
                <Checkbox label="Order Paid" />
                <Button variant='solid' sx={theme => ({backgroundColor: theme.colorSchemes.light.palette.warning[400], ":hover": {backgroundColor: theme.colorSchemes.light.palette.warning[400]}})} >Purchase Order</Button>
              </Stack>
            </Grid>

            <Grid md={3} bgcolor={"white"} p={2} display={"flex"} flexDirection={"row"} justifyContent={"flex-end"}>
              <Box sx={{border: "2px solid #000"}} py={1} px={3} color={"danger.outlinedColor"}>Order Pending</Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box mb={2}>
        <Box>
            <Stack p={1} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={theme => ({bgcolor: theme.colorSchemes.light.palette.primary[400], borderTopLeftRadius: 7, borderTopRightRadius: 7})}>
                <Typography>Vehicle No.- MP125942</Typography>
                <Typography>Quotation No. - 78145412</Typography>
            </Stack>
        </Box>

        <Box bgcolor={"primary.100"}>
          <Grid container>
            <Grid md={4}>
              <Typography p={2} textColor={"text.icon"}>Part Name</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Samsung M30 dual sim</Typography>
                  <Typography level='body-sm'>Part no.: 8675</Typography>
                </Stack>)}
              </Stack>
            </Grid>

            <Grid md={4}>
              <Typography p={2} textColor={"text.icon"}>Delivery Location</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Body Shop bay 1</Typography>
                </Stack>)}
              </Stack>
            </Grid>
            
            <Grid md={2}>
              <Typography p={2} textColor={"text.icon"}>Manager</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Azam</Typography>
                </Stack>)}
              </Stack>
            </Grid>
            
            <Grid md={2}>
              <Typography p={2} textColor={"text.icon"}>Technician</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Person {i + 1}</Typography>
                </Stack>)}
              </Stack>
            </Grid>
          </Grid>

          <Grid container>
            <Grid md={9} bgcolor={"white"} p={2}>
              <Stack flexDirection="row" alignItems={"center"} columnGap={3}>
                <Checkbox label="Order Paid" />
                <Button variant='solid' sx={theme => ({backgroundColor: theme.colorSchemes.light.palette.warning[400], ":hover": {backgroundColor: theme.colorSchemes.light.palette.warning[400]}})} >Purchase Order</Button>
              </Stack>
            </Grid>

            <Grid md={3} bgcolor={"white"} p={2} display={"flex"} flexDirection={"row"} justifyContent={"flex-end"}>
              <Box sx={{border: "2px solid #000"}} py={1} px={3} color={"background.level3"}>Order Approved</Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default OrderStatus