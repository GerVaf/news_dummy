import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Path from "./routes/Path";
import ThemeBtn from "./components/ThemeBtn";

const App = () => {
  
  const [darkMode, setDarkMode] = useState(false);
  const iconToggle = () => {
    setDarkMode(!darkMode);
  };
  const ThemeCheck = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
      return;
    }
    setDarkMode(false);
  };

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      iconToggle();
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
  };

  useEffect(() => {
    ThemeCheck();
  }, []);

  return (
    <div className="bg-slate-200 font-sans">
      {/* Light/Dark Theme Btn */}
      <ThemeBtn
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        themeSwitch={themeSwitch}
      />
      <Navbar />
      <Path />
    </div>
  );
};

export default App;
