import { Search } from '@mui/icons-material';
import { Box, Button, Checkbox, Grid, Input, Option, Select, Stack, Typography } from '@mui/joy';
import React from 'react'

const QuotationList = () => {
  return (
    <>
      <Grid container mb={5}>
        <Grid md={8}>
          <Stack flexDirection={'row'} columnGap={2} alignItems={'center'}>
            <Typography>Quotation List</Typography>
            <Button size='lg'>Quotation Comparsion</Button>
          </Stack>
        </Grid>

        <Grid md={4}>
          <Input size="lg" startDecorator={<Search />} placeholder="Search Quotation" />
        </Grid>
      </Grid>

      <Box py={2}>
        <Typography level='h3'>Requistion no. - 7854121</Typography>
      </Box>
      <Box mb={2}>
        <Box>
            <Stack p={1} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={theme => ({bgcolor: theme.colorSchemes.light.palette.primary[400], borderTopLeftRadius: 7, borderTopRightRadius: 7})}>
                <Typography>Suplied by - Samsung (7th April 2021)</Typography>
            </Stack>
        </Box>

        <Box bgcolor={"primary.100"}>
          <Grid container>
            <Grid md={3}>
              <Typography p={2} textColor={"text.icon"} minHeight={58}>Product</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Samsung M30 dual sim</Typography>
                  <Typography level='body-sm'>Part no.: 8675</Typography>
                </Stack>)}
              </Stack>
            </Grid>

            <Grid md={3}>
              <Typography p={2} textColor={"text.icon"} minHeight={58}>Quantity</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>5 piece</Typography>
                </Stack>)}
              </Stack>
            </Grid>
            
            <Grid md={2}>
              <Typography p={2} textColor={"text.icon"} minHeight={58}>Unit Price</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Rs. 20,000</Typography>
                </Stack>)}
              </Stack>
            </Grid>
            
            <Grid md={2}>
              <Typography p={2} textColor={"text.icon"} minHeight={58}>Total Price</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Rs. 1,00,000</Typography>
                </Stack>)}
              </Stack>
            </Grid>

            <Grid md={2}>
              <Typography p={2} textColor={"text.icon"} minHeight={58}></Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Box display={"flex"} alignItems={"center"} justifyContent={"center"} key={i} minHeight={65}><Select  size='lg' color='warning' variant='soft' placeholder="Select Action">
                  
                </Select></Box>)}
              </Stack>
            </Grid>
          </Grid>

          <Stack p={2} bgcolor={"white"} flexDirection="row" alignItems={"center"} columnGap={3}>
            <Checkbox label="Select to shortlist" />
          </Stack>
              
        </Box>
      </Box>

      <Box mb={2}>
        <Box>
            <Stack p={1} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={theme => ({bgcolor: theme.colorSchemes.light.palette.primary[400], borderTopLeftRadius: 7, borderTopRightRadius: 7})}>
                <Typography>Suplied by - Samsung (7th April 2021)</Typography>
            </Stack>
        </Box>

        <Box bgcolor={"primary.100"}>
          <Grid container>
            <Grid md={3}>
              <Typography p={2} textColor={"text.icon"} minHeight={58}>Product</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Samsung M30 dual sim</Typography>
                  <Typography level='body-sm'>Part no.: 8675</Typography>
                </Stack>)}
              </Stack>
            </Grid>

            <Grid md={3}>
              <Typography p={2} textColor={"text.icon"} minHeight={58}>Quantity</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>5 piece</Typography>
                </Stack>)}
              </Stack>
            </Grid>
            
            <Grid md={2}>
              <Typography p={2} textColor={"text.icon"} minHeight={58}>Unit Price</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Rs. 20,000</Typography>
                </Stack>)}
              </Stack>
            </Grid>
            
            <Grid md={2}>
              <Typography p={2} textColor={"text.icon"} minHeight={58}>Total Price</Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Stack justifyContent={"center"} minHeight={65} key={i} boxShadow="md" p={1}>
                  <Typography>Rs. 1,00,000</Typography>
                </Stack>)}
              </Stack>
            </Grid>

            <Grid md={2}>
              <Typography p={2} textColor={"text.icon"} minHeight={58}></Typography>
              <Stack rowGap={2} p={2} bgcolor={"white"}>
                {Array.from({length:3}).map((_, i) => <Box display={"flex"} alignItems={"center"} justifyContent={"center"} key={i} minHeight={65}><Select  size='lg' color='warning' variant='soft' placeholder="Select Action">
                  
                </Select></Box>)}
              </Stack>
            </Grid>
          </Grid>

          <Stack p={2} bgcolor={"white"} flexDirection="row" alignItems={"center"} columnGap={3}>
            <Checkbox label="Select to shortlist" />
          </Stack>
              
        </Box>
      </Box>
    </>
  )
}

export default QuotationList