import React from "react";
import ResumeTitle from "../resumetitle/ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "../resumecard/ResumeCard";
import "./Education.css";
const Education = () => {
  return (
    <div className="education">
      <div className="education-1">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Web Developer"
          subTitle="Facebook Inc."
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2011 - 2012"
          title="Front-end Developer"
          subTitle="Google Inc."
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2009 - 2010"
          title="Senior Developer"
          subTitle="ReactBD.com."
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
      </div>
      <div className="education-2">
        <span className="education-2-span"></span>
      </div>
      <div className="">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2012 - 2014"
          title="North South University"
          subTitle="Dhaka"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2015 - 2016"
          title="Programming Course"
          subTitle="UK"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2018 - 2021"
          title="MERN Stack Developer"
          subTitle="Dhaka"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
      </div>
    </div>
  );
};

export default Education;
