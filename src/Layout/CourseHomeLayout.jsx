import React from "react";
import LeftSideNavbar from "../share/Navigation/LeftSideNavbar/LeftSideNavbar";
import UpperNavbar from "../share/Navigation/UpperNavbar/UpperNavbar";
import Header from "../share/Navigation/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../share/Footer/Footer";
import { Outlet } from "react-router-dom";

const CourseHomeLayout = () => {
  return (
    <div>
      <UpperNavbar></UpperNavbar>
      <Header></Header>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <LeftSideNavbar></LeftSideNavbar>
          </Col>
          <Col xs={12} md={8}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default CourseHomeLayout;
