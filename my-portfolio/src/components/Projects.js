import React, { useState, useEffect } from "react";
import ProjectDetail from "./ProjectDetail";
import "../css/Projects.css";
import projectsData from "../projectsData.json"; 

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {}, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="projects-container">
      <div className="projects-list">
        <h2 className="section-title">Academic Projects</h2>
        <div className="projects">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-card-inner">
                <div className="project-card-front">
                  <h3>{project.title}</h3>
                </div>
                <div className="project-card-back">
                  <p>{project.technologies}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectDetail project={selectedProject} />
    </div>
  );
}

export default Projects;
