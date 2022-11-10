
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';


import styled from 'styled-components'



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


`
const GridComp2 = styled(Grid)`
margin:0;
padding:0; 
height:70vh;
background-image:url(${image2});
background-size:cover;

`

const LandingPage = () => {
  return (
    <>
      <BoxContainer>
        <Grid container >
          <GridComp1 item xs={6}>

            <Stack sx={{ color: 'white' }} alignItems={'center'} justifyContent={'center'} gap={2} >
              <Typography>Gadgets Craze</Typography>
              <Button variant={'outlined'} sx={{ color: 'white', borderRadius: '5px', border: '1px solid white' }}>SHOP</Button>
            </Stack>



          </GridComp1>
          <GridComp2 item xs={6}>
            <Stack sx={{ color: 'white' }} alignItems='center' justifyContent={'center'} gap={2} >
              <Typography>Gadgets Craze</Typography>
              <Button variant={'outlined'} sx={{ color: 'white', borderRadius: '5px', border: '1px solid white' }}>SHOP</Button>
            </Stack>

          </GridComp2>


        </Grid>
      </BoxContainer>
      <Box>
        Hello
      </Box>
    </>

  )
}

export default LandingPage