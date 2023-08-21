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
          Hi! My name is James Andrews, but I go by Jimmy. I was born and raised
          in Kansas City, Missouri. I'm currently in my junior year pursuing a
          B.A. in Computer Science at Colorado College in Colorado Springs and I
          also play tennis at the NCAA Division III level.
          <br />
          <br />
          My interests lie in problem solving and building. Explore my website
          to see my professional experience, contact information, or visit my
          LinkedIn. Feel free to reach out!
        </p>
      </div>
    </div>
  );
};

export default About;
