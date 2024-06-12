import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./MyServices.css";
const MyServices = () => {
  return (
    <div className="servicecards">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
    </div>
  );
};

export default MyServices;
