import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <p className="para" style={{ 
          wordSpacing: 'normal', 
          letterSpacing: 'normal', 
          whiteSpace: 'normal' 
        }}>
          {config.about.description}
        </p>
      </div>
    </div>
  );
};

export default About;