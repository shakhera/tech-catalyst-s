import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const RightSideNav = () => {
  const data = [
    { course: "Intro to Programming", enrollment: 1200 },
    { course: "Data Structures & Algorithms", enrollment: 950 },
    { course: "Web Development Basics", enrollment: 1800 },
    { course: "Machine Learning Fundamentals", enrollment: 800 },
    { course: "Database Management Systems", enrollment: 1100 },
    { course: "Software Engineering Principles", enrollment: 1300 },
    { course: "Cybersecurity Fundamentals", enrollment: 1000 },
    { course: "Mobile App Development", enrollment: 1600 },
    { course: "AI Ethics", enrollment: 750 },
    { course: "Network Security", enrollment: 900 },
    { course: "Computer Graphics", enrollment: 1200 },
    { course: "HCI", enrollment: 1100 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="">
      <div className="text-center ms-5 mt-5 ">
        <h4>Feedback</h4>
        <p className="">
          <small>Send your feedback to feedback@techcatalysts.com</small>
        </p>
        <h5>100+ Latest Updates</h5>
      </div>
      <div className="mt-5">
        <LineChart width={300} height={250} data={data}>
          <XAxis
            dataKey="course"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={60}
          />
          <YAxis />
          {/* <XAxis
            dataKey="course"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={60}
          >
            <Label
              content={(props) => {
                const { x, y, width, value } = props;
                return (
                  <g transform={`translate(${x + width / 2},${y + 30})`}>
                    <text
                      x={0}
                      y={0}
                      dy={16}
                      textAnchor="middle"
                      fill="#666"
                      transform="rotate(0)"
                    >
                      {value}
                    </text>
                  </g>
                );
              }}
            />
          </XAxis> */}
          {/* <Tooltip /> */}
          <Tooltip content={<CustomTooltip />} />

          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="enrollment" stroke="#8884d8" />
        </LineChart>
      </div>

      <div></div>
    </div>
  );
};

export default RightSideNav;
