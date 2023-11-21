import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const News = () => {
  const nav = useNavigate();
  // for show and hide categories
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="h-screen">
      {/* Filter Categories */}
      <div className="flex flex-col items-center text-white">
        <div
          className={`w-[300px] md:w-[500px] overflow-hidden transition-all duration-500 ${
            show ? "h-[200px]" : "h-[49px]"
          }`}
        >
          {/* News */}
          <div
            onClick={handleShow}
            className="flex justify-center items-center gap-2 py-3 "
          >
            <p>News</p>
            <div>
              <MdKeyboardArrowDown
                className={`text-xl transition-transform duration-500 ${
                  show ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>
          {/* Music */}
          <p
            onClick={() => nav("/music")}
            className="py-3   text-white  text-center"
          >
            Music
          </p>
          {/* Sport */}
          <p
            onClick={() => nav("/sports")}
            className="py-3    text-white text-center"
          >
            Sport
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
