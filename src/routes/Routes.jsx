import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/SignIn/Login/Login";
import SignUp from "../pages/SignIn/SignUp/SignUp";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Home/Courses/Courses";
import CourseCetagory from "../pages/Home/CourseCetagory/CourseCetagory";
import CourseLayout from "../Layout/CourseLayout";
import RightSideNav from "../share/Navigation/RightSideNav/RightSideNav";
import CourseHomeLayout from "../Layout/CourseHomeLayout";
import CourseHomeSlideBar from "../pages/Home/CourseHomeSlideBar/CourseHomeSlideBar";
import CheckoutCourse from "../pages/Home/CheckoutCourse/CheckoutCourse";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ErrorPageLayout from "../Layout/ErrorPageLayout";
import FAQ from "../pages/FAQ/FAQ";

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

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/courseCetagory",
    element: <CourseHomeLayout></CourseHomeLayout>,
    children: [
      {
        path: ":id",
        element: <CourseCetagory></CourseCetagory>,
        loader: ({ params }) =>
          fetch(
            `https://tech-catalyst-s-server-shakhera-shakheras-projects.vercel.app/courseCategory/${params.id}`
          ),
      },
      {
        path: "",
        element: <CourseHomeSlideBar></CourseHomeSlideBar>,
      },
    ],
  },
  {
    path: "/",
    element: <CourseLayout></CourseLayout>,
    children: [
      {
        path: "courses/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(
            `https://tech-catalyst-s-server-shakhera-shakheras-projects.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "checkoutCourse/:_id",
        element: (
          <PrivateRoutes>
            <CheckoutCourse></CheckoutCourse>
          </PrivateRoutes>
        ),
        // loader: ({ params }) =>
        //   fetch(
        //     `https://tech-catalyst-s-server-shakhera-shakheras-projects.vercel.app/courses/${params._id}`
        //   ),
      },
    ],
  },
  {
    path: "/",
    element: <ErrorPageLayout></ErrorPageLayout>,
    children: [
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },

      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
        errorElement: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

const Routes = () => {
  return <div></div>;
};

export default Routes;
