import React from "react";
import "./FunFactCard.css";
const FunFactCard = ({ icon, des }) => {
  return (
    <div className="funfactcard">
      <div className="funfactcard-div">
        <span className="funfactcard-span">{icon}</span>
        <p className="funfactcard-p">{des}</p>
      </div>
    </div>
  );
};

export default FunFactCard;
