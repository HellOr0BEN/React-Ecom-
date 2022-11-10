import { Stack } from "@mui/material";

const SectionContainer = ({children}: {children: JSX.Element}) => {
    return(
        <Stack direction="row" sx={{padding: "80px 30px", background: "#13141A"}}>
            {children}
        </Stack>
    )
}

export default SectionContainer;