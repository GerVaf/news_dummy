import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "@splidejs/react-splide/css";
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "./custom.css";

const Center = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-slate-900 rounded text-white p-5 flex flex-col items-start gap-5">
      {/* Top */}
      <div className={`overflow-hidden transition-all border-b ${show ? 'h-[60px]' : 'h-[30px] '}`}>
        {/* DropDown */}
        <div
          onClick={() => setShow(!show)}
          className="flex justify-between items-center gap-5"
        >
          <h1 className="uppercase">International News</h1>
          <IoChevronDownOutline />
        </div>
        <h1 className="uppercase mt-2">Regional News</h1>
      </div>
      {/* SlideShow */}
      <Splide
        hasTrack={false}
        options={{
          type: "loop",
          rewind: true,
          autoplay: true,
          gap: 10,
        }}
        aria-label="My Favorite Images"
        className="h-[500px] mb-8"
      >
        <SplideTrack>
          <SplideSlide className="h-[500px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1700170363213-add0962221c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt="Image 1"
              className="h-[500px] aspect-video"
            />
          </SplideSlide>
          <SplideSlide className="h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1682695795557-17447f921f79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
              alt="Image 2"
              className="h-[500px] aspect-video"
            />
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows custom-arrows">
          <button className="splide__arrow splide__arrow--prev">
            <FaArrowCircleRight className="text-2xl" />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <FaArrowCircleRight className="text-2xl" />
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default Center;
