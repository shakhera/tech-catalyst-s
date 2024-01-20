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

  const handleMouseEnter = () => {
    setHovered(true);
  };
  // const handleMouseLeave = () => {
  //   setHovered(false);
  // };
  // const renderTooltip = (text) => <Tooltip>{text}</Tooltip>;
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
                to="#"
                className="text-decoration-none me-3 text-secondary-emphasis"
              >
                About
              </Link>
              {/* <Link
                to="/courses"
                className="text-decoration-none me-3 text-secondary-emphasis"
              >
                Courses
              </Link> */}

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
                      onMouseEnter={handleMouseEnter}
                      className="d-flex align-items-center me-2"
                    >
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt="Profile"
                          className="rounded-circle  me-2"
                          style={{ width: "40px", height: "40px" }}
                        />
                      ) : (
                        <FaRegUserCircle
                          size={20}
                          className={isHovered ? "icon-hover" : "Your-name"}
                        ></FaRegUserCircle>
                      )}
                    </div>
                  </>

                  {/* <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip(user.displayName || "Your Name")}
                  >
                    <div
                      className="d-flex align-items-center me-2"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt="Profile"
                          className={`rounded-full h-8 w-8 me-2 ${
                            isHovered ? "profile-hover" : ""
                          }`}
                        />
                      ) : (
                        <OverlayTrigger
                          placement="bottom"
                          overlay={renderTooltip("User")}
                        >
                          <FaRegUserCircle
                            size={20}
                            className={isHovered ? "icon-hover" : ""}
                          />
                        </OverlayTrigger>
                      )}
                    </div>
                  </OverlayTrigger> */}

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
