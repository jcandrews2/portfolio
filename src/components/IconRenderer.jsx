import React, { useState } from 'react';
import '../styles/IconRenderer.css';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiFlask,
  SiMysql,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiDocker,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

const IconRenderer = ({ technologies }) => {
  const [hoveredTech, setHoveredTech] = useState('');

  const handleMouseEnter = (tech) => {
    setHoveredTech(tech);
  };

  const handleMouseLeave = () => {
    setHoveredTech('');
  };

  const techIcons = {
    'React.js': <SiReact size={30} />,
    'React': <SiReact size={30} />,
    'Javascript': <SiJavascript size={30} />,
    'TypeScript': <SiTypescript size={30} />,
    'HTML': <SiHtml5 size={30} />,
    'CSS': <SiCss3 size={30} />,
    'MongoDB': <SiMongodb size={30} />,
    'Node.js': <SiNodedotjs size={30} />,
    'Python': <SiPython size={30} />,
    'Flask': <SiFlask size={30} />,
    'MySQL': <SiMysql size={30} />,
    'Tailwind': <SiTailwindcss size={30} />,
    'Spring Boot': <SiSpringboot size={30} />,
    'PostgreSQL': <SiPostgresql size={30} />,
    'Docker': <SiDocker size={30} />,
    'AWS': <FaAws size={30} />,
    'Azure': <VscAzure size={30} />,
  };

  return (
    <div>
      <div className="tech-container">
        <h5>Technologies:</h5>
        {hoveredTech && <span className="tech-names">{hoveredTech}</span>}
      </div>
      <div className="tech-icons">
        {technologies.map((tech) =>
          techIcons[tech] ? (
            <div
              key={tech}
              className="tech-icon"
              onMouseEnter={() => handleMouseEnter(tech)}
              onMouseLeave={handleMouseLeave}
            >
              {techIcons[tech]}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default IconRenderer;
