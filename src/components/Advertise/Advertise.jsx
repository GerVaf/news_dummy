import React from "react";
import AdvertiseCard from "./AdvertiseCard";

const Advertise = () => {
  return (
    <div className="bg-slate-200 px-3 lg:px-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6 md:col-span-3 lg:col-span-3">
          <AdvertiseCard />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-3">
          <AdvertiseCard />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-3">
          <AdvertiseCard />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-3">
          <AdvertiseCard />
        </div>
      </div>
    </div>
  );
};

export default Advertise;