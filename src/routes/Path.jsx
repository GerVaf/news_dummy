import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Music from "../pages/Music";
import Sport from "../pages/Sport";
import Detail from "../pages/Detail";
import AdvertiseWithUs from "../components/Advertise/AdvertiseWithUs";
import Business from "../pages/Business";
import AboutUs from "../pages/AboutUs";
import WhyAdvertiseWithUs from "../components/WhyAdvertiseWithUs";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import Ads from "../components/Admin/Ads";
import HistList from "../components/Admin/HistList";
import Noti from "../components/Admin/Noti";
import Dashboard from "../components/Admin/Dashboard";
import Menu from "../components/Admin/MenuList/Menu";

const Path = () => {
  const dashRoute = [
    {
      id: 1,
      title: "Menu",
      path: "/",
      component: <Dashboard />,
    },
    {
      id: 2,
      title: "Ads",
      path: "ads",
      component: <Ads />,
    },
    {
      id: 3,
      title: "List",
      path: "list",
      component: <HistList />,
    },
    {
      id: 4,
      title: "Notification",
      path: "noti",
      component: <Noti />,
    },
  ];
  const location = useLocation();
  const isDashboard = location?.pathname?.includes("dashboard");
  return (
    <div className={`${isDashboard && "flex w-12/12 "}`}>
      {isDashboard && <Menu />}
      <div className={`${isDashboard && "flex w-8/12 "}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/business" element={<Business />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/whyAdvertise" element={<WhyAdvertiseWithUs />} />
          <Route path="/advertiseWithUs" element={<AdvertiseWithUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />

          {dashRoute?.map((rou) => {
            return (
              <Route path={`/dashboard/${rou.path}`} element={rou?.component} />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default Path;
