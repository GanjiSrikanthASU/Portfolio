import React, { useEffect, useState } from "react";
import "../css/ProjectDetail.css"; // Add styles for the detailed view

function ProjectDetail({ project }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (project) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [project]);

  if (!project) return null;

  const { description } = project;
  const { project: projDetails } = description;

  return (
    <div className={`project-detail ${isVisible ? "visible" : ""}`}>
      <h2>{project.title}</h2>
      <div className="project-overview">
        <h3>Project Overview</h3>
        <p>{projDetails.overview}</p>
      </div>
      <div className="project-purpose">
        <h3>Purpose</h3>
        <p>{projDetails.purpose}</p>
      </div>
      <div className="project-technologies">
        <h3>Technologies Used</h3>
        <ul>
          {projDetails.technologies_used.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="project-role">
        <h3>Role</h3>
        <p>{projDetails.role}</p>
      </div>
      <div className="project-features">
        <h3>Key Features</h3>
        <ul>
          {projDetails.key_features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectDetail;
