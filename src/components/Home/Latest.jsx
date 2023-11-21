import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "@splidejs/react-splide/css";
const Latest = () => {
  return (
    <div className="grid grid-cols-12 gap-5 my-20">
      {/* Left */}
      <div className="col-span-12 xl:col-span-6 xl:h-full text-white  flex flex-col gap-5">
        <h1 className="text-6xl font-bold">Sport Focused</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          tempora, quas sapiente tempore ipsa quae veritatis debitis at!
          Repudiandae quisquam modi vel, dolores atque illum aliquid ut
          voluptatem sed quod?
        </p>
      </div>
      {/* Right */}
      <Splide
        options={{ type: "fade", rewind: true, autoplay: true }}
        aria-label="My Favorite Images"
        
        className="col-span-12 xl:col-span-6"
      >
        <SplideSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1700170363213-add0962221c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="Image 1"
            className="w-full h-full"
          />
        </SplideSlide>
        <SplideSlide >
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

export default Latest;
