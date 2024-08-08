import React from "react";
import "../css/Education.css";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const educationData = [
  {
    degree: "Master of Science in Computer Engineering",
    institution: "Arizona State University, Tempe, AZ",
    dates: "Jan 2021 – May 2022 (4.00 GPA)",
    coursework:
      "Foundations of Algorithms, Distributed Database Systems, Cloud Computing, Data Mining, Data Visualization",
    logo: `${process.env.PUBLIC_URL}/asu.jpg`,
  },
  {
    degree: "Bachelor of Technology in Electronics and Communication",
    institution:
      "Sreenidhi Institute of Science and Technology, Hyderabad, India",
    dates: "Sep 2014 – May 2018 (8.90 GPA)",
    coursework:
      "Database Management Systems, Data Structures & Algorithms, Operating Systems, Object Oriented Design, Distributed, Multi-tiered Systems, Mathematics.",
    logo: `${process.env.PUBLIC_URL}/snist.jpeg`,
  },
];

function Education() {
  return (
    <div className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {educationData.map((item, index) => (
          <div className="education-item" key={index}>
            <div className="education-content">
              <div className="education-header">
                <FaGraduationCap className="education-icon" />
                <h3 className="degree-title">{item.degree}</h3>
              </div>
              <p className="institution">{item.institution}</p>
              <p className="dates">
                <FaCalendarAlt /> {item.dates}
              </p>
              <p className="coursework">{item.coursework}</p>
            </div>
            <div className="institution-logo-container">
              <img
                src={item.logo}
                alt={item.institution}
                className="institution-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
