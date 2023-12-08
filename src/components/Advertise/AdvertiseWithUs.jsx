import React from "react";
import DropDown from "../../utils/DropDown";

// for I am [writer...,value]
const IAM = ["Writer", "Reader", "Visitor"];
// for looking to [something...,value]
const LOOKING = ["Get help", "Contact", "Advertise"];

const AdvertiseWithUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-5 p-5 text-white min-h-screen bg-black ">
      {/* Big Text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-3">
        <h3 className="text-4xl lg:text-6xl font-bold">
          Looking for something a little more custom? Let's talk.
        </h3>
      </div>

      {/* Right Part */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        {/* I am ... */}
        <div className="flex flex-col gap-3 w-[50%] lg:w-[30%] z-20">
          <h1 className="text-4xl font-semibold">I am</h1>
          {/* DropDown */}
          <DropDown values={IAM} />
        </div>
        {/* looking to ... */}
        <div className="flex flex-col gap-3 w-[50%] lg:w-[40%]">
          <h1 className="text-3xl font-semibold">looking to</h1>
          {/* DropDown */}
          <DropDown values={LOOKING} />
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
      </div>
    </div>
  );
};

export default AdvertiseWithUs;
