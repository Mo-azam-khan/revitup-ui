import { Search } from '@mui/icons-material';
import { Avatar, Box, Button, Divider, Grid, IconButton, Input, Sheet, Stack, Table, Typography } from '@mui/joy';
import { Chip } from '@mui/material';
import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const WorkerWorking = () => {
  return (
    <>
        <Grid container mb={5}>
            <Grid xl={8}>
            <Stack flexDirection={'row'} columnGap={2} alignItems={'center'}>
                <Typography mb={4} component="h1" level='h4' fontWeight={"500"}>Worker Working (Allocated Vehicle)</Typography>
            </Stack>
            </Grid>

            <Grid xl={4}>
                <Stack flexDirection={'row'} columnGap={2} justifyContent={'flex-end'}>
                    <Input size='lg' startDecorator={<Search />} placeholder="Search Quotation" />
                    <Button size='lg'>Search</Button>
                </Stack>
            </Grid>
        </Grid>

        <Box bgcolor={"white"} border={"1px solid #CCC"} p={2} borderRadius={5}>
            <Box pb={2}>
                <Typography fontWeight={"500"} component="h2">Allocated Vehicle <Chip color='primary' variant='outlined' sx={theme => ({borderRadius: 2, ml: 2, backgroundColor: "#e3f2fd"})} label="Labour Worker" /></Typography>
            </Box>
            <Divider />

            <Box bgcolor={"primary.50"} p={2} mt={2} border={"1px solid #CCC"} borderRadius={5}>
                <Grid container alignItems={"center"}>
                    <Grid xl={3} lg={2} container columnGap={2} alignItems={"center"}>
                        <Grid>
                            <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                        </Grid>
                        <Grid>
                            <Typography fontSize={18} textColor={"common.black"}>Josh Baker</Typography>
                            <Typography component={"small"} fontSize={12} textColor={"common.black"}>Fitting Man</Typography>
                        </Grid>
                    </Grid>
                    <Divider orientation='vertical' sx={{mx: 1}} />
                    <Grid xl={6} lg={6}>
                        <Chip color='default' variant='filled' sx={theme => ({borderRadius: 1, ml: 2, })} label="Suzuki Maruti 800" />
                        <Chip color='default' variant='filled' sx={theme => ({borderRadius: 1, ml: 2, })} label="Land Rover Defender" />
                        <Chip color='default' variant='filled' sx={theme => ({borderRadius: 1, ml: 2, })} label="Chevrolet Muscle" />
                    </Grid>
                    <Divider orientation='vertical' sx={{mx: 1}} />
                    <Grid xl={1} md={2}>
                        <Typography fontSize={18} textColor={"common.black"}>12 May 2024</Typography>
                        <Typography component={"small"} fontSize={12} textColor={"common.black"}>10:20:25 AM</Typography>
                    </Grid>
                    
                    <Grid xl={1.6} md={1.5}>
                        <Stack flexDirection={'row'} justifyContent={"flex-end"}>
                            <IconButton variant="plain">
                                <EditOutlinedIcon />
                            </IconButton>
                            <Divider orientation='vertical' sx={{mx: 1}} />
                            <IconButton variant="plain">
                                <DeleteOutlineOutlinedIcon />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>

                <Box mt={4} pb={1}>
                    <Typography fontWeight={"500"} component="h2">Requested All Part List <Chip color='primary' variant='outlined' sx={theme => ({borderRadius: 2, ml: 2, backgroundColor: "#e3f2fd"})} label="Requested" /></Typography>
                </Box>

                <Sheet sx={{borderRadius: 5}}>
                    <Table variant="plain" color='primary'>
                        <thead>
                            <tr >
                                <th style={{background: "#012e6f", color: "#FFF"}}>S.no</th>
                                <th style={{background: "#012e6f", color: "#FFF"}}>Dessert (100g serving)</th>
                                <th style={{background: "#012e6f", color: "#FFF"}}>Calories</th>
                                <th style={{background: "#012e6f", color: "#FFF"}}>Fat&nbsp;(g)</th>
                                <th style={{background: "#012e6f", color: "#FFF"}}>Carbs&nbsp;(g)</th>
                                <th style={{background: "#012e6f", color: "#FFF"}}>Protein&nbsp;(g)</th>
                            </tr>
                        </thead>
                        <tbody style={{background: "#FFF"}}>
                            <tr>    
                                <td>1</td>
                                <td>Frozen yoghurt</td>
                                <td>159</td>
                                <td>6</td>
                                <td>24</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Ice cream sandwich</td>
                                <td>237</td>
                                <td>9</td>
                                <td>37</td>
                                <td>4.3</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Eclair</td>
                                <td>262</td>
                                <td>16</td>
                                <td>24</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Cupcake</td>
                                <td>305</td>
                                <td>3.7</td>
                                <td>67</td>
                                <td>4.3</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Gingerbread</td>
                                <td>356</td>
                                <td>16</td>
                                <td>49</td>
                                <td>3.9</td>
                            </tr>
                        </tbody>
                    </Table>
                </Sheet>
            </Box>

            {Array.from({length: 3}).map((_, i) => <Box key={i} bgcolor={"primary.50"} p={2} mt={2} border={"1px solid #CCC"} borderRadius={5}>
                <Grid container alignItems={"center"}>
                    <Grid xl={3} lg={2} container columnGap={2} alignItems={"center"}>
                        <Grid>
                            <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                        </Grid>
                        <Grid>
                            <Typography fontSize={18} textColor={"common.black"}>Josh Baker</Typography>
                            <Typography component={"small"} fontSize={12} textColor={"common.black"}>Fitting Man</Typography>
                        </Grid>
                    </Grid>
                    <Divider orientation='vertical' sx={{mx: 1}} />
                    <Grid xl={6} lg={6}>
                        <Chip color='default' variant='filled' sx={theme => ({borderRadius: 1, ml: 2, })} label="Suzuki Maruti 800" />
                        <Chip color='default' variant='filled' sx={theme => ({borderRadius: 1, ml: 2, })} label="Land Rover Defender" />
                        <Chip color='default' variant='filled' sx={theme => ({borderRadius: 1, ml: 2, })} label="Chevrolet Muscle" />
                    </Grid>
                    <Divider orientation='vertical' sx={{mx: 1}} />
                    <Grid xl={1} md={2}>
                        <Typography fontSize={18} textColor={"common.black"}>12 May 2024</Typography>
                        <Typography component={"small"} fontSize={12} textColor={"common.black"}>10:20:25 AM</Typography>
                    </Grid>
                    
                    <Grid xl={1.6} md={1.5}>
                        <Stack flexDirection={'row'} justifyContent={"flex-end"}>
                            <IconButton variant="plain">
                                <EditOutlinedIcon />
                            </IconButton>
                            <Divider orientation='vertical' sx={{mx: 1}} />
                            <IconButton variant="plain">
                                <DeleteOutlineOutlinedIcon />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>)}
        </Box>
    
    </>
  )
}

export default WorkerWorking;