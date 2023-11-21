import { Drawer } from "@mantine/core";
import React from "react";

const MusicMenu = ({ opened, close }) => {
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
        },
        content: {
          background: "#000",
        },
      }}
    >
      {/* Drawer content */}
      <div className="flex flex-col gap-2 text-white">
        <h1 className="navMenu">Charts</h1>
        <h1 className="navMenu">Featured News</h1>
        <h1 className="navMenu">International news</h1>
        <h1 className="navMenu">Regional News</h1>
        <h1 className="navMenu">Home</h1>
        <h1 className="text-2xl">Contact Us</h1>
        <h1 className="text-2xl">Products</h1>
        <h1 className="text-2xl">About Us</h1>
        <h1 className="text-2xl">Shop</h1>
        <h1 className="text-2xl">Radio</h1>
        <h1 className="text-2xl">Faq</h1>
      </div>
    </Drawer>
  );
};

export default MusicMenu;
