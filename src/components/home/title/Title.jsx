import React from "react";
import "./Title.css";
const Title = ({ title, subTitle }) => {
  return (
    <h1 className="title">
      <span className="title-span-1">{title}</span> {subTitle}
      <span className="title-span-2"></span>
    </h1>
  );
};

export default Title;
