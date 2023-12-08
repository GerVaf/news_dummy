import React from "react";
import { Link } from "react-router-dom";
import Accordion from "../../utils/Accordion";

const HomeMenu = () => {
  return (
    <div className="flex flex-col gap-2 text-white">
      <h1 className="navMenu">Home</h1>
      {/* Accordion */}
      <Accordion />
      <h1 className="text-2xl">Contact Us</h1>
      <h1 className="text-2xl">Products</h1>
      <Link to={"/aboutUs"} className="text-2xl">
        About Us
      </Link>
      <h1 className="text-2xl">Shop</h1>
      <h1 className="text-2xl">Radio</h1>
      <h1 className="text-2xl">Faq</h1>
    </div>
  );
};

export default HomeMenu;
