import React from 'react';
import '../styles/Resume.css';
import Divider from './Divider';
import Andrews_James_Resume from '../media/Andrews_James_Resume.pdf';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Resume</h1>

      <a
        href={Andrews_James_Resume}
        download="Andrews_James_Resume.pdf"
        className="resume-download"
      >
        Download Resume
      </a>

      <section className="education-container">
        <h2>Education</h2>
        <div>
          <h3>Colorado College</h3>
          <p>Colorado Springs, CO</p>
          <p>B.A. in Computer Science, Minor: Math</p>
          <p>Graduating May 2025</p>
          <p>
            <b>3.89/4.00</b> Cumulative GPA, <b>3.95/4.00</b> Major Specific GPA
            | Dean's List
          </p>
          <p>
            <b>Relevant Coursework:</b> Data Structures and Algorithms, Software
            Design, Theory and Practice of Database Management, Natural Language
            Processing, Optimization and Deep Learning, Computer Organization
          </p>

          <h2>Skills</h2>
          <div>
            <h3>Languages</h3>
            <p>Python, Java, C, JavaScript, HTML, CSS, MySQL</p>
            <h3>Tools/Frameworks</h3>
            <p>React.js, Git, Jira, Confluence, Agile, Cursor, Claude</p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="experience-container">
        <h2>Work Experience</h2>

        <div>
          <h3>Research Assistant</h3>
          <p>
            Colorado College | Colorado Springs, CO | December 2024 - Present
          </p>
          <ul>
            <li>
              Building a web-scraper in <b>Python</b> to collect data for
              research on the perception of robot gender
            </li>
          </ul>
        </div>

        <div>
          <h3>Project Coordinator - Product and Technology Intern</h3>
          <p>T-Mobile | Overland Park, KS | May 2023 - August 2023</p>
          <ul>
            <li>
              Produced and shared daily task reports that contributed to a
              <b> 50% reduction</b> in overdue production support tickets
            </li>
            <li>
              Gained proficiency in the CyberArk onboarding process and
              <b> assisted 40+</b> employees with secure account setup,
              unblocking them to continue work
            </li>
            <li>
              Maintained <b>Jira</b> documentation for the Identity Security
              Access Management (ISAM) team
            </li>
          </ul>
        </div>

        <div>
          <h3>Software Engineer Intern</h3>
          <p>
            Andrews McMeel Universal | Kansas City, MO | July 2022 - August 2022
          </p>
          <ul>
            <li>
              Refactored global buttons and alerts components using
              <b> React.js</b>, <b>JavaScript</b>, <b>HTML</b>, and <b>CSS </b>
              for the new GoComics.com website
            </li>
            <li>
              Researched and implemented Prism to <b>mock API data </b> for the
              frontend team
            </li>
            <li>
              Found and logged bugs for Kenken and Thematik games on
              PuzzleSociety.com
            </li>
            <li>
              Shadowed DevOps onboarding meetings to understand cloud-hosting
              and CI/CD pipelines
            </li>
          </ul>
        </div>

        <div>
          <h3>Computer Science Grader</h3>
          <p>Colorado College | Colorado Springs, CO | August 2024 - Present</p>
        </div>

        <div>
          <h3>Tennis Professional</h3>
          <p>Woodside | Kansas City, KS | June 2024 - August 2024</p>
        </div>

        <div>
          <h3>Tennis Instructor</h3>
          <p>
            Indian Hills Country Club | Mission Hills, KS | June 2021 - August
            2021
          </p>
        </div>

        <div>
          <h3>Volunteer</h3>
          <p>
            St. Paul's Food Pantry | Kansas City, MO | January 2017 - December
            2020
          </p>
        </div>
      </section>

      <Divider />

      <section className="projects-container">
        <h2>Projects</h2>

        <div>
          <h3>AFK Tracker - Esports Stat Tracking Platform</h3>
          <p>
            <a
              href="https://github.com/jcandrews2/senior-capstone-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </p>
          <ul>
            <li>
              Developed a stat tracking website for the{' '}
              <b>Southern Collegiate Athletic Conference (SCAC)</b>, enabling
              teams to upload video game endgame reports to be processed with
              OCR and displayed for analysis
            </li>
            <li>
              Built features with <b> React.js</b>, <b>JavaScript</b>,
              <b> HTML</b>, <b>CSS</b>, <b>Flask</b>, <b>Python</b>, and
              <b> MySQL</b>
            </li>
            <li>Designed the user interface using Figma</li>
          </ul>
        </div>

        <div>
          <h3>Tune Link - Music Recommendation Platform</h3>
          <p>
            <a
              href="https://github.com/jcandrews2/tune-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </p>
          <ul>
            <li>
              Built a full-stack web app that integrates <b>Spotify</b> and
              <b> OpenAI APIs</b> for music recommendations
            </li>
            <li>
              Used <b>MongoDB</b> and <b>Express.js</b> for backend storage and
              data retrieval
            </li>
            <li>
              Created a responsive UI using <b>React.js</b>, <b>JavaScript</b>,
              <b> HTML</b>, and <b>Tailwind CSS</b>
            </li>
          </ul>
        </div>

        <div>
          <h3>Spell Check - Spelling Correction Tool</h3>
          <p>
            <a
              href="https://github.com/jcandrews2/spell-check"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </p>
          <ul>
            <li>
              Built a spelling correction tool in <b>Python</b> to suggest
              similar words using Levenshtein distance and BK-tree
            </li>
            <li>Benchmarked performance across dictionary sizes</li>
          </ul>
        </div>

        <div>
          <h3>Wordle Clone - Word Guessing Game Remake</h3>
          <p>
            <a
              href="https://github.com/jcandrews2/wordle-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </p>
          <ul>
            <li>
              Rebuilt Wordle using <b>React.js</b>, <b>JavaScript</b>,{' '}
              <b>HTML</b>, and <b>CSS</b>
            </li>
            <li>
              Integrated a <b>JSON server</b> to manage and fetch word lists
            </li>
          </ul>
        </div>

        <div>
          <h3>Portfolio Website</h3>
          <p>
            <a
              href="https://github.com/jcandrews2/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </p>
          <ul>
            <li>
              Developed personal site using <b>React.js</b>, <b>JavaScript</b>,{' '}
              <b>HTML</b>, and <b>CSS</b>
            </li>
          </ul>
        </div>

        <div>
          <h3>Particle Swarm Optimization Adaptation</h3>
          <p>
            <a
              href="https://github.com/ColoradoCollege-MathCS/neural_tsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </p>
          <ul>
            <li>
              Adapted and implemented <b>PSO</b> to solve{' '}
              <b>Traveling Salesperson Problem (TSP)</b>
            </li>
            <li>
              Used <b>coordinate descent</b> and visualization to find optimal
              PSO parameters
            </li>
          </ul>
        </div>

        <div>
          <h3>Frogger Game Adaptation</h3>
          <p>
            <a
              href="https://github.com/mustafasameen/CrossyRoads"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </p>
          <ul>
            <li>
              Built an adaptation of Frogger/Crossy Roads using <b>Java</b> and{' '}
              <b>Java Swing</b>
            </li>
          </ul>
        </div>
      </section>

      <Divider />

      <section className="interests-container">
        <h2>Interests</h2>
        <div>
          <h3>Extracurriculars</h3>
          <p>
            Computer Science Grader, Research Assistant, DIII Varsity Tennis,
            Student Athlete Advisory Committee (SAAC)
          </p>
          <h3>Interests</h3>
          <p>
            Front-end Development, Tennis, Machine Learning, Hiking, Skiing, 2D
            Art, Chess, Ice Hockey
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
