import React from "react";
import "./About.css";
import Title from "../../home/title/Title";
import AboutMe from "../AboutMe/AboutMe";
import FunFact from "../FunFact/FunFact";
import MyServices from "../MyServices/MyServices";

const About = () => {
  return (
    <section id="about" className="about">
      <Title title="About" subTitle="Me" />
      <AboutMe />
      <Title title="My" subTitle="Services" />
      <MyServices />
      <Title title="Fun" subTitle="Fact" />
      <FunFact />
    </section>
  );
};

export default About;
