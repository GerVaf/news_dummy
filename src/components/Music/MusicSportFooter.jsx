import React from "react";
import music from "/musicWhite.svg";
import sport from "/sportWhite.svg";
import { Link } from "react-router-dom";
const MusicSportFooter = ({cate}) => {
  return (
    <div className="bg-bgColor">
      <div className="flex flex-col gap-5 lg:flex-row justify-between p-10">
        {/* logo */}
        <img src={cate === 'music' ? music : sport} alt="" className="h-20" />

        {/* footer menu */}
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-20 text-white">
          {/* FAQ */}
          <div className="flex flex-col gap-2 uppercase">
            <h1>FAQ</h1>
            <h1>Radio</h1>
            <h1>Shop</h1>
          </div>
          {/* Categories */}
          <div className="flex flex-col gap-2 uppercase">
            <h1>Music</h1>
            <h1>Sport</h1>
            <h1>Business</h1>
          </div>
          {/* NavMenu */}
          <div className="flex flex-col gap-2 uppercase">
            <h1>About Us</h1>
            <h1>Products</h1>
            <h1>Contacts</h1>
            <h1>Supports</h1>
            <h1>Home</h1>
          </div>
          {/* Services and Link */}
          <div className="flex flex-col gap-2 uppercase">
            <h1>Services</h1>
            <Link to={'/advertiseWithUs'}>Advertise with us</Link>
            <hr />
            <h1>INDX for MUSIC</h1>
            <h1>INDX for SPORTS</h1>
            <h1>INDX for BUSINESS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSportFooter;
