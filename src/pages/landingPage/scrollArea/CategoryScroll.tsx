import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";
import ScrollContainer from "../../../Compoments/Scroller/ScrollController";

//Using Images
import earbudPic from "../../../assets/categoryImg/earbuds.jpg";
import powerbankPic from "../../../assets/categoryImg/powerbank.jpg";
import speakerPic from "../../../assets/categoryImg/speaker.jpg";
import phoneCasePic from "../../../assets/categoryImg/phoneCase.jpg";
import chargerPic from "../../../assets/categoryImg/charger.jpg";
import keyboardPic from "../../../assets/categoryImg/keyboard.jpg";
import { useState } from "react";
//Using Images

const categories = [
    {
        name: "Wireless Earbuds",
        image: earbudPic
    },
    {
        name: "Powerbank",
        image: powerbankPic
    },
    {
        name: "Wireless Speakers",
        image: speakerPic
    },
    {
        name: "Phone Case",
        image: phoneCasePic
    },
    {
        name: "Chargers",
        image: chargerPic
    },
    {
        name: "Keyboard",
        image: keyboardPic
    }
]

const CategorySkeleton = styled(Box)`
    display: flex;
    padding: 50px;
    align-items: end;
    min-width: 400px;
    height: 300px;
    background: ${(props:any) => `url(${props.image})`};
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    transition: all 200ms;
    filter: ${(props: any) => props.hover? "brightness(70%)": "brightness(100%)"};
`;
const CustBtn = styled(Button)`
    background: white !important;
    color: black !important;
    padding: 5px 20px !important;
`;
const CustBox = styled(Box)`
    transform: ${(props: any) => props.hover? "scale(1.1)": "scale(1)"};
    transition: all 200ms;
`;
// background: ${(props:any) => `url(${props.image})`};

const CategoryScroll = (): JSX.Element => {
    return (
        <ScrollContainer>
            <>
                {
                    categories.map((item: any, index: number) => (
                        <Category name={item.name} image={item.image} key={index} />
                    ))
                }
            </>
        </ScrollContainer>
    );
}

const Category = ({name, image}: {name: string, image: any}): JSX.Element  => {
    const [hover, setHover] = useState(false);
    const handelHover = () => {
        setHover(true);
    }
    const removeHover = () => {
        setHover(false);
    }
    return(
        <CategorySkeleton image={image} onMouseOver={handelHover} onMouseLeave={removeHover} hover={hover}>
            <CustBox hover={hover}>
                <Typography sx={{fontSize: "1.5rem", fontWeight: "700", color: "white"}} mb={1}>{name}</Typography>
                <CustBtn>Shop Now</CustBtn>
            </CustBox>
        </CategorySkeleton>
    );
}

export default CategoryScroll;