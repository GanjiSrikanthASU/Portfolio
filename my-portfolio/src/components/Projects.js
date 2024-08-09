import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import "../css/Projects.css";
import projectsData from "../projectsData.json";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(null); // Reset the detail
    setTimeout(() => setSelectedProject(project), 0); // Set the selected project after a brief delay
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
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* Render ProjectDetail only if a project is selected */}
      {selectedProject && <ProjectDetail project={selectedProject} />}
    </div>
  );
}

export default Projects;
