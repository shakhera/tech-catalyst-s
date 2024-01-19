import React from "react";
import { NavDropdown } from "react-bootstrap";

const DropDrown = () => {
  return (
    <div>
      <NavDropdown title="Course" id="collapsible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">
          Introduction to Computer Science
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Computer Programming
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          Computer Networks
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Machine Learning</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          Database Management Systems
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          Artificial Intelligence
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Web Development</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Course Quiz link</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default DropDrown;
