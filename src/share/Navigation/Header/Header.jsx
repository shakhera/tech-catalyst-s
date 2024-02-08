import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isHovered, setHovered] = useState(false);

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
                to="#"
                className="text-decoration-none me-3 text-secondary-emphasis"
              >
                About
              </Link>
              <Link
                to="/courseCetagory"
                className="text-decoration-none me-3 text-secondary-emphasis"
              >
                Courses
              </Link>
              <Link
                to="/faq"
                className="text-decoration-none me-3 text-secondary-emphasis"
              >
                FAQ
              </Link>

              <Link
                to="/blog"
                className="text-decoration-none me-3 text-success-emphasis"
              >
                Blog
              </Link>
              <Link
                to="#"
                className="text-decoration-none me-3 text-success-emphasis"
              >
                Contact
              </Link>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <>
                    <div
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      {user.photoURL ? (
                        <>
                          <img
                            src={user.photoURL}
                            alt="Profile"
                            className="rounded-circle  me-2"
                            style={{ width: "40px", height: "40px" }}
                          />
                          {isHovered && (
                            <span>{user.displayName || "Your Name"}</span>
                          )}
                        </>
                      ) : (
                        <FaRegUserCircle size={20}></FaRegUserCircle>
                      )}
                    </div>
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
      <hr className="shadow" />
    </div>
  );
};

export default Header;
