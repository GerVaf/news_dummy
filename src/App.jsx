import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Path from "./routes/Path";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="bg-slate-200 font-sans">
      <Navbar />
      <Path />
    </div>
  );
};

export default App;
