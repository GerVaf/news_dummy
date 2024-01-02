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
      <div className="bg-bgColor h-[350px] my-5 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1701198067976-3c2b6bf5f5c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
          alt=""
          className=""
        />
      </div>
      <AdvertiseWithUs />
      <Foot />
    </div>
  );
};

export default Home;
