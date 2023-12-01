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
    <div className="bg-black">
      <Navbar2 />
      <Hero />
      <div className="bg-bgColor py-10">
      <div className="max-w-[1300px] mx-auto px-3">
        <h1 className="text-5xl font-bold text-white">About Us</h1>
      </div>
      <Trending />
      </div>
      <AboutUs />
      <AdvertiseFooter />
      <ContactUs />
      <Foot />
    </div>
  );
};

export default Home;
