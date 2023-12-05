import React from "react";
import { Link } from "react-router-dom";

const AdvertiseFooter = () => {
  return (
    <div className="bg-bgColor mx-auto rounded overflow-hidden my-20 max-w-[1300px]">
      <div className="flex flex-col gap-5">
        <h1 className="text-xl lg:text-3xl font-bold text-white bg-gradient-to-r from-orange-700 to-pink-700 p-5">
          Who are we
        </h1>
        <div className="grid grid-cols-12 gap-5 px-5 mb-5">
          <div className="col-span-12 lg:col-span-6 h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1701198067976-3c2b6bf5f5c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-5">
            <p className="text-white tracking-widest leading-10  mx-auto">
              At
              <span className="text-2xl font-bold"> INDX</span>, our commitment
              to continuously innovate and adapt to the ever-evolving publishing
              landscape is the driving force of our success. Our goal is to
              revolutionize the way to earn recognition or a promotion or a
              campaign of how the content is created, distributed, and consumed
              in various markets digitally or physically. Thank You for taking a
              look at what we do.
            </p>
            <Link to={'/whyAdvertise'} className="px-5 py-2 border border-slate-100 text-white self-start">
              Why advertise with us ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseFooter;
