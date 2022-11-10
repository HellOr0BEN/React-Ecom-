import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)`
    padding: 5px;
    overflow: auto;
    overflow-y: hidden;
    display: flex;
    gap: 10px;
    &::-webkit-scrollbar {
        width: 1em;
        height: 0.5em;
    }
    &::-webkit-scrollbar-track {
        background: #E8E8E8;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #F9D234;
    }
`;

/**
 * Note: please specify the child of this container to have a min-width
 * property to enable scroll function
 * 
 * @returns JSX.Element A scrollable container
 */
const ScrollContainer = ({children}: {children: JSX.Element}) => {

    return(
        <Container>
            {children}
        </Container>
    );
}

export default ScrollContainer;