import React from "react";
import Navbar from "../Reusables/Navbar";
import SideMenuBar from "../Reusables/SideMenuBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../Stylesheets/Utils/general.scss";
import Bootcamps from "../Pages/Bootcamps/Bootcamps";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Settings from "../Pages/Settings/Settings";
export default function Router() {
  const SideMenuWithNavbarWrapper = (Component) => {
    return (
      <>
        <div className="wrapper">
          <SideMenuBar />

          <div className="component">
            <Navbar />
            {Component && <Component />}
          </div>
        </div>
      </>
    );
  };
  return (
    <BrowserRouter>
      <div className="route-container">
        <Routes>
          <Route path="" element={SideMenuWithNavbarWrapper()} />
          <Route
            path="/bootcamps"
            element={SideMenuWithNavbarWrapper(Bootcamps)}
          />
          <Route
            path="/dashboard"
            element={SideMenuWithNavbarWrapper(Dashboard)}
          />
          <Route
            path="/settings"
            element={SideMenuWithNavbarWrapper(Settings)}
          />
          <Route path="*" element={SideMenuWithNavbarWrapper()} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
