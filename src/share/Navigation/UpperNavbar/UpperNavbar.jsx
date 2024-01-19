import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

const UpperNavbar = () => {
  return (
    <div className="">
      <Navbar expand="sm" className="" bg="dark" data-bs-theme="dark">
        <Container fluid className="px-5">
          <Navbar.Brand href="#">TechCatalystS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              {/* <Navbar.Brand href="#">TechCatalystS</Navbar.Brand> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default UpperNavbar;
