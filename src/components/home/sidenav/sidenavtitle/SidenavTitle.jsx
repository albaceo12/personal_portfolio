import React from "react";
import "./SidenavTitle.css";
const SidenavTitle = ({ title, subTitle }) => {
  return (
    <h1 className="sidenavtitle">
      <span className="sidenavtitle-span-1">{title}</span>
      {subTitle}
      <span className="sidenavtitle-span-2"></span>
    </h1>
  );
};

export default SidenavTitle;
