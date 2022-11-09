import React from 'react'
import { Box, Grid, Typography, Stack, TextField, Button,Divider } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
    return (
        <Box component={'div'} sx={{ backgroundColor: 'black' }}>
            <Stack direction={'column'}>

            <Grid container spacing={2} sx={{ margin: 0 }}>
                <Grid item xs={3}>
                    <Stack direction={'column'} gap={2}>
                        <Typography sx={{ color: 'white',fontWeight:'bold' }} variant='h5'>Info Details</Typography>
                        <ContactDetails />

                    </Stack>
                </Grid>
                <Grid item xs={2} >
                    <Stack direction={'column'}  gap={2}>
                        <Typography sx={{ color: 'white',fontWeight:'bold' }} variant='h5'>Contact Details</Typography>
                        <Pages />

                    </Stack>

                </Grid>
                <Grid item xs={2}>
                    <Stack direction={'column'} gap={2}>
                        <Typography sx={{ color: 'white',fontWeight:'bold' }} variant='h5'>Shops</Typography>
                        <Shop />

                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack direction={'column'} gap={2}>
                        <Typography sx={{ color: 'white',fontWeight:'bold' }} variant='h5'>Customer Services</Typography>
                        <CustomerServices />

                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack direction={'column'} gap={2}>
                        <Typography sx={{ color: 'white',fontWeight:'bold' }} variant='h5'>NEWSLETTERS</Typography>
                        <WeeklyNewsLetter />

                    </Stack>
                </Grid>
            </Grid>
            <Divider sx={{backgroundColor:'gray',marginTop:'10px'}} />
            <SocialMediaGroup/>
            <Typography sx={{color:'white', textAlign:'center'}}>&copy; 2021 Prajwal Bossman</Typography>
            </Stack>

        </Box>
    )
}

export default Footer


const ContactDetails = () => {
    return (
        <Stack direction={'column'} sx={{ color: 'white' }} >
            <Typography>+977 01245946</Typography>
            <Typography>info@gmail.com</Typography>
            <Typography>26B, LGF, LabimMall, Pulchowk, Lalitpur</Typography>
        </Stack>

    )
}
const Pages = () => {
    return (
        <Stack direction={'column'} sx={{ color: 'white' }} >
            <Typography>Home</Typography>
            <Typography>About Us</Typography>
            <Typography>Contact Us</Typography>
            <Typography>My account</Typography>
        </Stack>
    )
}
const Shop = () => {
    return (
        <Stack direction={'column'} sx={{ color: 'white' }} >
            <Typography>Audio</Typography>
            <Typography>Energy Us</Typography>
            <Typography>Protection</Typography>
            <Typography>Life</Typography>
        </Stack>
    )
}
const CustomerServices = () => {
    return (
        <Stack direction={'column'} sx={{ color: 'white' }} >
            <Typography>Contact US</Typography>
            <Typography>FAQ</Typography>
            <Typography>Find our store</Typography>
            <Typography>Privacy Policy</Typography>
            <Typography>Warranty Guidelines</Typography>
            <Typography>Shipping info</Typography>
            <Typography>Terms & Conditions</Typography>
            <Typography>Become our Partner</Typography>
        </Stack>
    )
}
const WeeklyNewsLetter = () => {
    return (
        <Stack direction={'column'} gap={1}  >
            <TextField label='Name' variant='outlined' sx={{ backgroundColor: 'gray' }} fullWidth size='small' />
            <TextField label='Email' type={'email'} variant='outlined' sx={{ backgroundColor: 'gray' }} fullWidth size='small' />
            <Button variant='contained' color='warning'>SUBSCRIBE</Button>
        </Stack>

    )
}


const SocialMediaGroup = () => {
    return (
        <Stack gap={2} direction={'row'} alignItems='center' justifyContent={'center'} sx={{padding:'10px',marginTop:'10px'}} >
            <InstagramIcon sx={{color:'white',fontSize:'30px'}} />
            <FacebookIcon sx={{color:'white',fontSize:'30px'}} />
            <TwitterIcon sx={{color:'white',fontSize:'30px'}}/>
        </Stack>
    )
}