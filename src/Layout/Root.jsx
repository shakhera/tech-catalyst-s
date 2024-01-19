import React from "react";
import UpperNavbar from "../share/Navigation/UpperNavbar/UpperNavbar";
import { Outlet } from "react-router-dom";
import Header from "../share/Navigation/Header/Header";

const Root = () => {
  return (
    <div>
      <UpperNavbar></UpperNavbar>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
