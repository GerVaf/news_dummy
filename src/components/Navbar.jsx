import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import logo from "../../public/INDXwhite.svg";
import Menu from "../utils/Menu";
const Navbar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="z-50 sticky top-0 select-none">
      <div className="bg-bgColor text-white py-5 px-3 xl:px-0">
        <nav className="max-w-[1300px] mx-auto flex justify-between items-center">
          <h1 className="font-black text-white text-3xl cursor-pointer " onClick={()=>nav('/')}>INDX</h1>
          {/* Menu */}
          <h1 onClick={open} className="cursor-pointer">
            Menu
          </h1>
        </nav>
      </div>

      <Menu opened={opened} close={close} path={path}/>
    </div>
  );
};

export default Navbar;
