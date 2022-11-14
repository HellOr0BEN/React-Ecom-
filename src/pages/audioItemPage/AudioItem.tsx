import { Box, Grid } from "@mui/material";
import ImageList from "./ImageList";
import InformationSection from "./InformationSection";

const AudioItem = () => {
    return(
        <Box sx={{padding: "50px 20px"}}>
            {/*Top Section*/}
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <ImageList/>
                </Grid>
                <Grid item xs={6}>
                    <InformationSection />
                </Grid>
            </Grid>
            {/*Top Section*/}
        </Box>
    )
}
export default AudioItem;