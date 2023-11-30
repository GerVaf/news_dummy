import React from "react";
import MusicSportFooter from "../components/Music/MusicSportFooter";
import Content from "../components/Music/Content";
import ContactUs from "../components/Home/ContactUs";
import Navbar2 from "../components/Navbar2";

const Music = () => {
  return (
    <>
      <Navbar2 />
      <div className="mt-20 flex flex-col gap-5">
        <Content cate={"music"} />
        <div className="border-y-2 border-slate-900 py-5 text-center">
          <h1 className="text-3xl lg:text-9xl font-bold">OUR PARTNERS</h1>
        </div>
        <ContactUs />
        <MusicSportFooter cate={"music"} />
      </div>
    </>
  );
};

export default Music;
