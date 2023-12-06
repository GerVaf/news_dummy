import { Drawer } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import Accordion from "../../utils/Accordion";

const HomeMenu = ({ opened, close }) => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      title="Menu"
      position="right"
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      styles={{
        root: {
          color: "white",
        },
        header: {
          background: "#000",
        },
        close: {
          color: "white",
          "&:active": {
            color: "black",
          },
        },
        content: {
          background: "#000",
        },
      }}
    >
      {/* Drawer content */}
      <div className="flex flex-col gap-2">
        <h1 className="navMenu">Home</h1>
        {/* Accordion */}
        <Accordion/>
        <h1 className="text-2xl">Contact Us</h1>
        <h1 className="text-2xl">Products</h1>
        <Link to={"/aboutUs"} className="text-2xl">
          About Us
        </Link>
        <h1 className="text-2xl">Shop</h1>
        <h1 className="text-2xl">Radio</h1>
        <h1 className="text-2xl">Faq</h1>
      </div>
    </Drawer>
  );
};

export default HomeMenu;
