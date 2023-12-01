import React from "react";
import Content from "../components/Music/Content";
import ContactUs from "../components/Home/ContactUs";
import MusicSportFooter from "../components/Music/MusicSportFooter";
import Navbar2 from "../components/Navbar2";

const Sport = () => {
  return (
    <>
      <Navbar2 />
      <div className="flex flex-col gap-5">
        <Content cate={"sport"} />
        <div className="border-y-2 border-slate-900 py-5 text-center">
          <h1 className="text-3xl lg:text-9xl font-bold">OUR PARTNERS</h1>
        </div>
        <ContactUs />
        <MusicSportFooter cate={"sport"} />
      </div>
    </>
  );
};

export default Sport;
