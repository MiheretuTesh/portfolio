import React from "react";
import SkillCards from '../layout/SkillCards';
import AboutMe from "../layout/AboutMe"

function About() {
  return (
    <div id="about">
      {/* <h1>About Page</h1> */}
      <AboutMe />
      <SkillCards />
    </div>
  );
}

export default About;
