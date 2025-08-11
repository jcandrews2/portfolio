import React from 'react';
import '../styles/About.css';
import vibesbasedVideo from '../media/vibesbased2.mov';
import afkTrackerVideo from '../media/afk-tracker2.mov';
import spellCheckVideo from '../media/spell-check.mov';
import vibesbasedImage from '../media/vibesbased.jpg';
import afkTrackerImage from '../media/afk-tracker.jpg';
import spellCheckImage from '../media/spell-check.jpg';
import ProjectCard from './ProjectCard';
import ArtGallery from './ArtGallery';
import Divider from './Divider';
import Timeline from './Timeline';

const About = () => {
  const tech_1 = [
    'React',
    'TypeScript',
    'Tailwind',
    'Spring Boot',
    'PostgreSQL',
    'Docker',
    'AWS',
  ];
  const tech_2 = [
    'React',
    'Javascript',
    'Tailwind',
    'Flask',
    'Python',
    'MySQL',
    'Azure',
  ];
  const tech_3 = ['Python'];

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <section className="bio-section">
        <img
          src={require('../media/Bio_1.jpg')}
          alt="Bio 1"
          className="bio-image"
        />
        <p>
          👋 Hi! my name is James Andrews, but I go by Jimmy. I'm a recent
          Colorado College graduate with a degree in computer science and a
          minor in mathematics, excited about building full-stack applications.
          I took my first coding class in high school. Despite not knowing
          anything about the subject going in, I quickly grew fond of it. I'm a
          builder and problem-solver at heart, and I love that programming gives
          me the toolset to solve real problems.
          <br />
          <br />
          My experience spans internships, personal projects, research, and
          academics. I'm currently looking for a new opportunity in full-stack
          development to apply my skills and learn in a team-oriented
          environment.
          <br />
          <br />I created this website with React, JavaScript, HTML, and CSS.
          Feel free to explore it to learn more about my professional
          experience, projects, and interests. I'm always open to connecting, so
          don't hesitate to reach out via my phone number, email, or LinkedIn!
        </p>
      </section>

      <Divider text="End Content" />

      <Timeline />

      <Divider />

      <section className="project-section">
        <h2>Projects</h2>
        <p>Here are some of my personal favorite projects.</p>
        <div className="project-grid">
          <ProjectCard
            title="Vibesbased"
            description="AI-Powered Text-to-Music Recommendation Web App."
            image={vibesbasedImage}
            video={vibesbasedVideo}
            technologies={tech_1}
            repo="https://github.com/jcandrews2/vibesbased"
          />
          <ProjectCard
            title="AFK Tracker"
            description="College Esports Stat Tracking Platform."
            image={afkTrackerImage}
            video={afkTrackerVideo}
            technologies={tech_2}
            repo="https://github.com/jcandrews2/senior-capstone-project"
          />
          <ProjectCard
            title="Spell Check"
            description="CLI Similar Word Spelling Correction Tool."
            image={spellCheckImage}
            video={spellCheckVideo}
            technologies={tech_3}
            repo="https://github.com/jcandrews2/spell-check"
          />
        </div>
      </section>

      <Divider />

      <ArtGallery />
    </div>
  );
};

export default About;
