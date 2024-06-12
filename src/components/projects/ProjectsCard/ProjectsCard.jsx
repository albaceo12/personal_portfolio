import React from "react";
import "./ProjectsCard.css";
const ProjectsCard = ({ image, title, category }) => {
  return (
    <div className="projcard">
      <div className="projcard-div">
        <img className="projcard-div-img" src={image} alt="ImageOne" />
        <div className="projcard-div-div"></div>
      </div>
      <h3 className="projcard-h3">{title}</h3>
      <p className="projcard-p">{category}</p>
    </div>
  );
};

export default ProjectsCard;
