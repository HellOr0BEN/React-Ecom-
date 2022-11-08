import {useState} from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import styled from "styled-components";
//Mui icon
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
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


const TopFooter = () => {
    return(
        <Grid container sx={{width: "100%", margin: "0px", padding: "0px", height: "200px"}}>
            <ImageBox image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?fit=2000%2C1125&ssl=1"/>
            <ImageBox image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?fit=2000%2C1125&ssl=1"/>
            <ImageBox image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?fit=2000%2C1125&ssl=1"/>
            <ImageBox image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?fit=2000%2C1125&ssl=1"/>
            <ImageBox image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?fit=2000%2C1125&ssl=1"/>
            <ImageBox image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?fit=2000%2C1125&ssl=1"/>
        </Grid>
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
        <Grid item xs={2} sx={{position: "relative"}} onMouseOver={handleOnHover} onMouseLeave={handleRemoveHover}>
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
        </Grid>
    )
}

export default TopFooter;