import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import ScrollContainer from "./ScrollController";

const Container = styled(Box)`
    padding: 100px 30px;
    background: #E8ECF0;
`

const BiggerScroll = ({children, title}: {children: JSX.Element, title: string}) => {
    return(
        <Container>
            <TitleSection title={title}/>
            <ScrollContainer>
                {children}
            </ScrollContainer>
        </Container>
    )
}

const TitleSection = ({title}: {title: string}) => {
    return(
        <Box mb={4}>
            <Typography sx={{fontSize: "1.8rem", fontWeight: "700"}} mb={2}>{title}</Typography>
            <Box sx={{background: "#F9D234", width: "150px", height: "5px"}}></Box>
        </Box>
    );
} 

export default BiggerScroll;