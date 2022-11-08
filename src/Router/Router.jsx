import {Routes, Route} from "react-router-dom";
import { Typography } from "@mui/material";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Typography>Hello World</Typography>} />
            <Route path="/shop" element={<Typography>Hello Universe</Typography>} />
        </Routes>
    );
}

export default Router