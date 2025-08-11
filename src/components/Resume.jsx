import React from 'react';
import '../styles/Resume.css';
import Divider from './Divider';
import Andrews_James_Resume from '../media/Andrews_James_Resume.pdf';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Resume</h1>

      <section className="download-section">
        <a
          href={Andrews_James_Resume}
          download="Andrews_James_Resume.pdf"
          className="resume-download"
        >
          Download Resume
        </a>
      </section>

      <section className="education-container">
        <h2>Education</h2>
        <div className="experience-item">
          <div className="header-row">
            <h3>Colorado College</h3>
            <span className="location-date">Colorado Springs, CO</span>
          </div>
          <p>Bachelor of Arts in Computer Science with Distinction</p>
          <p>Minor in Math</p>
          <p>Graduated May 2025</p>
          <p className="gpa-line">
            <b>3.90/4.00 GPA</b> | Cum Laude
          </p>
        </div>
      </section>

      <Divider />

      <section className="skills-container">
        <h2>Skills</h2>
        <div>
          <h3>Languages</h3>
          <p>Python, Typescript/JavaScript, Java, SQL, C, HTML, CSS</p>
          <h3>Libraries & Frameworks</h3>
          <p>
            React, Spring Boot, Flask, Express, Node, Tailwind, NumPy, REST API
          </p>
          <h3>Tools & Methodologies</h3>
          <p>
            Git/Github, Docker, AWS EC2, MySQL, PostgreSQL, MongoDB, Jira,
            Agile, Cursor
          </p>
        </div>
      </section>

      <Divider />

      <section className="experience-container">
        <h2>Relevant Work Experience</h2>

        <div className="experience-item">
          <div className="header-row">
            <div className="header-row-content">
              <h3 className="company-name">Colorado College</h3>
              <p className="job-title">Undergraduate Research Assistant</p>
            </div>
            <span className="location-date">January 2025 - May 2025</span>
          </div>
          <ul>
            <li>
              Scraped 250+ active robot webpages using Playwright to support
              research on gendered language in robotics
            </li>
            <li>
              Developed a Python program to aggregate gendered pronoun data
              using LingMess for coreference resolution
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="header-row">
            <div className="header-row-content">
              <h3 className="company-name">Colorado College</h3>
              <p className="job-title">Computer Science Grader</p>
            </div>
            <span className="location-date">August 2024 - May 2025</span>
          </div>
          <ul>
            <li>
              Assessed coding assignments against learning objectives for an
              introductory CS course
            </li>
            <li>
              Provided constructive feedback offering insights on code
              correctness and style to 30+ students
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="header-row">
            <div className="header-row-content">
              <h3 className="company-name">T-Mobile</h3>
              <p className="job-title">
                Project Coordinator - Product and Technology Intern
              </p>
            </div>
            <span className="location-date">May 2023 - August 2023</span>
          </div>
          <ul>
            <li>
              Produced daily task reports that contributed to a 50% reduction in
              overdue production support tickets
            </li>
            <li>
              Unblocked 40+ technical employees by assisting them with secure
              account setup on CyberArk
            </li>
            <li>
              Wrote Confluence documentation for reference in resolving common
              issues for Identity Access Management
            </li>
            <li>
              Tracked work for 10+ contractors in Jira to ensure accurate
              monthly wages
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="header-row">
            <div className="header-row-content">
              <h3 className="company-name">Andrews McMeel Universal</h3>
              <p className="job-title">Software Engineer Intern</p>
            </div>
            <span className="location-date">July 2022 - August 2022</span>
          </div>
          <ul>
            <li>
              Refactored React button and alert components to improve
              consistency for GoComic's 5M+ monthly users
            </li>
            <li>
              Researched and implemented Prism to mock API responses,
              facilitating faster frontend development
            </li>
            <li>
              Discovered and logged 4 critical bugs in Kenken and Thematik games
              on the PuzzleSociety website
            </li>
            <li>
              Shadowed DevOps to build foundational knowledge of cloud hosting
              and CI/CD pipeline processes
            </li>
          </ul>
        </div>
      </section>

      <Divider />

      <section className="projects-container">
        <h2>Projects</h2>

        <div className="project-item">
          <div className="header-row">
            <div className="header-row-content">
              <h3>
                Vibesbased | AI-Powered Text-to-Music Recommendation Web App
              </h3>
              <p className="tech-stack">
                React, Typescript, Tailwind CSS, Zustand, Java, Spring Boot,
                PostgreSQL, Docker, AWS EC2, AWS Route 53, Caddy
              </p>
            </div>
            <div className="project-links">
              <a
                href="https://drive.google.com/file/d/1b4xA2UIHI--DB3OKLzutXjEec---Lpse/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href="https://github.com/jcandrews2/vibesbased"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <ul>
            <li>
              Developed a recommendation pipeline combining OpenAI's, Spotify's,
              and LastFM's APIs with heuristics
            </li>
            <li>
              Designed and implemented an animated music player using Spotify's
              Web SDK and Framer Motion
            </li>
            <li>
              Shipped the fully containerized application to serve 100+ unique
              users
            </li>
          </ul>
        </div>

        <div className="project-item">
          <div className="header-row">
            <div className="header-row-content">
              <h3>AFK Tracker | Esports Stat Tracking Platform</h3>
              <p className="tech-stack">
                React, Javascript, Tailwind CSS, Python, Flask, MySQL, Azure VM
              </p>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/jcandrews2/senior-capstone-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <ul>
            <li>
              Developed a stat tracking platform for the Southern Collegiate
              Athletic Conference's DIII esports league
            </li>
            <li>
              Automated the extraction and display of gameplay data to reduce
              hours of manual input
            </li>
            <li>
              Built stat displays (weekly, monthly, seasonal) and the
              account/roster management systems end to end
            </li>
            <li>Led design of the full user interface in Figma</li>
          </ul>
        </div>
      </section>

      <Divider />

      <section className="coursework-interests-container">
        <h2>Coursework and Interests</h2>
        <div>
          <h3>Relevant Coursework</h3>
          <p>
            Data Structures and Algorithms, Software Design, Theory and Practice
            of Database Management, Natural Language Processing, Optimization
            and Deep Learning, Computer Organization
          </p>
          <h3>Extracurriculars</h3>
          <p>DIII Varsity Tennis, Student Athlete Advisory Committee</p>
          <h3>Interests</h3>
          <p>
            Full-stack Development, AI/ML, Tennis, Videogames, Drawing, Chess,
            Ice Hockey
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
