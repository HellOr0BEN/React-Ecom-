
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

import styled from 'styled-components'

import StaticSection from './StaticSection';
import Location from './Location';

import CategoryScroll from './scrollArea/CategoryScroll';
import ItemScroll from './scrollArea/ItemScroll';






const BoxContainer = styled(Box)`
width:100%;
background-color:black;


`
const GridComp1 = styled(Grid)`
margin:0;
padding:0; 
height:70vh;
background-image:url(${image1});
background-size:cover;
position:relative;


`
const GridComp2 = styled(Grid)`
margin:0;
padding:0; 
height:70vh;
background-image:url(${image2});
background-size:cover;
position:relative;

`

const CustomStack = styled(Stack)`
color:white;

align-items:center;
justify-content:center;
gap:20px;
padding:20px;
background:rgba(0,0,0,0);
position:absolute;
bottom:0px;
left:50%;
transform:translate(-50%,0%);
`

const LandingPage = () => {
  return (
    <>
      <BoxContainer>
        <Grid container gap={1} >
          <GridComp1 item xs={6}>

            <CustomStack  >
              <Typography variant='h6' sx={{fontWeight:'bold'}}>Gadgets Craze</Typography>
              <Button variant={'outlined'} sx={{ color: 'white', borderRadius: '5px', border: '1px solid white' }}>SHOP</Button>
            </CustomStack>



          </GridComp1>
          <GridComp2 item xs={5.9}>
            <CustomStack >
              <Typography variant='h6' sx={{fontWeight:'bold'}}>Gadgets Craze</Typography>
              <Button variant={'outlined'} sx={{ color: 'white', borderRadius: '5px', border: '1px solid white' }}>SHOP</Button>
            </CustomStack>

          </GridComp2>


        </Grid>
      </BoxContainer>
      <SubComponent />
      <CategoryScroll />
      <StaticSection/>
      <ItemScroll title="Our top products" />
      <Location/>

      
      


    </>

  )
}

export default LandingPage

const SubComponent = () => {
  return (
    <BoxContainer>
      <Grid container >
        <Grid item xs={4}>
          <Stack alignItems={'center'} justifyContent='center' spacing={1} sx={{ color: 'white', marginY: '15px' }}>
            <LocalShippingIcon sx={{ fontSize: '50px', border: '1px solid white', marginY: '15px' }} />
            <Typography variant='h6' component={'div'}>Free shipping on all orders over Rs5000</Typography>
            <Typography variant='body2'>Store To Your Doorstep Within 1-3 Days.</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack alignItems={'center'} justifyContent='center' spacing={1} sx={{ color: 'white', marginY: '15px' }}>
            <DataUsageIcon sx={{ fontSize: '50px', border: '1px solid white', marginY: '15px' }} />
            <Typography variant='h6' component={'div'}>Easy Returns/Refund Policy</Typography>
            <Typography variant='body2'>Hassle-free Returns With Our Easy Returns Policy.</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack alignItems={'center'} justifyContent='center' spacing={1} sx={{ color: 'white', marginY: '15px' }}>
            <LocalAtmIcon sx={{ fontSize: '50px', border: '1px solid white', marginY: '15px' }} />
            <Typography variant='h6' component={'div'}>Multiple Payment Options</Typography>
            <Typography variant='body2'>Cash On Delivery, Visa/MasterCard Cards & Esewa Payments Accepted.</Typography>
          </Stack>
        </Grid>
      </Grid>
    </BoxContainer>
  )
}