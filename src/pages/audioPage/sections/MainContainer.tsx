import { Box, Button, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import styled from 'styled-components';
import airpod from '../../../assets/audiodevice/airpod.jpg'
import earphone from '../../../assets/audiodevice/earphone.jpg'
import earphone2 from '../../../assets/audiodevice/earphone2.jpg'
import headphone from '../../../assets/audiodevice/headphone.jpg'
import pods from '../../../assets/audiodevice/pods.jpg'
import headsets from '../../../assets/audiodevice/headsets.jpg'
import BasicRating from "../../../Compoments/rating/ReactRating";
import { useContext } from "react";

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { AppContext } from "../../../Context/AppContext";

const ImgContainer = styled.img`
display:block;
width:100%;
height:350px;
object-fit:cover;
border-radius:5px;
`
const CustBox = styled(Box)`
display:flex;
flex-direction:column;
gap:20px;
`


const AudioData = [{
    img: airpod,
    name: 'Airpod',
    price: 'Rs.1000',
}, {
    img: earphone,
    name: 'Earphone',
    price: 'Rs.1000',

},
{
    img: earphone2,
    name: 'Iphone Earphone',
    price: 'Rs.1000',
},
{
    img: headphone,
    name: 'Noise cancelling Headphone',
    price: 'Rs.1000',
},
{
    img: pods,
    name: 'Noise cancelling Pods',
    price: 'Rs.1000',
},
{
    img: headsets,
    name: 'Noise cancelling headsets',
    price: 'Rs.1000',
}
]


const MainContainer = () => {
    const {addToCart,SetAddToCart} = useContext(AppContext);
    
    return (
        <CustBox >
            <TopDiv />
            <Grid container width='100%' spacing={4}  >
                {
                    AudioData.map((data) => {
                        return (
                            <Grid item xs={4} >
                                <Stack spacing={1} justifyContent='space-between' sx={{ marginBottom: '20px', width: '100%' }}>

                                    <ImgContainer src={data.img} />
                                    <Typography variant='h5'>{data.name}</Typography>
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography sx={{ fontWeight: 'bold' }}>{data.price}</Typography>
                                        <Tooltip title="More Details">
                                            <IconButton href="/audio/:name">
                                                <InfoOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                    
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <BasicRating />
                                    <Tooltip title="Add to cart">
                                            <IconButton onClick={() => SetAddToCart(
                                                addToCart + 1
                                            )} >
                                                <AddShoppingCartOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </Stack>
                            </Grid>
                        )
                    })


                }


            </Grid>
        </CustBox>
    );
}

export default MainContainer;

const TopDiv = () => {
    return (
        <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant='h6' sx={{ color: 'gray' }}>Found <Typography color='info' component={'span'} sx={{ fontSize: '30px', fontWeight: 'bold' }}>100</Typography> items on Search</Typography>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={8} >
                <Typography variant='h6'>Sort by</Typography>
                <Button variant='contained' color="error">Review</Button>
            </Stack>
        </Stack>
    )
}