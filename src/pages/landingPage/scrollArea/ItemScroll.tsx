import { Box, Stack, Typography } from "@mui/material";
import BiggerScroll from "../../../Compoments/Scroller/BiggerScroll";
import styled from "styled-components";
import Stars from "../../../Compoments/rating/Stars";

//Importing images
import earbudPic from "../../../assets/categoryImg/earbuds.jpg";
import phoneCasePic from "../../../assets/categoryImg/phoneCase.jpg";
//Importing images

const ImageContainer = styled(Box)`
    width: 400px;
    height: 400px;
    background-image: ${(props: any) => `url(${props.images[0]})`};
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 200ms;
    &:hover {
        background-image: ${(props: any) => `url(${props.images[1]})`};
    }
`;

const ItemScroll = ({title}: {title: string}) => {
    return(
        <BiggerScroll title={title}>
            <>
                <Item
                    images={[
                        earbudPic,
                        phoneCasePic
                    ]}
                    title="The most amazing performance laptop"
                    rating="4"
                    price="110,234"
                />
                <Item
                    images={[
                        earbudPic,
                        phoneCasePic
                    ]}
                    title="The most amazing performance laptop"
                    rating="4"
                    price="110,234"
                />
                <Item
                    images={[
                        earbudPic,
                        phoneCasePic
                    ]}
                    title="The most amazing performance laptop"
                    rating="4"
                    price="110,234"
                />
                <Item
                    images={[
                        earbudPic,
                        phoneCasePic
                    ]}
                    title="The most amazing performance laptop"
                    rating="4"
                    price="110,234"
                />
                <Item
                    images={[
                        earbudPic,
                        phoneCasePic
                    ]}
                    title="The most amazing performance laptop"
                    rating="4"
                    price="110,234"
                />
                <Item
                    images={[
                        earbudPic,
                        phoneCasePic
                    ]}
                    title="The most amazing performance laptop"
                    rating="4"
                    price="110,234"
                />
                <Item
                    images={[
                        earbudPic,
                        phoneCasePic
                    ]}
                    title="The most amazing performance laptop"
                    rating="4"
                    price="110,234"
                />
            </>
        </BiggerScroll>
    );
}

const Item = ({images, title, rating, price}: {images: any, title: string, rating: string, price: string}) => {
    return(
        <Box sx={{paddingBottom: "20px"}}>
            <ImageContainer images={images}></ImageContainer>
            <Stack mt={4} spacing={2}>
                <Typography sx={{fontSize: "1.1rem", '&:hover': {color: "gold"}}}>{title}</Typography>
                <Stack direction="row" spacing={4}>
                    <Stars rating={rating} />
                </Stack>
                <Typography>{price}</Typography>
            </Stack>
        </Box>
    )    
}

export default ItemScroll;