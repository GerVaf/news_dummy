import React, { useState } from "react";
import { main, partner, tools } from "./listArray";
import { IoIosArrowDown } from "react-icons/io";
import List from "./List";

const navMenus = [
  {
    id: 0,
    title: "Features",
    lists: main,
  },
  {
    id: 1,
    title: "News",
    lists: main,
  },
  {
    id: 2,
    title: "Partner Program",
    lists: partner,
  },
  {
    id: 3,
    title: "Tools",
    lists: tools,
  },
];

const Accordion = () => {
  const [activeIndex, setactiveIndex] = useState();
  return navMenus.map((nav) => {
    return (
      <div
        key={nav.id}
        onClick={() => {
          nav.id === activeIndex ? setactiveIndex("") : setactiveIndex(nav.id);
        }}
      >
        <h1 className="navMenu flex justify-between items-center">
          {nav.title}{" "}
          <IoIosArrowDown
            className={`${
              activeIndex === nav.id ? "rotate-0" : "rotate-180"
            } transition-transform duration-300`}
          />
        </h1>
        <div
          className={`${
            activeIndex === nav.id ? "h-[200px]" : "h-0 overflow-hidden"
          } transition-all`}
        >
          <List array={nav.lists} />
        </div>
      </div>
    );
  });
};

export default Accordion;
