import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Courses = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  const {
    img,
    details,
    description,
    topicsCovered,
    introductoryTitle,
    name,
    course_id,
  } = courseDetails;
  return (
    <div>
      <Card>
        <Card.Title className="text-center py-3 fs-2 fw-bold">
          {name}
        </Card.Title>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold">{introductoryTitle}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/courseCetagory/${course_id}`}>
            <Button variant="danger">
              <FaArrowLeft></FaArrowLeft>All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Courses;
