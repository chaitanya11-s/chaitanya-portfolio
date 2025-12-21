import "./styles/SkillsExpertise.css";
import { config } from "../config";

const SkillsExpertise = () => {
  return (
    <div className="skills-expertise">
      <div className="skills-header">
        <h2 className="skills-title">
          SKILLS & <span className="skills-title-accent">EXPERTISE</span>
        </h2>
      </div>
      
      <div className="skills-container">
        {/* Left Column - PRODUCT & ANALYTICS */}
        <div className="skill-column">
          <div className="skill-card">
            <h3 className="skill-title">PRODUCT & ANALYTICS</h3>
            <h4 className="skill-subtitle">Data-driven product decision making and business intelligence</h4>
            <p className="skill-description">
              Translating quantitative insights into product strategy through SQL analysis, KPI tracking, 
              and automated dashboard development. Specializing in requirement gathering, PRD writing, 
              and data storytelling.
            </p>
            <div className="skills-tags">
              {config.skills.develop.tools.map((tool, index) => (
                <div key={index} className="skill-tag">{tool}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - TECHNICAL EXECUTION */}
        <div className="skill-column">
          <div className="skill-card">
            <h3 className="skill-title">TECHNICAL EXECUTION</h3>
            <h4 className="skill-subtitle">Technical implementation and cross-functional collaboration</h4>
            <p className="skill-description">
              Building data pipelines, interactive dashboards, and analytical tools while bridging 
              communication between technical teams and business stakeholders.
            </p>
            <div className="skills-tags">
              {config.skills.design.tools.map((tool, index) => (
                <div key={index} className="skill-tag">{tool}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsExpertise;