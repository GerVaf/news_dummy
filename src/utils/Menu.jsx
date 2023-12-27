import { Drawer } from "@mantine/core";
import React from "react";
import { IoClose } from "react-icons/io5";
import HomeMenu from "../components/VarientMenu/HomeMenu";
import MusicMenu from "../components/VarientMenu/MusicMenu";
import SportMenu from "../components/VarientMenu/SportMenu";

const Menu = ({ opened, close, path }) => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      position="right"
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      withCloseButton={false}
      styles={{
        content: {
          background: "#000",
        },
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center my-5 text-white">
        <h1 className=" font-semibold">Menu</h1>
        <IoClose onClick={close} className="text-xl rounded cursor-pointer" />
      </div>
      {/* Drawer content */}
      {path === "/music" ? (
        <MusicMenu />
      ) : path === "/sport" ? (
        <SportMenu />
      ) : (
        <HomeMenu />
      )}
    </Drawer>
  );
};

export default Menu;
