import React, { useRef } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft, FaDownload } from "react-icons/fa";
import CourseTopicInfo from "../CourseTopicInfo/CourseTopicInfo";
import jsPDF from "jspdf";

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
    _id,
  } = courseDetails;

  const pdfRef = useRef();

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    const imgData = img;
    pdf.text(name, 20, 10);
    pdf.addImage(imgData, "JPEG", 15, 40, 180, 120);
    pdf.text(introductoryTitle, 20, 20);
    pdf.text(description, 20, 30);
    pdf.save(`${name}_Course_Details.pdf`);
  };
  return (
    <div>
      <Card>
        <Card.Title className="text-center py-3 pb-2 fs-2 fw-bold">
          {name}

          <Button
            variant="link"
            onClick={handleDownloadPDF}
            style={{ marginLeft: "10px" }}
          >
            <FaDownload /> Download PDF
          </Button>
        </Card.Title>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold">{introductoryTitle}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="fw-bold">
            More about details this course
          </Card.Text>
          <div>
            {details.topicsCovered.map((topicRelatedInfo, index) => (
              <CourseTopicInfo
                key={index}
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
            <Link to={`/checkoutCourse/${_id}`}>
              <Button variant="danger">Get premium access.</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Courses;
