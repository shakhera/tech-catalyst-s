import React from "react";
import UpperNavbar from "../share/Navigation/UpperNavbar/UpperNavbar";
import Header from "../share/Navigation/Header/Header";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const ErrorPageLayout = () => {
  return (
    <div>
      <UpperNavbar></UpperNavbar>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default ErrorPageLayout;
