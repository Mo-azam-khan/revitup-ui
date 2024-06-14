import { Search } from '@mui/icons-material'
import { Box, Button, Divider, Grid, IconButton, Stack, Typography } from '@mui/joy'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SortIcon from '@mui/icons-material/Sort';
import FaceIcon from '@mui/icons-material/Face';
import Link from 'next/link';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ClientCard = () => {
  return (
    <div>
        <Grid container mb={5}>
            <Grid md={3}>
                <TextField id="outlined-basic" label="Search" variant="outlined" sx={{width: "100%", bgcolor: "#FFF"}} InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }} />
            </Grid>
        </Grid>

        <Grid container spacing={5}>
            <Grid md={3}>
                <Box sx={{border: "1px solid #000", borderRadius: 10}} bgcolor={"#FFF"} p={1} mb={5}>
                    <Stack flexDirection={'row'} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography>Task</Typography>
                        <IconButton><SortIcon /></IconButton>
                    </Stack>
                </Box>

                {Array.from({length: 5}).map((_, i) => <>
                    <Box sx={{border: "1px solid #000", borderRadius: 10}} bgcolor={"#FFF"} p={1} mb={2}>
                        <Grid container spacing={2}>
                            <Grid md={1}><Box><FaceIcon sx={{fontSize: "30px"}} /></Box></Grid>
                            <Grid md={7}>
                                <Typography component="h3" level='h4' color="danger">Akash Mittal</Typography>
                                <Typography component="small" level='body-sm' sx={theme => ({color: theme.colorSchemes.light.palette.neutral[500]})}>Service Manager</Typography>
                                <Typography mb={1} sx={{width: "100%", color: "#000"}} component="p" level='body-xs'>Wagon R, Creta, City... <Link style={{textDecoration: "underline"}} href="">+3 more</Link></Typography>
                            </Grid>
                            

                            <Grid md={4} alignSelf={'flex-start'}>
                                <Button variant='outlined' sx={{width: "100%"}}>Bay 1</Button>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid md={1}></Grid>
                            <Grid md={7}>
                                <Box py={1}>
                                    <Stack flexDirection={"row"} alignItems={"center"}>
                                        <Typography sx={{width: "100%"}} color='danger' component="p" level='body-sm'>Workers Idle</Typography>
                                        <Typography color='danger' component="p" level='body-sm'>6</Typography>
                                    </Stack>
                                    <Stack flexDirection={"row"} alignItems={"center"}>
                                        <Typography sx={{width: "100%"}} color='success' component="p" level='body-sm'>Workers Active</Typography>
                                        <Typography color='success' component="p" level='body-sm'>4</Typography>
                                    </Stack>
                                    <Divider />
                                    <Stack flexDirection={"row"} alignItems={"center"}>
                                        <Typography sx={{width: "100%"}} component="p" level='body-sm'>Total Workers</Typography>
                                        <Typography component="p" level='body-sm'>10</Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid md={4}>
                                <Stack rowGap={1}>
                                    <Button variant='outlined' size='sm' color='success' sx={{width: "100%"}}>Complete</Button>
                                    <Button variant='outlined' size='sm' color='danger' sx={{width: "100%"}}>Hold</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </>)}

            </Grid>

            <Grid md={3}>
                <Box sx={{border: "1px solid #000", borderRadius: 10}} bgcolor={"#FFF"} p={1} mb={5}>
                    <Stack flexDirection={'row'} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography>Approve</Typography>
                        <IconButton><SortIcon /></IconButton>
                    </Stack>
                </Box>

                <Box sx={{border: "1px solid #000", borderRadius: 10}} bgcolor={"#FFF"} p={1} mb={2}>
                    <Grid container spacing={2}>
                        <Grid md={1}><Box><FaceIcon sx={{fontSize: "30px"}} /></Box></Grid>
                        <Grid md={7}>
                            <Typography component="h3" level='h4' color="danger">Akash Mittal</Typography>
                            <Typography component="small" level='body-sm' sx={theme => ({color: theme.colorSchemes.light.palette.neutral[500]})}>Service Manager</Typography>
                            <Typography mb={1} sx={{width: "100%", color: "#000"}} component="p" level='body-xs'>Wagon R, Creta, City... <Link style={{textDecoration: "underline"}} href="">+3 more</Link></Typography>
                        </Grid>
                        

                        <Grid md={4} alignSelf={'flex-start'}>
                            <Button variant='outlined' sx={{width: "100%"}}>Bay 1</Button>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid md={1}></Grid>
                        <Grid md={7}>
                            <Box py={1}>
                                <Stack flexDirection={"row"} alignItems={"center"}>
                                    <Typography sx={{width: "100%"}} color='danger' component="p" level='body-sm'>Workers Idle</Typography>
                                    <Typography color='danger' component="p" level='body-sm'>6</Typography>
                                </Stack>
                                <Stack flexDirection={"row"} alignItems={"center"}>
                                    <Typography sx={{width: "100%"}} color='success' component="p" level='body-sm'>Workers Active</Typography>
                                    <Typography color='success' component="p" level='body-sm'>4</Typography>
                                </Stack>
                                <Divider />
                                <Stack flexDirection={"row"} alignItems={"center"}>
                                    <Typography sx={{width: "100%"}} component="p" level='body-sm'>Total Workers</Typography>
                                    <Typography component="p" level='body-sm'>10</Typography>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid md={4}>
                            <Stack rowGap={1}>
                                <Button variant='outlined' size='sm' color='success' sx={{width: "100%"}}>Approve</Button>
                                <Button variant='outlined' size='sm' color='danger' sx={{width: "100%"}}>Reject</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            <Grid md={3}>
                <Box sx={{border: "1px solid #000", borderRadius: 10}} bgcolor={"#FFF"} p={1} mb={5}>
                    <Stack flexDirection={'row'} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography>Complete</Typography>
                        <IconButton><SortIcon /></IconButton>
                    </Stack>
                </Box>

                <Box sx={{border: "1px solid #000", borderRadius: 10}} bgcolor={"#FFF"} p={1} mb={2}>
                    <Grid container spacing={2}>
                        <Grid md={1}><Box><FaceIcon sx={{fontSize: "30px"}} /></Box></Grid>
                        <Grid md={7}>
                            <Typography component="h3" level='h4' color="danger">Akash Mittal</Typography>
                            <Typography component="small" level='body-sm' sx={theme => ({color: theme.colorSchemes.light.palette.neutral[500]})}>Service Manager</Typography>
                            <Typography mb={1} sx={{width: "100%", color: "#000"}} component="p" level='body-xs'>Wagon R, Creta, City... <Link style={{textDecoration: "underline"}} href="">+3 more</Link></Typography>
                        </Grid>
                        

                        <Grid md={4} alignSelf={'flex-start'}>
                            <Button variant='outlined' sx={{width: "100%"}}>Bay 1</Button>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid md={1}></Grid>
                        <Grid md={7}>
                            <Box py={1}>
                                <Stack flexDirection={"row"} alignItems={"center"}>
                                    <Typography sx={{width: "100%"}} color='danger' component="p" level='body-sm'>Workers Idle</Typography>
                                    <Typography color='danger' component="p" level='body-sm'>6</Typography>
                                </Stack>
                                <Stack flexDirection={"row"} alignItems={"center"}>
                                    <Typography sx={{width: "100%"}} color='success' component="p" level='body-sm'>Workers Active</Typography>
                                    <Typography color='success' component="p" level='body-sm'>4</Typography>
                                </Stack>
                                <Divider />
                                <Stack flexDirection={"row"} alignItems={"center"}>
                                    <Typography sx={{width: "100%"}} component="p" level='body-sm'>Total Workers</Typography>
                                    <Typography component="p" level='body-sm'>10</Typography>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid md={4} alignSelf={'center'}>
                            <Stack rowGap={1} flexDirection={'row'}>
                                <StarIcon sx={{color: "#ffea00"}} />
                                <StarIcon sx={{color: "#ffea00"}} />
                                <StarIcon sx={{color: "#ffea00"}} />
                                <StarBorderIcon />
                                <StarBorderIcon />
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default ClientCard