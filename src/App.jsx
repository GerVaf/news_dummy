import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Path from "./routes/Path";
import ThemeBtn from "./components/ThemeBtn";
import Loading from "./utils/Loading";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const loadingVarient = {
  aniamte: {
    opacity: 1,
  },
  initial: {
    opacity: 0,
  },
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
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

  const location = useLocation();
  const isDashboard = location?.pathname?.includes("dashboard");

  // useEffect(() => {
  //   ThemeCheck();
  //   setTimeout(() => setLoading(false), 3000);
  // }, []);

  // if (loading) {
  //   return <Loading state={loading} />;
  // }
  return (
    <div className='font-sans'>
      {/* Light/Dark Theme Btn */}
      <ThemeBtn
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        themeSwitch={themeSwitch}
      />
      {!isDashboard && <Navbar />}
      <Path />
    </div>
  );
};

export default App;
