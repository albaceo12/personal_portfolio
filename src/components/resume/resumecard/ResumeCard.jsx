import React from "react";
import "./ResumeCard.css";
const ResumeCard = ({ badge, title, subTitle, des }) => {
  return (
    <div className="resumecard">
      {badge === "" ? (
        <h6 className="resumecard-no-badge">2013-Present</h6>
      ) : (
        <h6 className="resumecard-badge">{badge}</h6>
      )}
      <h2 className="resumecard-h2">{title}</h2>
      <p className="resumecard-p-1">{subTitle}</p>
      <p className="resumecard-p-2">{des}</p>
    </div>
  );
};

export default ResumeCard;
