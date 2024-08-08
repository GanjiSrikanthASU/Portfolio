import React from "react";
import "../css/Skills.css";
import skillsData from "../skills.json";

function Skills() {
  return (
    <div className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-card-inner">
              <div className="skill-card-front">
                <h3>{skill.category}</h3>
              </div>
              <div className="skill-card-back">
                <p>{skill.skills.join(", ")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
