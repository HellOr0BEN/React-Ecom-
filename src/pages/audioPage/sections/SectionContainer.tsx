import { Stack } from "@mui/material";
import styled from "styled-components";

const Section = styled(Stack)`
    position: relative; padding: 80px;
    background: #EEF0F2;
`;

const SectionContainer = ({children}: {children: JSX.Element}) => {
    return(
        <Section direction="row">
            {children}
        </Section>
    )
}

export default SectionContainer;