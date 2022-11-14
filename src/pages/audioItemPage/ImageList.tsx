import {useState, useMemo} from "react";
import { Grid, Stack, Box } from "@mui/material";
import styled from "styled-components";
//MUI Icon
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
//MUI Icon
//Images used
import redHeadphone from "../../assets/headphoneImg/redHeadphone.png";
import blueHeadphone from "../../assets/headphoneImg/blueHeadphone.png";
import goldHeadphone from "../../assets/headphoneImg/goldHeadphone.png";
//Images used

//Prop type
type SmallImageSectionPropType = {
    imageList: Array<{id: number, image: any}>,
    currentImg: number,
    setCurrentImg: (value: any) => void
}
type BiggerImageSectionPropType = SmallImageSectionPropType;
//Prop type

//Styled Component
const CustImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    opacity: ${(props: any) => props.selected? "1": "0.3"};
    object-fit: cover;
    border-radius: 5px;
    curser: pointer;
    &:hover{
        opacity: ${(props: any) => props.selected? "1": "0.8"};
    }
`;
const ChangeImgBtn = styled(Box)`
    position: absolute;
    height: 40px; width: 40px;
    display: flex;
    justify-content:center;
    align-items: center;
    background: rgba(0,0,0,0);
    border-radius: 50%;
    color: rgba(255,255,255,0.4);
    cursor: pointer;
    &:hover{
        color: rgba(255,255,255,1);
        background: rgba(100,100,100,0.1);
    }
`;
const ChangeImgBtnLeft = styled(ChangeImgBtn)`
    top: 50%; left: 0px;
    transform: translate(0%, -50%);
`;
const ChangeImgBtnRight = styled(ChangeImgBtn)`
    top: 50%; right: 0px;
    transform: translate(0%, -50%);
`;
//Styled Component


const ImageList = () => {
    const [currentImg, setCurrentImg] = useState(1); 
    const imageList = [{id: 1, image: redHeadphone}, {id: 2, image: blueHeadphone}, {id: 3, image: goldHeadphone}];
    return(
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <SmallImageSection imageList={imageList} currentImg={currentImg} setCurrentImg={setCurrentImg}/>
            </Grid>
            <Grid item xs={10}>
                <BiggerImageSection imageList={imageList} currentImg={currentImg} setCurrentImg={setCurrentImg}/>
            </Grid>
        </Grid>
    );
}

const SmallImageSection = ({imageList, currentImg, setCurrentImg}: SmallImageSectionPropType) => {
    return(
        <Stack spacing={2}>
            {
                imageList.map((item) => (
                    <Box sx={{width: "100px", height: "100px"}}>
                       <CustImg 
                            key={item.id} onClick={() => setCurrentImg(item.id)} 
                            src={item.image} alt="hello" 
                            selected={item.id === currentImg}
                        /> 
                    </Box>
                    
                ))
            }
        </Stack>
    )
}

const BiggerImageSection = ({imageList, currentImg, setCurrentImg}:BiggerImageSectionPropType) => {
    const getImage = useMemo(() => imageList.filter((image) => image.id === currentImg)[0].image, [imageList, currentImg]);
    const handleNavigate = (direction: string) => {
        switch(direction){
            case "right":
                if(currentImg < 3){
                    setCurrentImg(currentImg + 1);
                } else{
                    setCurrentImg(1)
                }
                break;
            default:
                if(currentImg === 1){
                    setCurrentImg(3);
                } else {
                    setCurrentImg(currentImg - 1);
                }
        }
    }
    return(
        <Box sx={{position: "relative", height: "600px"}}>
            <CustImg
                src={getImage}
                alt="hello"
                selected={true}
            />
            <ChangeImgBtnLeft onClick={() => handleNavigate("left")}>
                <ChevronLeftIcon/>
            </ChangeImgBtnLeft>
            <ChangeImgBtnRight onClick={() => handleNavigate("right")}>
                <ChevronRightIcon/>
            </ChangeImgBtnRight>
        </Box>
    )
}

export default ImageList;