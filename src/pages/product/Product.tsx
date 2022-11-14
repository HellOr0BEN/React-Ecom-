import styled from '@emotion/styled'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Image from "../../assets/image3.jpg"
import productimg1 from "../../assets/productimage/img1.jpg"
import productimg2 from "../../assets/productimage/img2.jpg"
import productimg3 from "../../assets/productimage/img3.jpg"
import Image2 from "../../assets/earphones.jpg"
import Image3 from "../../assets/lady.jpg"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const BoxContainer = styled(Box)`
width:100%;
background-color:black;
padding-top: 20px;
padding-bottom: 50px;
color:white;   
gap:150px; 
display:flex;
flex-direction:column;

`
const CustomAccordion = styled(Accordion)`
background-color:black;
color:white;    
border-bottom:1px solid white;
`
const GridComp1 = styled(Grid)`
margin:0;
padding:0; 
height:90vh;
background-size:cover;
position:relative;


`


export default function Product() {



    return (
        <BoxContainer>
            <ProductDetail1 />
            <ProductDetail2 />
            <ProductDetail3 />
            <TechSpecs />
        </BoxContainer >
    )
}

export const ProductDetail2 = () => {
    return (

        <Grid container padding={"40px"} display="flex" flexDirection={"row"} alignItems="center" >
            <Grid item xs={4}  >
                <img src={productimg1} width="90%" alt="img1"></img>
            </Grid>
            <Grid item xs={4} >
                <img src={productimg2} width="90%" alt="img1"></img>
                {/* <GridComp1 sx={{ backgroundImage: `url(${productimg2})` }} /> */}
            </Grid>
            <Grid item xs={4} >
                <img src={productimg3} width="90%" alt="img1"></img>
                {/* <GridComp1 sx={{ backgroundImage: `url(${productimg3})` }} /> */}
            </Grid>
        </Grid>

    )
}


export const ProductDetail3 = () => {
    return (
        <Box display={"flex"} flexDirection="column" gap={"140px"}>
            <Box sx={{ paddingX: "40px" }} >
                <Typography component="h1" variant="h3" fontWeight={"700"} color={"white"} marginBottom="20px">Memory Neckband & Magnetic Earbuds For ReMax Comfort</Typography>
                <Typography color={"grey"}>The elegantly designed RB-S29 has a neckband that adjusts to your best fit and remembers it to give you the best comfort. The magnetic earbuds also stick together so the earphones do not fall easily. </Typography>
            </Box>

            <Grid container >
                <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingX: "60px", gap: "30px" }}>
                    <Typography component="h1" variant="h3" fontWeight={"700"} color={"white"}>Charge Less, Enjoy More</Typography>
                    <Typography color={"grey"}>With just a 2 hour charging time, the RB-S29 lass up to 9 hours on playback and has a standby time of 130 hours.</Typography>

                </Grid>
                <Grid item xs={6} bgcolor="red" >
                    <GridComp1 sx={{ backgroundImage: `url(${Image3})` }} />
                </Grid>
            </Grid>
        </Box>

    )
}

export const ProductDetail1 = () => {
    return (
        <Grid container sx={{ paddingX: "40px" }}>
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingX: "60px", gap: "30px" }}>
                <Typography component="h1" variant="h3" fontWeight={"700"} color={"white"}>Magnetic Earbuds, Captivating Sound</Typography>
                <Typography color={"grey"}>RemaxNepal Bluetooth Earphone RB-S29</Typography>

            </Grid>
            <Grid item xs={6} bgcolor="red" >
                <GridComp1 sx={{ backgroundImage: `url(${Image2})` }} />
            </Grid>
        </Grid>

    )
}



export const TechSpecs = () => {
    return (
        <Grid container sx={{ paddingX: "40px" }}>
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingX: "60px", gap: "30px" }}>
                <Typography component="h1" variant="h3" fontWeight={"700"} color={"white"}>Tech Specs</Typography>
                <CustomAccordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ background: "black", color: "white" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ background: "black", color: "white" }}
                    >
                        <Typography>Audio Specs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>    Model No: RB-S29</Typography>
                        <Typography> Input: DC 5V-500mA</Typography>
                        <Typography>Rated Power: 3mW</Typography>
                        <Typography>Driver Unit: 10 mm</Typography>
                        <Typography> Driver impedance: 16 ohm</Typography>
                        <Typography>Type: Bluetooth Earphone</Typography>
                        <Typography> Frequency Response: 20Hz~ 20kHz</Typography>
                    </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ background: "black", color: "white" }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Connectivity & Controls</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>    Model No: RB-S29</Typography>
                        <Typography> Input: DC 5V-500mA</Typography>
                        <Typography>Rated Power: 3mW</Typography>
                        <Typography>Driver Unit: 10 mm</Typography>
                        <Typography> Driver impedance: 16 ohm</Typography>
                        <Typography>Type: Bluetooth Earphone</Typography>
                        <Typography> Frequency Response: 20Hz~ 20kHz</Typography>
                    </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ background: "black", color: "white" }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Battery</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>     Battery Capacity: 105 mAh</Typography>
                        <Typography> Standby Time: 130hrs</Typography>
                        <Typography>Playing Time: 9 hrs</Typography>
                        <Typography>Charging Time: 2 hrs</Typography>

                    </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ background: "black", color: "white" }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>What's Included</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>     Sports Bluetooth Earphone RB-S29</Typography>
                        <Typography>  Charging Cable</Typography>
                        <Typography> Extra Earcups</Typography>
                        <Typography>  User Manual</Typography>

                    </AccordionDetails>
                </CustomAccordion>

            </Grid>
            <Grid item xs={6} bgcolor="red">
                <GridComp1 sx={{ backgroundImage: `url(${Image})` }} /></Grid>


        </Grid>
    )
}