import React from "react";
import UpperNavbar from "../share/Navigation/UpperNavbar/UpperNavbar";
import { Outlet } from "react-router-dom";
import Header from "../share/Navigation/Header/Header";
// import { Col, Container, Row } from "react-bootstrap";
// import LeftSideNavbar from "../share/Navigation/LeftSideNavbar/LeftSideNavbar";
import Footer from "../share/Footer/Footer";

const Root = () => {
  return (
    <div>
      <UpperNavbar></UpperNavbar>
      <Header></Header>
      <Outlet></Outlet>
      {/* <Container>
        <Row>
          <Col xs={6} md={4}>
            <LeftSideNavbar></LeftSideNavbar>
          </Col>
          <Col xs={12} md={8}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container> */}
      <Footer></Footer>
    </div>
  );
};

export default Root;
