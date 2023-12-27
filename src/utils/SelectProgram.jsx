import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const SelectProgram = ({ program, setProgram }) => {
  const [show, setShow] = useState(false);
  const [unSelectProgram, setUnSelectProgram] = useState("Regional");

  return (
    <div
      className={`overflow-hidden transition-all border-b m-5 z-40 ${
        show ? "h-[60px]" : "h-[30px] "
      }`}
    >
      {/* DropDown */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShow(!show);
        }}
        className="w-52 flex justify-between items-center gap-5 cursor-pointer"
      >
        <h1 onClick={() => setProgram(program)} className="uppercase">
          {program} News
        </h1>
        <IoChevronDownOutline className={`transition-transform ${show ? 'rotate-0' : 'rotate-180'}`}/>
      </div>
      <h1
        onClick={() => {
          setProgram(unSelectProgram);
          unSelectProgram === "Regional"
            ? setUnSelectProgram("International")
            : setUnSelectProgram("Regional");
          setShow(false);
        }}
        className="uppercase mt-2 cursor-pointer"
      >
        {unSelectProgram} News
      </h1>
    </div>
  );
};

export default SelectProgram;
