import { Accordion, Drawer } from "@mantine/core";
import React from "react";
import { main, partner, tools } from "./listArray";
import classes from "./accordion.module.css";
import List from "../List";
import { Link } from "react-router-dom";

const HomeMenu = ({ opened, close }) => {
  const navMenus = [
    {
      value: "Features",
      subMenu: <List array={main} />,
    },
    {
      value: "News",
      subMenu: <List array={main} />,
    },
    {
      value: "Partner Program",
      subMenu: <List array={partner} />,
    },
    {
      value: "Services",
      subMenu: <List array={main} />,
    },
    {
      value: "Tools",
      subMenu: <List array={tools} />,
    },
  ];
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
        <Accordion
          classNames={classes}
          
        >
          {navMenus.map((item) => {
            return (
              <Accordion.Item
                key={item.value}
                value={item.value}
                
              >
                <Accordion.Control>{item.value}</Accordion.Control>
                <Accordion.Panel>{item.subMenu}</Accordion.Panel>
              </Accordion.Item>
            );
          })}
        </Accordion>
        <h1 className="text-2xl">Contact Us</h1>
        <h1 className="text-2xl">Products</h1>
        <Link to={'/aboutUs'} className="text-2xl">About Us</Link>
        <h1 className="text-2xl">Shop</h1>
        <h1 className="text-2xl">Radio</h1>
        <h1 className="text-2xl">Faq</h1>
      </div>
    </Drawer>
  );
};

export default HomeMenu;
