import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

// for I am [writer...,value]
const IAM = ["Writer", "Reader", "Visitor"];
// for looking to [something...,value]
const LookingTo = ["Get help", "Contact", "Advertise"];

const AdvertiseWithUs = () => {
  const [showIam, setShowIam] = useState(false);
  const [selecionIam, setSelectionIam] = useState("Writer");

  const [showLooking, setShowLooking] = useState(false);
  const [selecionLooking, setSelectionLooking] = useState("get help");

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-5 p-5 my-20 text-white min-h-screen">
      {/* Big Text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-3">
        {/* <h1 className="text-6xl font-bold">Contact Us</h1> */}
        <h3 className="text-4xl lg:text-6xl font-semibold">
          Looking for something a little more custom? Let's talk.
        </h3>
      </div>
      {/* Right Part */}

      {/* Selection */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        {/* I am ... */}
        <div className="flex flex-col gap-3 w-[50%] lg:w-[30%] z-20">
          <h1 className="text-3xl font-semibold">I am</h1>
          {/* DropDown */}
          <div onClick={() => setShowIam(!showIam)} className="relative">
            <div className="flex items-center justify-between cursor-pointer">
              <h1 className="text-3xl">{selecionIam}</h1>
              <SlArrowDown />
            </div>
            <div
              onMouseLeave={() => setShowIam(false)}
              className={`top-10 absolute w-full  rounded border border-slate-100 p-3 flex flex-col gap-2 transition-opacity ${
                showIam ? "opacity-100 bg-slate-950" : "opacity-0 hidden"
              }`}
            >
              {IAM.map((item) => {
                return (
                  <h1
                    key={item}
                    onClick={() => setSelectionIam(item)}
                    className="border-b pb-1 border-transparent hover:border-slate-100 cursor-pointer"
                  >
                    {item}
                  </h1>
                );
              })}
            </div>
          </div>
        </div>
        {/* looking to ... */}
        <div className="flex flex-col gap-3 w-[50%] lg:w-[40%]">
          <h1 className="text-3xl font-semibold">looking to</h1>
          {/* DropDown */}
          <div
            onClick={() => setShowLooking(!showLooking)}
            className="relative"
          >
            <div className="flex items-center justify-between cursor-pointer">
              <h1 className="text-3xl">{selecionLooking}</h1>
              <SlArrowDown />
            </div>
            <div
              onMouseLeave={() => setShowLooking(false)}
              className={`top-10 absolute w-full bg-slate-950 rounded border border-slate-100 p-3 flex flex-col gap-2 transition-opacity ${
                showLooking ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              {LookingTo.map((item) => {
                return (
                  <h1
                    key={item}
                    onClick={() => setSelectionLooking(item)}
                    className="border-b pb-1 cursor-pointer border-transparent hover:border-slate-100"
                  >
                    {item}
                  </h1>
                );
              })}
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="flex flex-col gap-2 mt-5">
          <input
            type="text"
            placeholder="Name"
            className="outline-none p-3 bg-transparent rounded border border-slate-300"
          />
          <input
            type="text"
            placeholder="Email"
            className="outline-none p-3 bg-transparent rounded border border-slate-300"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="outline-none p-3 bg-transparent rounded border border-slate-300"
          ></textarea>
          <button className="py-2 px-6 self-start bg-blue-600 text-white rounded-md">
            Submit
          </button>
        </div>
        {/* Address */}
        <div className="mt-5 flex flex-col gap-2 text-white">
          <div className="grid grid-cols-6 ">
            <h1 className="col-span-1 uppercase">Address</h1>
            <p className="col-span-6 md:col-span-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              inventore unde, quod ducimus, vero earum tempora
            </p>
          </div>
          <div className="grid grid-cols-6 ">
            <h1 className="col-span-1 uppercase">Visit Us</h1>
            <a className="col-span-6 md:col-span-5 underline">
              www.opaqueindustries.news
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseWithUs;
