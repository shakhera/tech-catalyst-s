import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const CourseCetagory = () => {
  const { id } = useParams();
  const categoryCourse = useLoaderData();
  //   console.log(categoryCourse);
  return (
    <div className="mt-5">
      <h2>courseCetagory {id}</h2>
      {categoryCourse.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default CourseCetagory;
