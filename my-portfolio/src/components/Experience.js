import React from "react";
import "../css/Experience.css";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Software Dev Engineer - Amazon",
    date: "Aug 2022 – Present",
    description: [
      "Led the development of Multiview features for Alexa Echo Show devices, enhancing user experience.",
      "Developed Restful web services and optimized backend Alexa cloud services.",
      "Implemented server-side functionalities and configured applications using Spring Boot and Spring Security.",
    ],
    techStack: ["Alexa", "Spring Boot", "AWS", "Java"],
    logo: `${process.env.PUBLIC_URL}/amazon.jpg`,
  },
  {
    title: "Programming Assistant - Arizona State University",
    date: "Feb 2022 - July 2022",
    description: [
      "Developed the Intelligent Tutoring System web application using Vue.js and HTML5.",
      "Implemented responsive dashboards and search features using JavaScript.",
      "Designed and maintained databases using Flask, SQL, and PostgreSQL.",
    ],
    techStack: ["Vue.js", "HTML5", "JavaScript", "Flask", "PostgreSQL"],
    logo: `${process.env.PUBLIC_URL}/ASU.jpg`,
  },
  {
    title: "Senior Systems Engineer - Infosys",
    date: "May 2018 - Dec 2020",
    description: [
      "Conceptualized and developed a web application using the MEAN stack to optimize space inside shipping containers.",
      "Built a Single Page Application using React and Angular.",
      "Worked extensively on the backend using Java with Spring MVC and Spring Boot-based services through REST.",
    ],
    techStack: ["MEAN Stack", "React", "Angular", "Python"],
    logo: `${process.env.PUBLIC_URL}/Infosys.jpg`,
  },
];

function Experience() {
  return (
    <div className="experience">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-container">
        {experiences.map((item, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-content">
              <div className="job-title">
                <FaBriefcase />
                <h3>{item.title}</h3>
              </div>
              <p className="date">
                <FaCalendarAlt /> {item.date}
              </p>
              <ul className="job-description">
                {item.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {item.techStack.map((tech, idx) => (
                  <span className="tech-tag" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="company-logo-container">
              <img src={item.logo} alt={item.title} className="company-logo" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
