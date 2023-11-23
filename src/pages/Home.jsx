import React from "react";
import Text from "../components/Text";
import Foot from "../components/Foot";
import Hero from "../components/Home/Hero";
import Trending from "../components/Home/Trending";
import Latest from "../components/Home/Latest";
import ContactUs from "../components/Home/ContactUs";
import ReadyToMake from "../components/Home/ReadyToMake";
import AboutUs from "../components/Home/AboutUs";

const Home = () => {
  return (
    <div>
      {/* <Text/> */}
      <Hero />
      <div className="max-w-[1000px] mx-auto px-3">
        <Trending />
        <Latest />
        <AboutUs/>
        <ContactUs />
      </div>
      <Foot />
    </div>
  );
};

export default Home;
