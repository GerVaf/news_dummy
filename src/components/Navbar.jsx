import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import HomeMenu from "./VarientMenu/Home/HomeMenu";
import SportMenu from "./VarientMenu/SportMenu";
import { useDisclosure } from "@mantine/hooks";
import MusicMenu from "./VarientMenu/MusicMenu";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="z-50 sticky top-0">
      <div className="bg-slate-200 py-3 px-3 xl:px-0">
        <nav className="max-w-[1300px] mx-auto flex justify-between items-center">
          {/* Home */}
          <NavLink to={"/"}>
            Home
          </NavLink>
          {/* News */}
          <NavLink to={"/news"}>
            News
          </NavLink>
          {/* Menu */}
          <h1 onClick={open} className="cursor-pointer">
            Menu
          </h1>
        </nav>
      </div>

      {path === "/" ? (
        <HomeMenu opened={opened} close={close}/>
      ) : path === "/music" ? (
        <MusicMenu opened={opened} close={close}/>
      ) : path === "/sports" ? (
        <SportMenu opened={opened} close={close}/>
      ) : (
        path === "/business" && <HomeMenu opened={opened} close={close}/>
      )}
    </div>
  );
};

export default Navbar;
