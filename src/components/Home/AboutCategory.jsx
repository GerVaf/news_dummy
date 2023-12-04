import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";

const AboutCategory = ({ category, children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 bg-gradient-to-r from-orange-700 to-pink-700 p-5 relative">
      {children}
      {/* Left */}
      <div className="col-span-12 xl:col-span-9 xl:h-full text-white  flex flex-col gap-5">
        <h1 className="text-4xl font-bold uppercase">{category.title} Focused</h1>
        <p className="">{category.text}</p>
      </div>
      {/* Right */}
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          arrows: false,
        }}
        aria-label="My Favorite Images"
        className="col-span-12 xl:col-span-3"
      >
        <SplideSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1700170363213-add0962221c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="Image 1"
            className="w-full h-full"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1682695795557-17447f921f79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
            alt="Image 2"
            className="w-full h-full"
          />
        </SplideSlide>
      </Splide>
      
    </div>
  );
};

export default AboutCategory;
