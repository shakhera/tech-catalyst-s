import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CourseTopicInfo from "../CourseTopicInfo/CourseTopicInfo";

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
          <Card.Text className="fw-bold">
            More about details this course
          </Card.Text>
          <div>
            {details.topicsCovered.map((topicRelatedInfo) => (
              <CourseTopicInfo
                topicRelatedInfo={topicRelatedInfo}
              ></CourseTopicInfo>
            ))}
          </div>
          <div className="d-flex justify-content-between pt-2">
            <Link to={`/courseCetagory/${course_id}`}>
              <Button variant="danger">
                <FaArrowLeft></FaArrowLeft>
              </Button>
            </Link>
            <Link>
              <Button variant="danger">Get premium access.</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Courses;
