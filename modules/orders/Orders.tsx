import { Search, StarBorderOutlined } from '@mui/icons-material'
import { Box, Button, Grid, Stack, Tab, TabList, TabPanel, Tabs, Textarea, Typography } from '@mui/joy'
import { InputAdornment, Rating, TextField } from '@mui/material'
import React from 'react'

const Orders = () => {
    const [index, setIndex] = React.useState(0);
    const [value, setValue] = React.useState<number | null>(2);


  return (
    <Grid container mb={5}>
        <Grid md={9}>
            <Tabs
                variant="plain"
                aria-label="Placement indicator tabs"
                value={index}
                onChange={(event, newValue) => setIndex(newValue as typeof index)}
                sx={{bgcolor: "transparent"}}
            >
                <TabList sx={{marginBottom: 5}} >
                    <Tab sx={{borderRadius: 5}} disableIndicator variant={index === 0 ? "solid" : "plain"} color='primary'>Completed Jobs</Tab>
                    <Tab sx={{borderRadius: 5}} disableIndicator variant={index === 1 ? "solid" : "plain"} color='primary'>Pending Orders</Tab>
                </TabList>

                <TabPanel value={0} sx={{padding: 0}}>
                    {Array.from({length: 3}).map((_, i) => <Box key={i} mb={2}>
                            <Box>
                                <Stack p={1} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={theme => ({bgcolor: theme.colorSchemes.light.palette.primary[400], borderTopLeftRadius: 7, borderTopRightRadius: 7})}>
                                    <Typography>Vehicle No.- MP125942</Typography>
                                    <Typography>Paid Shop - Bay 1</Typography>
                                    <Typography>Attended by - Dilip</Typography>
                                </Stack>
                            </Box>

                            <Box bgcolor={"primary.100"}>
                                <Grid container>
                                    <Grid md={9} pt={5} pl={2} pr={2} pb={2}>
                                        <Box mb={1}>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                precision={0.5}
                                                size='large'
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                                />
                                        </Box>

                                        <Box mb={1}>
                                            <Stack flexDirection={'row'} alignItems={'center'} columnGap={5}>
                                                <Typography level='body-md' textColor={'primary.softColor'}>Previous Rating</Typography>
                                                <Typography level='h1' fontWeight={"300"} textColor={"warning.400"}>{value === null ? 0 : value}</Typography>
                                            </Stack>
                                        </Box>

                                        <Box>
                                            <Textarea minRows={8} placeholder='Tell us your experience' />
                                        </Box>
                                    </Grid>
                                    
                                    <Grid md={3} alignSelf={'end'} p={2} justifyContent={'flex-end'} textAlign={'end'}>
                                        <Button sx={theme => ({pl: 5, pr: 5, bgcolor: theme.colorSchemes.light.palette.warning[400]})}>Submit</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box> )}
                </TabPanel>
                <TabPanel value={1} sx={{padding: 0}}>
                    {Array.from({length: 1}).map((_, i) => <Box key={i} mb={2}>
                            <Box>
                                <Stack p={1} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={theme => ({bgcolor: theme.colorSchemes.light.palette.primary[400], borderTopLeftRadius: 7, borderTopRightRadius: 7})}>
                                    <Typography>Vehicle No.- MP125942</Typography>
                                    <Typography>Paid Shop - Bay 1</Typography>
                                    <Typography>Attended by - Dilip</Typography>
                                </Stack>
                            </Box>

                            <Box bgcolor={"primary.100"}>
                                <Grid container>
                                    <Grid md={9} pt={5} pl={2} pr={2} pb={2}>
                                        <Box mb={1}>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                precision={0.5}
                                                size='large'
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                                />
                                        </Box>

                                        <Box mb={1}>
                                            <Stack flexDirection={'row'} alignItems={'center'} columnGap={5}>
                                                <Typography level='body-md' textColor={'primary.softColor'}>Previous Rating</Typography>
                                                <Typography level='h1' fontWeight={"300"} textColor={"warning.400"}>{value === null ? 0 : value}</Typography>
                                            </Stack>
                                        </Box>

                                        <Box>
                                            <Textarea minRows={8} placeholder='Tell us your experience' />
                                        </Box>
                                    </Grid>
                                    
                                    <Grid md={3} alignSelf={'end'} p={2} justifyContent={'flex-end'} textAlign={'end'}>
                                        <Button sx={theme => ({pl: 5, pr: 5, bgcolor: theme.colorSchemes.light.palette.warning[400]})}>Submit</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box> )}
                </TabPanel>
            </Tabs>
        </Grid>

        <Grid md={3}>
            <TextField id="outlined-basic" label="Search" variant="outlined" sx={{width: "100%", bgcolor: "#FFF"}} InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
            }} />
        </Grid>
    </Grid>
  )
}

export default Orders