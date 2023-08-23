import React from "react";

const About = () => {
  return (
    <div className="about">
      <img
        src={require("../images/Portrait.jpeg")}
        id="portrait"
        alt="Portrait"
      />
      <div className="about-text">
        <h1 id="about-header"> About James Andrews</h1>
        <p>
          Hi! It's James Andrews— but I go by Jimmy. I was born and raised in
          Kansas City, Missouri. I'm currently in my junior year pursuing a B.A.
          in Computer Science. I attend Colorado College in Colorado Springs
          where I play collegiate tennis at the NCAA Division III level.
          <br />
          <br />
          My interests include problem solving, technology, gaming, and building
          things with code. Explore my website to learn more about my
          professional experience. Feel free to reach out to me via email or
          through LinkedIn!
        </p>
      </div>
    </div>
  );
};

export default About;
