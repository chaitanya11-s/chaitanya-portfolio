import "./styles/Skills.css";
import { config } from "../config";

const Skills = () => {
  return (
    <div className="skills-section section-container" id="skills">
      <div className="skills-container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>{config.skills.develop.title}</h3>
            <p className="skill-description">{config.skills.develop.description}</p>
            <p className="skill-details">{config.skills.develop.details}</p>
            <div className="skills-list">
              {config.skills.develop.tools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>{config.skills.design.title}</h3>
            <p className="skill-description">{config.skills.design.description}</p>
            <p className="skill-details">{config.skills.design.details}</p>
            <div className="skills-list">
              {config.skills.design.tools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;