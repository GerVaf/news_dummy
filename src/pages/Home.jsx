import React from "react";
import Foot from "../components/Foot";
import Hero from "../components/Home/Hero";
import Navbar2 from "../components/Navbar2";
import AdvertiseWithUs from "../components/Advertise/AdvertiseWithUs";
import Shop from "../components/Home/Shop";
import Advertise from "../components/Advertise/Advertise";
import Genre from "../components/Home/Genre";
import WhoWeAre from "../components/Home/WhoWeAre";

const Home = () => {
  return (
    <div className="select-none bg-black">
      <Navbar2 />
      <Hero />
      <Genre />
      <Shop />
      <WhoWeAre />
      <Advertise />
      <AdvertiseWithUs />
      <Foot />
    </div>
  );
};

export default Home;
