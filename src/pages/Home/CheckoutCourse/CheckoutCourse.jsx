import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CheckoutCourse = () => {
  const { _id } = useParams();
  // console.log(_id);
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(
          `https://tech-catalyst-s-server-shakhera-shakheras-projects.vercel.app/courses/${_id}`
        );
        const data = await response.json();
        setCourseDetails(data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [_id]);
  return (
    <div>
      <h2>Course Checkout</h2>
      {courseDetails ? (
        <div className="border p-3 text-center mt-5">
          <h1>{courseDetails.name}</h1>
          <p>Course ID: {courseDetails.course_id}</p>
          <p>_id: {courseDetails._id}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CheckoutCourse;
