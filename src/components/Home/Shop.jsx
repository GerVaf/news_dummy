import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useState } from "react";
import Advertise from "../Advertise/Advertise";

const Shop = () => {
  const [show,setShow] = useState(false);

  return (
    <div>
      <div className="flex justify-center py-10 mt-10 bg-gradient-to-r from-orange-700 to-pink-700">
        <button onClick={()=>setShow(!show)} className="px-8 py-3 bg-bgColor text-white">Shop</button>
      </div>
      {/* Dropdown component */}
      <div className={`${show ? 'h-[850px]' : 'h-0 '} bg-bgColor transition-all duration-500 overflow-hidden`}>
        <h1 className="text-3xl text-white font-bold text-center py-5">Shopping Here</h1>
        <div className="grid grid-cols-12 gap-5 max-w-[1000px] mx-auto pb-5">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-slate-200 h-[350px]"></div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-slate-200 h-[350px]"></div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-slate-200 h-[350px]"></div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-slate-200 h-[350px]"></div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-slate-200 h-[350px]"></div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-slate-200 h-[350px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
