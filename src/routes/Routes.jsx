import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/SignIn/Login/Login";
import SignUp from "../pages/SignIn/SignUp/SignUp";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

const Routes = () => {
  return <div></div>;
};

export default Routes;
