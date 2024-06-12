import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../../assets";
import Title from "../../home/title/Title";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import "./Projects.css";
const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="proj">
        <div className="proj-1">
          <ProjectsCard
            title="Blog Website"
            category="Website"
            image={workImgThree}
          />
          <ProjectsCard
            title="Business Card Design"
            category="Design"
            image={workImgOne}
          />
          <ProjectsCard
            title="Infinity Logo"
            category="Logo"
            image={workImgTwo}
          />
          <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          />
        </div>
        <div className="proj-1">
          <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            image={workImgFour}
          />
          <ProjectsCard
            title="Grapic Design"
            category="Design"
            image={workImgSix}
          />
          <ProjectsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          />
          <ProjectsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
