import {Routes, Route} from "react-router-dom";
import { Typography } from "@mui/material";
import LandingPage from "../pages/landingPage/LandingPage";
import AudioPage from "../pages/audioPage/AudioPage";
import AudioItem from "../pages/audioItemPage/AudioItem";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/audio" element={<AudioPage/>} />
            <Route path="/shop" element={<Typography>Hello Universe</Typography>} />
            <Route path="/audio/:name" element={<AudioItem />}/>
        </Routes>
    );
}

export default Router