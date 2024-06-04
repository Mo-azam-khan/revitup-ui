import { Box, Card, Grid, Stack, Typography } from '@mui/joy'
import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

const Profile = () => {

  return (
    <Box sx={theme => ({px: 10, pt: 6, [theme.breakpoints.down("sm")]: {px: 0}})} className='profile-page'>
      <Grid container direction="column" rowSpacing={8} >
        <Stack direction="row" justifyContent="flex-start" columnGap={5} alignItems="center" mb={5}>
          <div><AccountCircleOutlinedIcon sx={{color: "#ffa036", fontSize: "80px"}} /></div>
          <div className=''>
            <Typography level='h1' sx={{color: "#002e6e"}}>Welcome to your Profile</Typography>
            <Link href="#"><Typography component='h6' sx={{display: "inline-block", color: "#002e6e", borderBottom: "2px solid #ffa036"}}>Change Password</Typography></Link>
          </div>
        </Stack>

        <Card size='lg'>
          <Grid container columns={{md: 12}} sx={{ flexGrow: 1 }} rowSpacing={5}>
            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#1a237e", fontWeight: 600}}>Company Name</Typography>
            </Grid>
            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#ffa036", fontWeight: 600}}>Gupta Trading Company</Typography>
            </Grid>

            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#1a237e", fontWeight: 600}}>Address</Typography>
            </Grid>
            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#ffa036", fontWeight: 600}}>34/36 Navi Mumbai, near thana road, Mumbai</Typography>
            </Grid>

            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#1a237e", fontWeight: 600}}>P O Box</Typography>
            </Grid>
            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#ffa036", fontWeight: 600}}>Navi Mumbai</Typography>
            </Grid>

            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#1a237e", fontWeight: 600}}>Contact Number</Typography>
            </Grid>
            <Grid md={6} sm={12} xs={12}>
              <Stack direction="row" columnGap={1}><Typography sx={{color: "#ffa036", fontWeight: 600}}>9876543210 </Typography> <Box sx={{cursor: "pointer"}}><EditIcon sx={{color: "#1a237e"}} /></Box></Stack>
            </Grid>

            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#1a237e", fontWeight: 600}}>Commercial Activity / Industry</Typography>
            </Grid>
            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#ffa036", fontWeight: 600}}>Electronic Business</Typography>
            </Grid>

            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#1a237e", fontWeight: 600}}>Subscription Name</Typography>
            </Grid>
            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#ffa036", fontWeight: 600}}>1 Year Master subs</Typography>
            </Grid>

            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#1a237e", fontWeight: 600}}>Cards Stored</Typography>
            </Grid>
            <Grid md={6} sm={12} xs={12}>
              <Stack direction="row" columnGap={1}><Typography sx={{color: "#ffa036", fontWeight: 600}}>***************8987 </Typography> <Box sx={{cursor: "pointer"}}><VisibilityIcon sx={{color: "#1a237e"}} /></Box></Stack>
            </Grid>

            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#1a237e", fontWeight: 600}}>Team</Typography>
            </Grid>
            <Grid md={6} sm={12} xs={12}>
            <Stack direction="row" columnGap={1}><Typography sx={{color: "#ffa036", fontWeight: 600}}>4 people total </Typography> <Box sx={{cursor: "pointer"}}><VisibilityIcon sx={{color: "#1a237e"}} /></Box></Stack>
            </Grid>

            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#1a237e", fontWeight: 600}}>Document Uploaded</Typography>
            </Grid>
            <Grid md={6} sm={12} xs={12}>
              <Typography sx={{color: "#ffa036", fontWeight: 600}}>Owner's Eid, TRade License</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Box>
  )
}

export default Profile