import React from 'react';
import '../styles/Timeline.css';

const Timeline = () => {
  const experiences = [
    {
      year: 'January 2025 - May 2025',
      title: 'Undergraduate Research Assistant',
      company: 'Colorado College',
      summary:
        'Research on gendered language in robotics using Python and web scraping technologies.',
    },
    {
      year: 'August 2024 - May 2025',
      title: 'Computer Science Grader',
      company: 'Colorado College',
      summary:
        'Provided code review and feedback for introductory CS students, focusing on code quality and best practices.',
    },
    {
      year: 'May 2023 - August 2023',
      title: 'Project Coordinator - Product and Technology Intern',
      company: 'T-Mobile',
      summary:
        'Managed technical documentation and access management processes, improving team efficiency and security compliance.',
    },
    {
      year: 'July 2022 - August 2022',
      title: 'Software Engineer Intern',
      company: 'Andrews McMeel Universal',
      summary:
        'Enhanced web components and implemented testing infrastructure for a platform serving 5M+ monthly users.',
    },
  ];

  return (
    <section className="timeline-section">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-year">{exp.year}</div>
              <h4 className="company-name">{exp.company}</h4>
              <p className="job-title">{exp.title}</p>
              <p className="job-summary">{exp.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
