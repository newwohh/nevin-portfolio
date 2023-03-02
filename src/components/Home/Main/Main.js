import React from "react";
import { Link } from "react-scroll";
import AboutMe from "./AboutMe/AboutMe";
import Collab from "./Collab/Collab";
import Intro from "./Intro/Intro";
import Mentoring from "./Mentoring/Mentoring";
import SkillsCard from "./Skills/Skills";

function Main() {
  return (
    <main>
      <Intro />
      <AboutMe />
      <SkillsCard />
      <Mentoring />
      <Collab />
    </main>
  );
}

export default Main;
