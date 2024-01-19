import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import DropDrown from "../DropDrown/DropDrown";
import { AuthContext } from "../../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="d-felx align-items-center">
      <Navbar collapseOnSelect expand="md" className="">
        <Container>
          {/* <Navbar.Brand href="#home">TechCatalystS</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/"
                className="text-decoration-none me-3 text-success-emphasis"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-decoration-none me-3 text-secondary-emphasis"
              >
                About
              </Link>

              {/* <Nav.Link href="#pricing">About</Nav.Link> */}

              <DropDrown></DropDrown>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">Profile</Nav.Link> */}

              {user ? (
                <>
                  <>
                    {user.email}

                    {/* <img
                    src={user.photoURL}
                    alt="Profile"
                    className="rounded-full h-8 w-8 ml-2"
                  /> */}
                  </>
                  <Button
                    onClick={handleLogOut}
                    variant="dark"
                    className="px-3 py-2"
                  >
                    LogOut
                  </Button>
                </>
              ) : (
                <Link to="/login">
                  <Button variant="info" className="px-3 py-2">
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="" />
    </div>
  );
};

export default Header;
