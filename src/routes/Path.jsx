import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Music from "../pages/Music";
import Sport from "../pages/Sport";
import Detail from "../pages/Detail";
import AdvertiseWithUs from "../components/Advertise/AdvertiseWithUs";
import Business from "../pages/Business";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/music" element={<Music />} />
      <Route path="/sports" element={<Sport />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/business" element={<Business />} />
      <Route path="/advertiseWithUs" element={<AdvertiseWithUs/>}/>
    </Routes>
  );
};

export default Path;
