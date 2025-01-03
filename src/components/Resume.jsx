import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <section>
        <h2>Education</h2>
        <div>
          <h3>Colorado College</h3>
          <p>Colorado Springs, CO</p>
          <p>B.A.: Major: Computer Science, Minor: Math</p>
          <p>May 2025</p>
          <p>3.88/4.00 Cumulative GPA, 3.95/4.00 Major Specific GPA</p>
          <p>
            Relevant Coursework: Data Structures and Algorithms, Software
            Design, Theory and Practice of Database Management, Natural Language
            Processing, Optimization and Deep Learning, Computer Organization
          </p>
        </div>
      </section>

      <section>
        <h2>Work Experience</h2>
        <div>
          <h3>Digital Products Intern</h3>
          <p>
            Andrews McMeel Universal | Kansas City, MO | July 2022 – August 2022
          </p>
          <ul>
            <li>
              Refactored global buttons and alerts components for the new
              GoComics.com website using React.js, Javascript, HTML, and CSS
            </li>
            <li>
              Researched and implemented an example of Prism to mock API data
              for the frontend team
            </li>
            <li>
              Found and logged bugs for Kenken and Thematik games on the
              PuzzleSociety.com website
            </li>
            <li>
              Shadowed DevOps onboarding meetings to gain an understanding of
              cloud-hosting and CI/CD pipelines
            </li>
            <li>Participated in daily standup meetings</li>
          </ul>
        </div>

        <div>
          <h3>Project Coordinator - Product and Technology Intern</h3>
          <p>T-Mobile | Overland Park, KS | May 2023 – August 2023</p>
          <ul>
            <li>
              Produced and shared daily task reports that contributed to a 50%
              reduction in overdue production support tickets
            </li>
            <li>
              Gained proficiency in the CyberArk onboarding process and assisted
              employees with secure account setup
            </li>
            <li>
              Maintained Jira documentation for the Identity Security Access
              Management team (ISAM)
            </li>
          </ul>
        </div>

        <div>
          <h3>Research Assistant</h3>
          <p>
            Colorado College | Colorado Springs, CO | December 2024 – Present
          </p>
          <ul>
            <li>
              Building a web-scraper in Python to collect data for research on
              the perception of robot gender
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div>
          <h3>Tune Link - Music Recommendation Platform</h3>
          <p>
            <a href="#">GitHub Repository</a>
          </p>
          <ul>
            <li>
              Created a full stack web application that integrates Spotify’s and
              OpenAI’s APIs to produce song recommendations based on previously
              liked and disliked songs
            </li>
            <li>
              Utilized MongoDB and Express.js to store and retrieve
              user-specific data for the front-end
            </li>
            <li>
              Built a responsive user interface using React.js, Javascript,
              HTML, and Tailwind CSS
            </li>
          </ul>
        </div>

        <div>
          <h3>Wordle Clone - Word Guessing Game Remake</h3>
          <p>
            <a href="#">GitHub Repository</a>
          </p>
          <ul>
            <li>
              Developed a remake of Wordle using React.js, Javascript, HTML, and
              CSS
            </li>
            <li>Utilized a JSON server to fetch and manage secret words</li>
          </ul>
        </div>

        <div>
          <h3>Spell Check - Spelling Correction Tool</h3>
          <p>
            <a href="#">GitHub Repository</a>
          </p>
          <ul>
            <li>
              Built a spelling correction tool in Python to suggest words that
              are closest in spelling to misspelled ones
            </li>
            <li>
              Implemented the Levenshtein distance algorithm to calculate the
              edit distance between words and a BK-tree to structure the data
              and ensure efficient similar word lookups
            </li>
            <li>
              Conducted benchmark tests to evaluate the program's performance at
              varying dictionary sizes
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Skills and Interests</h2>
        <div>
          <h3>Languages</h3>
          <p>Python, Java, C, Javascript, HTML, CSS, MySQL, MongoDB</p>
          <h3>Tools/Frameworks</h3>
          <p>React.js, Jira, Confluence, Agile methodologies</p>
          <h3>Extracurriculars</h3>
          <p>
            Computer Science Grader, Research Assistant, DIII Varsity Tennis,
            Student Athlete Advisory Committee (SAAC)
          </p>
          <h3>Interests</h3>
          <p>
            Tennis, Machine Learning, Hiking, Skiing, 2D Design, Chess, Ice
            Hockey
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
