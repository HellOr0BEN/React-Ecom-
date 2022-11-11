
import styled from 'styled-components';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import image1 from '../../assets/location/image1.jpg'
import image2 from '../../assets/location/image2.jpg'
import image3 from '../../assets/location/image3.jpg'


const CustBox = styled(Box)`
width:100%;
background-color:black;
color:white;
display:flex;
flex-direction:column;
align-items:center;
padding:100px 10px;
gap:20px;
`
const CustImage = styled.img`
display:block;
width:450px;
height:500px;
object-fit:cover;
`




const MockData = [{
  'image': image1,
  'primeLocation': 'Pulchowk, Lalitpur',
  'address': 'Labim Mall, 26B, Lower Ground Floor',
}, {
  'image': image2,
  'primeLocation': 'Thamel, Kathmandu',
  'address': 'Chhaya Center,  Shop no 174 & 175, Ground Floor',

}, {
  'image': image3,
  'primeLocation': 'New Baneshwor, Kathmandu',
  'address': 'EyePlex Mall,  Shop No G20, Ground Floor',
}]

const Location = () => {
  return (
    <CustBox>
      <Typography variant='body1' component={'div'}>LOCATION</Typography>
      <Typography variant='h4'>Our Flagship Stores</Typography>
      <Grid container>
        {
          MockData.map((item) => {
            return (
              <Grid item xs={4}>
                <Stack alignItems={'center'} justifyContent={'center'} spacing={2}>
                  <CustImage src={item.image}/>
                  <Typography variant='h5' component={'div'}>{item.primeLocation}</Typography>
                  <Typography sx={{color:'rgb(61,61,61)',fontSize:'1.1rem'}}>{item.address}</Typography>
                </Stack>
              </Grid>
             
                  
            )
          })
        }

      </Grid>

    </CustBox>
  )
}

export default Location