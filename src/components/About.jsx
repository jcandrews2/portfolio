import React from 'react';
import '../styles/About.css';
import tuneLinkVideo from '../media/tune-link.mov';
import wordleCloneVideo from '../media/wordle-clone.mov';
import spellCheckVideo from '../media/spell-check.mov';
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
  const tech_2 = ['React.js', 'Javascript', 'HTML', 'CSS'];
  const tech_3 = ['Python'];

  return (
    <div className="about-container">
      <div className="bio-section">
        <h1>About Me</h1>
        <img
          src={require('../media/Bio_1.jpg')}
          alt="Bio 1"
          className="bio-image"
        />
        <p>
          Hi! It's James Andrews— but I go by Jimmy. I'm an aspiring software
          developer originally from Kansas City and currently a senior at
          Colorado College. I'm pursuing a Bachelor's degree in Computer Science
          with a minor in Mathematics. I'm proud to combine my academic
          interests with my passion for problem-solving, technology, and
          building innovative solutions with code. Beyond academics, I'm also a
          dedicated athlete and play Division III varsity tennis.
          <br />
          <br />
          I thrive in collaborative environments where I can combine my
          technical skills with creativity to develop meaningful projects. From
          interning at major organizations to building personal coding projects,
          I'm always looking for opportunities to expand my technical expertise
          and explore the latest in software development.
          <br />
          <br />
          Feel free to explore my website to learn more about my professional
          journey, personal projects, and interests. I'm always open to
          connecting, so don't hesitate to reach out via email or LinkedIn!
        </p>
      </div>

      <Divider text="End Content" />

      <div className="project-section">
        <h2>Projects</h2>
        <p>Here's some projects that I've worked on!</p>
        <div className="project-grid">
          <ProjectCard
            title="Tune Link"
            description="Music Recommendation Platform."
            video={tuneLinkVideo}
            technologies={tech_1}
            repo="https://github.com/jcandrews2/tune-link"
          />
          <ProjectCard
            title="Wordle Clone"
            description="Word Guessing Game Remake."
            video={wordleCloneVideo}
            technologies={tech_2}
            repo="https://github.com/jcandrews2/wordle-react"
          />
          <ProjectCard
            title="Spell Check"
            description="Spelling Correction Tool."
            video={spellCheckVideo}
            technologies={tech_3}
            repo="https://github.com/jcandrews2/spell-checker"
          />
        </div>
      </div>

      <Divider />

      <ArtGallery />
    </div>
  );
};

export default About;
