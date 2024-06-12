import React from "react";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-1">
        <div className="aboutme-1-1">
          <h2 className="aboutme-1-1-h">Hello! I'm Alba Ceo</h2>
          <p className="aboutme-1-1-p">
            Web designer from USA, California. I have rich experience in web
            site design and building, also I am good at wordpress. I love to
            talk with you about our unique.
          </p>
        </div>
      </div>
      <div className="aboutme-2">
        <ul className="aboutme-2-ul">
          <li className="aboutRightLi li-1">
            <span className="aboutRightLiSpan">Age:</span>
            <span className="li-1-1">24</span>
          </li>
          <li className="aboutRightLi li-2">
            <span className="aboutRightLiSpan">Residence:</span>
            <span className="li-2-2">USA</span>
          </li>
          <li className="aboutRightLi li-3">
            <span className="aboutRightLiSpan">Freelance:</span>
            <span className="li-3-3">Available</span>
          </li>
          <li className="aboutRightLi li-4">
            <span className="aboutRightLiSpan">Address:</span>
            <span className="li-4-4">California, USA</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
