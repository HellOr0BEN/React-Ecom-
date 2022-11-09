import {useState, useRef} from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import styled from "styled-components";
//Mui icon
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//Mui icon

const TextOverlay = styled(Box)`
    display: ${(props: any) => props.display? "flex": "none"};
    flex-direction: column;
    gap: 20px;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.8);
    color: white;
    cursor: pointer;
    padding: 30px;

`;
const GridContainer = styled(Stack)`
    width: 100%;
    margin: 0px;
    padding: 0px;
    height: 200px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    transition: all 400ms;
    &::-webkit-scrollbar{
        display: none;
    }
`;
const CustomButton = styled(Button)`
    position: absolute !important;
    top: 0px !important;
    transform: translate(0, 50%) !important;
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 50px !important; height: 100px !important;
    background: rgba(0,0,0,0.7) !important;
    border-radius: 0px !important;
    color: rgba(255,255,255, 0.7) !important;
    &:hover {
        background: rgb(255,255,255) !important;
        color: rgb(0,0,0) !important;
    }
`;
const LeftBtn = styled(CustomButton)`
    left: 0px;
    border-top-right-radius: 50px !important;
    border-bottom-right-radius: 50px !important;
`;
const RightBtn = styled(CustomButton)`
    right: 0px;
    border-top-left-radius: 50px !important;
    border-bottom-left-radius: 50px !important;
`;


const TopFooter = () => {
    const containerElem = useRef<any>();

    const handleScrollLeft = async () => {
        for(let i=0; i<100; i++){
            let timeout = 7*i;
            setTimeout(() => {
                containerElem.current.scrollBy(-12, 0)
            }, timeout);
        }
        
    }
    const handleScrollRight = async() => {
        for(let i=0; i<100; i++){
            let timeout = 7*i;
            setTimeout(() => {
                containerElem.current.scrollBy(12, 0)
            }, timeout);
        }
    }
    
    return(
        <Box sx={{position: "relative"}}>
            <GridContainer direction="row" ref={containerElem} id="he">
                <ImageBox image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?fit=2000%2C1125&ssl=1"/>
                <ImageBox image="https://i.pcmag.com/imagery/reviews/045TJmP8CVMXUwBN5ayR68W-1..v1655402303.jpg"/>
                <ImageBox image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?fit=2000%2C1125&ssl=1"/>
                <ImageBox image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?fit=2000%2C1125&ssl=1"/>
                <ImageBox image="https://i.pcmag.com/imagery/reviews/045TJmP8CVMXUwBN5ayR68W-1..v1655402303.jpg"/>
                <ImageBox image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?fit=2000%2C1125&ssl=1"/>
                <ImageBox image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?fit=2000%2C1125&ssl=1"/>
                <ImageBox image="https://i.pcmag.com/imagery/reviews/045TJmP8CVMXUwBN5ayR68W-1..v1655402303.jpg"/>
                <ImageBox image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?fit=2000%2C1125&ssl=1"/>
            </GridContainer>
            <LeftBtn onClick={handleScrollLeft}>
                <ArrowBackIosIcon/>
            </LeftBtn>
            <RightBtn onClick={handleScrollRight}>
                <ArrowForwardIosIcon/>
            </RightBtn>
        </Box>
    )
}

const ImageBox = ({image}: {image: string}) => {
    const [display, setDisplay] = useState(false);

    const handleOnHover = () => {
        setDisplay(true)
    }
    const handleRemoveHover = () => {
        setDisplay(false);
    }
    return(
        <Box sx={{position: "relative", minWidth: "300px"}} onMouseOver={handleOnHover} onMouseLeave={handleRemoveHover}>
            <Box sx={{position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%"}}>
                <img src={image} alt="profile" style={{objectFit: "cover", display: "block", width: "100%", height: "100%"}}/>
            </Box>
            {/* Text Overlay */}
            <TextOverlay 
                display={display} 
                sx={{position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%"}}>
                    <Stack direction="row" spacing={4}>
                        <Typography sx={{display: "flex", gap: "10px"}}>
                            <FavoriteBorderOutlinedIcon/>
                            <Typography>101</Typography>
                        </Typography>
                        <Typography sx={{display: "flex", gap: "10px"}}>
                            <ModeCommentOutlinedIcon/>
                            <Typography>5</Typography>
                        </Typography>
                    </Stack>
                    
                    <Typography>
                        In publishing and graphic design, Lorem ipsu commonly used to demo nstrate the visua
                    </Typography>
            </TextOverlay>
            {/* Text Overlat */}
        </Box>
    )
}

export default TopFooter;