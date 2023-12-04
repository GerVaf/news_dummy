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
      <AboutUs />
      <Radio/>
      <Advertise />
      <Shop />
      <AdvertiseFooter />
      <AccordionBox/>
      <AdvertiseWithUs />
      <Foot />
    </div>
  );
};

export default Home;
