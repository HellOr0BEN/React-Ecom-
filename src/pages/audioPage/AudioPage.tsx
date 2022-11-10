import { Stack, Box, Typography } from "@mui/material";
import styled from "styled-components";
//Banner image
import bannerImg from "../../assets/banner/audiobanner.jpg";
import MainContainer from "./sections/MainContainer";
import SectionContainer from "./sections/SectionContainer";
import SidebarContainer from "./sections/SidebarContainer";
//Banner image

const AudioPage = () => {
    return(
        <Stack spacing={4}>
            <TopSection />
            <SectionContainer>
                <>
                    <SidebarContainer />
                    <MainContainer />
                </>
                
            </SectionContainer>
        </Stack>
    );
}

const TopSectionContainer = styled(Box)`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bannerImg});
    background-size: 100vw auto;
    background-position: 0vh -60vh;

    background-repeat: no-repeat;
`;
const TopSection = () => {
    return (
        <TopSectionContainer>
            <Box sx={{color: "black", textAlign: "center"}}>
                <Typography sx={{fontSize: "2rem", fontWeight: "700"}}>Audio</Typography>
                <Typography sx={{fontSize: "1.2rem"}}>Home</Typography>
            </Box>
        </TopSectionContainer>
    )
}

export default AudioPage;