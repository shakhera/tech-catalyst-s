import React from "react";
import Courses from "../pages/Home/Courses/Courses";
import { Outlet } from "react-router-dom";
import UpperNavbar from "../share/Navigation/UpperNavbar/UpperNavbar";
import Header from "../share/Navigation/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../share/Footer/Footer";
import RightSideNav from "../share/Navigation/RightSideNav/RightSideNav";

const CourseLayout = () => {
  return (
    <div>
      <UpperNavbar></UpperNavbar>
      <Header></Header>
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <Outlet></Outlet>
          </Col>
          <Col xs={6} md={3}>
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default CourseLayout;
