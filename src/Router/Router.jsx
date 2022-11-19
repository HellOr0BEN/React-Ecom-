import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landingPage/LandingPage";
import AudioPage from "../pages/audioPage/AudioPage";




import AudioItem from "../pages/audioItemPage/AudioItem";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/audio" element={<AudioPage/>} />
            <Route path="/energy" element={<AudioPage/>} />
            <Route path="/protection" element={<AudioPage/>} />
            <Route path="/life" element={<AudioPage/>} />
            <Route path="/sale" element={<AudioPage/>} />
            <Route path="/audio/:name" element={<AudioItem />}/>
        </Routes>
    );
}


export default Router;
