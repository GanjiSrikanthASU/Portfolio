import React from "react";
import "../css/About.css";

function About() {
  return (
    <div className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <img
          src={`${process.env.PUBLIC_URL}/Srikanth_Grad_pic.jpg`}
          alt="Srikanth Ganji"
          className="about-photo"
        />
        <p>
          I am a Full Stack Developer with over 5 years of experience in web
          development. I specialize in Java and JavaScript technologies, with a
          strong focus on user experience and design. My passion is to create
          efficient, scalable, and user-friendly applications.
        </p>
        <p>
          I am a passionate front-end developer with extensive experience in
          React.js, Angular, Vue.js, and Django. My enthusiasm for React.js
          drove me to build this portfolio from scratch and continuously enhance
          it with new projects and skills. I am eager to find opportunities
          where I can leverage my front-end expertise to create engaging,
          user-friendly websites in a dynamic and enjoyable work environment.
        </p>
        <div className="achievements">
          <h3>Key Achievements</h3>
          <ul>
            <li>
              Developed a high-traffic e-commerce platform using React and
              Node.js
            </li>
            <li>
              Led a team of developers in a major project at Amazon, enhancing
              user experience for Alexa Echo Show devices
            </li>
            <li>
              Implemented a responsive and intuitive user interface for a
              university's Intelligent Tutoring System
            </li>
          </ul>
        </div>
        <div className="resume-download">
          <a
            href={`${process.env.PUBLIC_URL}/Srikanth_Ganji_Resume.pdf`}
            download="Srikanth_Ganji_Resume.pdf"
            className="download-button"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
