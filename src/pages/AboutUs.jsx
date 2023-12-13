import React from "react";
import MusicSportFooter from "../components/Music/MusicSportFooter";

const AboutUs = () => {
  return (
    <div className="bg-black min-h-screen text-white p-5 leading-7 lg:p-0 lg:pt-10 flex flex-col gap-10">
      <h1 className="text-2xl font-bold text-white text-center">About Us</h1>
      <p className="w-full md:w-[80%] mx-auto text-center mb-10">
      <span className="text-2xl font-bold">INDX.NEWS </span> is
      a media publisher, providing display advertising with content marketing &
      digital promotions. Established for Music & Sports Worlds, providing a
      fair and transparent environment for both creators and readers alike.
      Through data-driven insights and innovative marketing strategies, we offer
      various opportunities for aspiring writers, artists, photographers, and
      other creatives to showcase their work through our platforms. By providing
      them with exposure and support, we hope to contribute towards building a
      sustainable economy for creators in BURMA. Innovation & Integrity is at
      the heart of everything we do at
      <span className="text-2xl font-bold"> INDX</span>.
      </p>
      <div className="flex flex-col items-center gap-20 text-white px-5 lg:p-0">
        {/* Mission */}
        <div className="w-full lg:w-1/2 text-center">
          <h1 className="text-2xl font-bold">Our Mission</h1>
          <p>Our aim is to help business in music & sports.</p>
        </div>
        {/* Vision */}
        <div className="w-full lg:w-1/2 text-center">
          <h1 className="text-2xl font-bold">Our Vision</h1>
          <p>
            To become the biggest international outdoor advertising company
            across Asia Pacific Region while providing coverage in digital
            landscape.
          </p>
        </div>
      </div>
      <MusicSportFooter/>
    </div>
  );
};

export default AboutUs;
