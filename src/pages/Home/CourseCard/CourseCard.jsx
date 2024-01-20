import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
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

  //   const handleLinkClick = () => {
  //     navigate(`/courses/${_id}`);
  // setTimeout(() => {
  //   navigate(`/rightNavBar/${_id}`);
  // }, 0);
  // navigate(`/rightNavBar/${_id}`);
  //   };
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
          {/* <Button onClick={handleLinkClick} variant="link">
            Read More
          </Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
