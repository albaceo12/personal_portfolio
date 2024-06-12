import React from "react";
import "./ServicesCard.css";
const ServicesCard = ({ icons, title, subTitle }) => {
  return (
    <div className="servicescard-div">
      <span className="servicescard-div-span">{icons}</span>
      <h2 className="servicescard-div-h2">{title}</h2>
      <p className="servicescard-div-p">{subTitle}</p>
    </div>
  );
};

export default ServicesCard;
