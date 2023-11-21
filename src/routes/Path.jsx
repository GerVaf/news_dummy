import React from "react";
import { Route, Routes } from "react-router-dom";
import News from "../pages/News";
import Home from "../pages/Home";
import Music from "../pages/Music";
import Sport from "../pages/Sport";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/music" element={<Music />} />
      <Route path="/sports" element={<Sport />} />
    </Routes>
  );
};

export default Path;
