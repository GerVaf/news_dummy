import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Music from "../pages/Music";
import Sport from "../pages/Sport";
import Detail from "../pages/Detail";
import AdvertiseWithUs from "../components/Advertise/AdvertiseWithUs";
import Business from "../pages/Business";
import AboutUs from "../pages/AboutUs";
import WhyAdvertiseWithUs from "../components/WhyAdvertiseWithUs";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/music" element={<Music />} />
      <Route path="/sport" element={<Sport />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/business" element={<Business />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/whyAdvertise" element={<WhyAdvertiseWithUs />} />
      <Route path="/advertiseWithUs" element={<AdvertiseWithUs />} />
    </Routes>
  );
};

export default Path;
