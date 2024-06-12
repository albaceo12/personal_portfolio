import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunFactCard from "../FunFactCard/FunFactCard";
import "./FunFact.css";
const FunFact = () => {
  return (
    <div className="funfacts">
      <FunFactCard icon={<BsTrophyFill />} des="10 Awards Won" />
      <FunFactCard icon={<SiAntdesign />} des="20 Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="100 hours of coding" />
      <FunFactCard icon={<IoLogoYoutube />} des="1.5k Subscription" />
    </div>
  );
};

export default FunFact;
