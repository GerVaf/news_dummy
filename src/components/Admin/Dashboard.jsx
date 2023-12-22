import React from "react";
import { BiNotification } from "react-icons/bi";
import { IoNotifications, IoSettings } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className="w-full">
      {/* navbar  */}
      <div className="flex justify-end gap-5 w-full px-10 py-5 text-xl">
        <p>Thant Zin min</p>
        <IoNotifications />
        <IoSettings />
      </div>
      {/* image */}
      <div></div>
    </div>
  );
};

export default Dashboard;
