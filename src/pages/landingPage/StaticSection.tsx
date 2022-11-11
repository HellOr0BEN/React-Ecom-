import React from 'react'

import image5 from '../../assets/image5.jpg';

import styled from 'styled-components';
import { Box, Link, Typography } from '@mui/material';


const CustBox = styled(Box)`
margin-top:10px;
margin-bottom:10px;
width:100%;
background-image:url(${image5});
background-color:black;
background-size:cover;
background-repeat:no-repeat;
height:700px;
display:flex;
flex-direction:column;
color:white;
align-items:center;

`


const StaticSection:any = () => {
  return (
    <CustBox>
        <Typography mt={15} variant='h2' component={'div'}>Make Productivity Portable</Typography>
        <Typography variant='h5' component={'div'}>Enjoy Every Services We Provide</Typography>
        <Link href='#' underline='none' sx={{border:'1px solid white',color:'white',fontSize:'20px',marginTop:'50px',padding:'10px',borderRadius:'5px','&:hover':{backgroundColor:'gray'}}}>Learn More</Link>
       
    </CustBox>
    
  )
}

export default StaticSection