import React from "react";
import Title from "../../home/title/Title";
import Education from "../education/Education";
import Skills from "../skill/Skills";
import "./Resume.css";
const Resume = () => {
  return (
    <section id="resume" className="resume">
      <Title title="My" subTitle="Resume" />
      <Education />
      <Title title="My" subTitle="Skills" />
      <Skills />
    </section>
  );
};

export default Resume;
