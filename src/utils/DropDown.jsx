import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

const DropDown = ({ values }) => {
  const [show, setShow] = useState(false);
  const [selectValue, setSelectValue] = useState(values[0]);

  return (
    <div onClick={() => setShow(!show)} className="relative">
      <div className="flex items-center justify-between cursor-pointer darkLightBg px-3">
        <h1 className="text-4xl">{selectValue}</h1>
        <SlArrowDown />
      </div>
      <div
        onMouseLeave={() => setShow(false)}
        className={`top-10 absolute w-full  rounded border border-slate-100 p-3 flex flex-col gap-2 transition-opacity ${
          show ? "opacity-100 bg-slate-950" : "opacity-0 hidden"
        }`}
      >
        {values.map((item) => {
          return (
            <h1
              key={item}
              onClick={() => setSelectValue(item)}
              className="border-b pb-1 border-transparent hover:border-slate-100 cursor-pointer"
            >
              {item}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
