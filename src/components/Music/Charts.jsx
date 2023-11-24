import React from "react";

const Charts = ({ cate }) => {
  return (
    <div className="flex flex-col gap-5">
      {/* Top Part */}
      <div className="bg-slate-900 text-white h-[300px] rounded-none lg:rounded-l">
        <h1 className="font-bold text-2xl border-b border-slate-200 p-3 uppercase">
          {cate === "music" ? "Charts" : "League"} 1
        </h1>
      </div>
      {/* Bottom Part */}
      <div className="bg-slate-900 text-white h-[300px] rounded-none lg:rounded-l">
        <h1 className="font-bold text-2xl border-b border-slate-200 p-3 uppercase">
          {cate === "music" ? "Charts" : "League"} 2
        </h1>
      </div>
    </div>
  );
};

export default Charts;
