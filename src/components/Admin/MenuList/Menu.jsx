import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const dashRouteList = [
    {
      id: 1,
      path: "",
      title: "Dashboard",
    },
    {
      id: 2,
      path: "ads",
      title: "Ads",
    },
    {
      id: 3,
      path: "list",
      title: "List",
    },
    {
      id: 4,
      path: "noti",
      title: "Notification",
    },
  ];
  return (
    <div className="w-2/12 flex flex-col h-[90vh] relative z-50 bg-white">
      {dashRouteList?.map((rou) => {
        return (
          <Link
            to={`dashboard/${rou.path}`}
            className="py-10 cursor-pointer font-bold text-center border hover:text-white hover:bg-black duration-150"
            key={rou.id}
          >
            {rou.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
