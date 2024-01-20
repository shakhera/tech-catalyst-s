import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const LeftSideNavbar = () => {
  const [courseCategory, setCourseCategory] = useState([]);
  useEffect(() => {
    fetch(
      "https://tech-catalyst-s-server-shakhera-shakheras-projects.vercel.app/courseCategory"
    )
      .then((res) => res.json())
      .then((data) => setCourseCategory(data));
  }, []);
  return (
    <div className="mt-5">
      <h2>All Courses : {courseCategory.length}</h2>
      <div className="ps-2 pt-4 fw-bold">
        {courseCategory.map((category) => (
          <p key={category.id}>
            <Link
              to={`/courseCetagory/${category.id}`}
              className="text-decoration-none text-secondary-emphasis"
            >
              <FaArrowAltCircleRight className="m-2"></FaArrowAltCircleRight>
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNavbar;
