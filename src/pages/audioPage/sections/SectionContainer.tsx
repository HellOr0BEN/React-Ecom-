import { Stack } from "@mui/material";

const SectionContainer = ({children}: {children: JSX.Element}) => {
    return(
        <Stack direction="row" sx={{padding: "80px 30px", background: "#f5f6f7"}}>
            {children}
        </Stack>
    )
}

export default SectionContainer;