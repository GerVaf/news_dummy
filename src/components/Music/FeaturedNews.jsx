import React from "react";

const FeaturedNews = () => {
  return (
    <div className="bg-bgColor text-white relative rounded-none lg:rounded-r">
      {/* Heading */}
      <h1 className="font-bold text-2xl border-b border-slate-200 p-3 uppercase">Featured News</h1>
      {/* News */}
      <div className="flex flex-col p-3 ">
        <div className="flex items-center gap-3 border-b border-slate-200 py-3">
          <span className="w-5 h-5 p-4 flex justify-center items-center border border-slate-200 rounded">1</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            assumenda eius recusandae ad soluta modi
          </p>
        </div>
        <div className="flex items-center gap-3 border-b border-slate-200 py-3">
          <span className="w-5 h-5 p-4 flex justify-center items-center border border-slate-200 rounded">2</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            assumenda eius recusandae ad soluta modi
          </p>
        </div>
        <div className="flex items-center gap-3 border-b border-slate-200 py-3">
          <span className="w-5 h-5 p-4 flex justify-center items-center border border-slate-200 rounded">3</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            assumenda eius recusandae ad soluta modi
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
