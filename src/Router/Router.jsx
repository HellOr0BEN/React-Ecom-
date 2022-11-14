import { Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";
import LandingPage from "../pages/landingPage/LandingPage";
import AudioPage from "../pages/audioPage/AudioPage";
import Product from "../pages/product/Product";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/audio" element={<AudioPage />} />
      <Route path="/shop" element={<Product />} />
    </Routes>
  );
};

export default Router;
