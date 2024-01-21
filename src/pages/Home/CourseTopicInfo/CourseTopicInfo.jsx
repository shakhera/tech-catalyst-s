import React from "react";
import { Accordion } from "react-bootstrap";

const CourseTopicInfo = ({ topicRelatedInfo }) => {
  // console.log(topicRelatedInfo);
  const { details, heading } = topicRelatedInfo;
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={0}>
          <Accordion.Header className="fw-bold">{heading}</Accordion.Header>
          <Accordion.Body>{details}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default CourseTopicInfo;
