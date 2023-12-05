import React from "react";
import Foot from "../components/Foot";
import Hero from "../components/Home/Hero";
import AboutUs from "../components/Home/AboutUs";
import Navbar2 from "../components/Navbar2";
import AdvertiseFooter from "../components/Advertise/AdvertiseFooter";
import AdvertiseWithUs from "../components/Advertise/AdvertiseWithUs";
import Shop from "../components/Home/Shop";
import Radio from "../components/Home/Radio";
import Advertise from "../components/Advertise/Advertise";
import AccordionBox from "../components/AccordionBox";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar2 />
      <Hero />
      <div
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgb(255,255,255) 0px, rgb(255,255,255) 10px,transparent 10px, transparent 11px),repeating-linear-gradient(135deg, rgb(255,255,255) 0px, rgb(255,255,255) 10px,transparent 10px, transparent 11px),linear-gradient(90deg, hsl(256,7%,84%),hsl(256,7%,84%))`,
        }}
      >
        <AboutUs />
        <Shop />
        <AdvertiseFooter />
        <Advertise />
      </div>
      <AdvertiseWithUs />
      <Foot />
    </div>
  );
};

export default Home;
