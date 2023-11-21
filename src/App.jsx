import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Path from "./routes/Path";

const App = () => {
  return (
    <div className="bg-[#0f0f0f]">
      <Navbar />
      <div className="max-w-[1300px] mx-auto">
        <Path />
      </div>
    </div>
  );
};

export default App;
