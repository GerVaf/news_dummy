import React from "react";
import FeaturedNews from "./FeaturedNews";
import Center from "./Center";
import Charts from "./Charts";

const Content = ({ cate }) => {
  return (
    <div className="grid grid-cols-12 gap-3">
      {/* Left */}
      <div className="col-span-12 lg:col-span-3">
        <FeaturedNews />
      </div>
      {/* Center */}
      <div className="col-span-12 lg:col-span-6">
        <Center />
      </div>
      {/* Right */}
      <div className="col-span-12 lg:col-span-3">
        <Charts cate={cate} />
      </div>
    </div>
  );
};

export default Content;
