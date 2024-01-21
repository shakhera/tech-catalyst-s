import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const CourseCetagory = () => {
  // const { id } = useParams();
  const categoryCourse = useLoaderData();
  console.log(categoryCourse);
  const courseTitle = categoryCourse[0].name;
  return (
    <div className="mt-5">
      <h2 className="text-center">{courseTitle}</h2>
      {categoryCourse.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default CourseCetagory;
