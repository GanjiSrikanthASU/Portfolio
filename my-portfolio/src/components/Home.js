import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <img
        src={`${process.env.PUBLIC_URL}/Srikanth_Grad_pic.jpg`}
        alt="Profile"
        className="profile-picture"
      />
      <h1>Srikanth Ganji</h1>
      <p className="title">Full Stack Developer</p>
      <p className="welcome-text">
        Welcome to my portfolio! Explore my work, experience, and projects.
      </p>
      <div className="home-links">
        <Link to="/projects" className="home-link">
          View My Work
        </Link>
        <Link to="/contact" className="home-link">
          Contact
        </Link>
      </div>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/Srikanth-Ganji-09041996"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/GanjiSrikanthASU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Home;
