import React from "react";
import "./ResumeTitle.css";
const ResumeTitle = ({ icon, title }) => {
  return (
    <h1 className="resumetitle">
      <span className="resumetitle-span">{icon}</span>
      {title}
    </h1>
  );
};

export default ResumeTitle;
