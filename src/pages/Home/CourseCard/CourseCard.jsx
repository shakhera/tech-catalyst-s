import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  //   console.log(course);
  const {
    img,
    details,
    description,
    topicsCovered,
    introductoryTitle,
    name,
    _id,
  } = course;
  return (
    <div>
      <Card className="mt-4 ms-5">
        <Card.Img variant="top" src={img} className="px-5 py-3 rounded" />
        <Card.Body>
          <Card.Title className="text-center fw-bold">
            {introductoryTitle}
          </Card.Title>
          <Card.Text className="pt-3">
            <span className="fw-bold">Introduction : </span>
            {description}...
          </Card.Text>
          <Link to={`/courses/${_id}`}>Read More</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
