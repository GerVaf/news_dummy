import React from "react";
import Foot from "../components/Foot";
import Hero from "../components/Home/Hero";
import Trending from "../components/Home/Trending";
import Latest from "../components/Home/Latest";
import ContactUs from "../components/Home/ContactUs";
import AboutUs from "../components/Home/AboutUs";
import Navbar2 from "../components/Navbar2";
import AdvertiseFooter from "../components/Advertise/AdvertiseFooter";

const Home = () => {
  return (
    <div>
      <Navbar2 />
      <Hero />
      <div className="flex flex-col md:flex-row gap-5 md:gap-3 px-3 my-20">
        <Trending />
        <Latest />
      </div>
      <AboutUs />
      <ContactUs />
      <AdvertiseFooter/>
      <Foot />
    </div>
  );
};

export default Home;
