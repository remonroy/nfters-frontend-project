// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../navbar/Navbars";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="font-DM_Sans">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
