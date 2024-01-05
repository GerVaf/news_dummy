import React from "react";
import Content from "../components/Music/Content";
import MusicSportFooter from "../components/Music/MusicSportFooter";
import Navbar2 from "../components/Navbar2";
import News from "../components/News";

const Sport = () => {
  return (
    <>
      <Navbar2 />
      <div className="flex flex-col gap-5">
        <Content cate={"sport"} />
        <div className="border-y-2 border-slate-900 py-5 text-center">
          <h1 className="text-3xl lg:text-9xl font-bold">OUR PARTNERS</h1>
        </div>
        <News category={'sport'}/>
        <MusicSportFooter cate={"sport"} />
      </div>
    </>
  );
};

export default Sport;
