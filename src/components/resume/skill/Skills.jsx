import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "../resumetitle/ResumeTitle";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="skills">
      {/* =============== Design and Languages Start here =================== */}
      <div className="skills-1">
        <ResumeTitle title="Design" icon={<SiArtstation />} />
        {/* web Design */}
        <div className="skills-1-1">
          <div className="skills-1-1-1">
            <p className="skills-1-1-1-p">Web Development</p>
            <span className="skills-1-1-1-span">
              <span className="skills-1-1-1-span-span-webdes"></span>
            </span>
          </div>
          {/* web Development */}
          <div className="skills-1-1-1">
            <p className="skills-1-1-1-p">Web Design</p>
            <span className="skills-1-1-1-span">
              <span className="skills-1-1-1-span-span-webdev"></span>
            </span>
          </div>
          {/* Mobile Application */}
          <div className="skills-1-1-1">
            <p className="skills-1-1-1-p">Mobile Application</p>
            <span className="skills-1-1-1-span">
              <span className="skills-1-1-1-span-span-mob"></span>
            </span>
          </div>
          {/* UI Design */}
          <div className="skills-1-1-1">
            <p className="skills-1-1-1-p">UI Design</p>
            <span className="skills-1-1-1-span">
              <span className="skills-1-1-1-span-span-uides"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="skills-2">
        <span className="skills-2-span"></span>
      </div>
      <div className="skills-3">
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        {/* English */}
        <div className="skills-1-1">
          <div className="skills-1-1-1">
            <p className="skills-1-1-1-p">English</p>
            <span className="skills-1-1-1-span">
              <span className="skills-1-1-1-span-span-eng"></span>
            </span>
          </div>
          {/* Persian */}
          <div className="skills-1-1">
            <p className="skills-1-1-1-p">Persian</p>
            <span className="skills-1-1-1-span">
              <span className="skills-1-1-1-span-span-pers"></span>
            </span>
          </div>
          {/* Arabic*/}
          <div className="skills-1-1">
            <p className="skills-1-1-1-p">Arabic</p>
            <span className="skills-1-1-1-span">
              <span className="skills-1-1-1-span-span-arab"></span>
            </span>
          </div>
          {/* French */}
          <div className="skills-1-1">
            <p className="skills-1-1-1-p">French</p>
            <span className="skills-1-1-1-span">
              <span className="skills-1-1-1-span-span-fren"></span>
            </span>
          </div>
        </div>
      </div>
      {/* =============== Design and Languages End here ===================== */}
      {/* =============== Coading and Knowledge Start here ==================== */}
      {/* =============== Coading and Knowledge End here ==================== */}

      <div className="skills-4">
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
        {/* web Design */}
        <div className="skills-1-1">
          <div className="skills-1-1-1">
            <p className="skills-1-1-1-p">JavaScript</p>
            <span className="skills-1-1-1-span">
              <span className="skills-1-1-1-span-span-webdes"></span>
            </span>
          </div>
          {/* web Development */}
          <div className="skills-1-1-1">
            <p className="skills-1-1-1-p">Nodejs</p>
            <span className="skills-1-1-1-span">
              <span className="skills-1-1-1-span-span-webdev"></span>
            </span>
          </div>
          {/* Mobile Application */}
          <div className="skills-1-1-1">
            <p className="skills-1-1-1-p">Reactjs</p>
            <span className="skills-1-1-1-span">
              <span className="skills-1-1-1-span-span-mob"></span>
            </span>
          </div>
          {/* UI Design */}
          <div className="skills-1-1-1">
            <p className="skills-1-1-1-p">TypeScript</p>
            <span className="skills-1-1-1-span">
              <span className="skills-1-1-1-span-span-uides"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="skills-2">
        <span className="skills-2-span"></span>
      </div>
      <div className="skills-5">
        <ResumeTitle title="Knowledge" icon={<IoIosPaper />} />
        {/* English */}
        <ul className="skills-5-1">
          <li className="skills-5-1-li">
            <span className="skills-5-1-span">
              <GiCheckMark />
            </span>
            Website hosting
          </li>
          <li className="skills-5-1-li">
            <span className="skills-5-1-span">
              <GiCheckMark />
            </span>
            iOS and android apps
          </li>
          <li className="skills-5-1-li">
            <span className="skills-5-1-span">
              <GiCheckMark />
            </span>
            Create logo design
          </li>
          <li className="skills-5-1-li">
            <span className="skills-5-1-span">
              <GiCheckMark />
            </span>
            Design for print
          </li>
          <li className="skills-5-1-li">
            <span className="skills-5-1-span">
              <GiCheckMark />
            </span>
            Modern and mobile-ready
          </li>
          <li className="skills-5-1-li">
            <span className="skills-5-1-span">
              <GiCheckMark />
            </span>
            Advertising services include
          </li>
          <li className="skills-5-1-li">
            <span className="skills-5-1-span">
              <GiCheckMark />
            </span>
            Graphics and animations
          </li>
          <li className="skills-5-1-li">
            <span className="skills-5-1-span">
              <GiCheckMark />
            </span>
            Search engine marketing
          </li>
        </ul>
      </div>
      {/* =============== Design and Languages End here ===================== */}
    </div>
  );
};

export default Skills;
