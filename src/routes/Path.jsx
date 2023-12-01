import React from "react";
import { Route, Routes } from "react-router-dom";
// import News from "../pages/News";
import Home from "../pages/Home";
import Music from "../pages/Music";
import Sport from "../pages/Sport";
import Detail from "../pages/Detail";
import AdvertiseWithUs from "../components/AdvertiseWithUs";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/news" element={<News />} /> */}
      <Route path="/music" element={<Music />} />
      <Route path="/sports" element={<Sport />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/advertiseWithUs" element={<AdvertiseWithUs/>}/>
    </Routes>
  );
};

export default Path;
