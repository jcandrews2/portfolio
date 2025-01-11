import React from 'react';
import '../styles/ProjectCard.css';
import IconRenderer from './IconRenderer';
import VideoModal from './VideoModal';

const ProjectCard = (props) => {
  const { title, description, image, video, technologies, repo } = props;

  return (
    <div className="project-card">
      <VideoModal
        videoSrc={video}
        thumbnailSrc={image}
        altText="Project Video"
      />
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech-icons">
        <IconRenderer technologies={technologies} />
      </div>

      <a href={repo} target="_blank" rel="noopener noreferrer">
        View Repository
      </a>
    </div>
  );
};

export default ProjectCard;
