import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";
// import { Accordion, Card, Button } from "react-bootstrap";
const FAQ = () => {
  return (
    <div>
      <h2>FAQ</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Q: How can I contribute to the project?
          </Accordion.Header>
          <Accordion.Body>
            A: We welcome contributions! Please check our [Contribution
            Guidelines] for details on how to get involved.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
