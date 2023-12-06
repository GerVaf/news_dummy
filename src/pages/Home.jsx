import React from "react";
import Foot from "../components/Foot";
import Hero from "../components/Home/Hero";
import AboutUs from "../components/Home/AboutUs";
import Navbar2 from "../components/Navbar2";
import AdvertiseFooter from "../components/Advertise/AdvertiseFooter";
import AdvertiseWithUs from "../components/Advertise/AdvertiseWithUs";
import Shop from "../components/Home/Shop";
import Advertise from "../components/Advertise/Advertise";

const Home = () => {
  return (
    <div className="select-none bg-black ">
      <Navbar2 />
      <Hero />
      <AboutUs />
      <Shop />
      <AdvertiseFooter />
      <Advertise />
      <AdvertiseWithUs />
      <Foot />
      {/* <div className="relative mt-[28rem] md:mt-80 lg:mt-56"> */}
      {/* <ContactUs /> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
