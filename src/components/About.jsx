import React from 'react';
import '../styles/About.css';
import tuneLinkVideo from '../media/tune-link.mov';
import afkTrackerVideo from '../media/afk-tracker.mov';
import spellCheckVideo from '../media/spell-check.mov';
import tuneLinkImage from '../media/tune-link.jpg';
import afkTrackerImage from '../media/afk-tracker.jpg';
import spellCheckImage from '../media/spell-check.jpg';
import ProjectCard from './ProjectCard';
import ArtGallery from './ArtGallery';
import Divider from './Divider';

const About = () => {
  const tech_1 = [
    'React.js',
    'Javascript',
    'Node.js',
    'HTML',
    'CSS',
    'MongoDB',
  ];
  const tech_2 = [
    'React.js',
    'Javascript',
    'HTML',
    'CSS',
    'Flask',
    'Python',
    'MySQL',
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
          Hi! My name is James Andrews, but I go by Jimmy. I'm a software
          developer originally from Kansas City. Currently, I'm a senior at
          Colorado College (CC), where I'm pursuing a bachelor's degree in
          computer science and a minor in mathematics. I took my first coding
          class in high school. Despite not knowing anything about the subject
          going in, I quickly grew fond of it. I'm a builder and problem-solver
          at heart, and I love that programming gives me the toolset to solve
          real problems. I'm most passionate about fullstack development and
          machine learning, and I'm exploring opportunities to apply my skills
          in these fields as I transition into my career following graduation
          this spring.
          <br />
          <br />
          I do best in collaborative environments where I can combine my
          technical skills with my creativity and organizational skills. I've
          demonstrated these skills at CC, through the projects I've undertaken,
          and during my internships as a software engineer and project
          coordinator.
          <br />
          <br />I created this website using React.js, JavaScript, HTML, and
          CSS. Please feel free to explore it to learn more about my
          professional experience, projects, and interests. I'm always open to
          connecting, so don't hesitate to reach out via my phone number, email,
          or LinkedIn!
        </p>
      </section>

      <Divider text="End Content" />

      <section className="project-section">
        <h2>Projects</h2>
        <p>
          Here are some of my personal favorite projects that I've worked on!
        </p>
        <div className="project-grid">
          <ProjectCard
            title="Tune Link"
            description="Music Recommendation Platform."
            image={tuneLinkImage}
            video={tuneLinkVideo}
            technologies={tech_1}
            repo="https://github.com/jcandrews2/tune-link"
          />
          <ProjectCard
            title="AFK Tracker"
            description="Esports Stat Tracking Platform."
            image={afkTrackerImage}
            video={afkTrackerVideo}
            technologies={tech_2}
            repo="https://github.com/jcandrews2/senior-capstone-project"
          />
          <ProjectCard
            title="Spell Check"
            description="Spelling Correction Tool."
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
