import React from "react";
import SkillCard from '../layout/SkillCard';
import AboutMe from "../layout/AboutMe"

function About() {
  return (
    <div id="about">
      {/* <h1>About Page</h1> */}
      <AboutMe />
      <SkillCard />
    </div>
  );
}

export default About;
