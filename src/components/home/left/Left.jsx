import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../../assets/resume.pdf";
import { bannerImg } from "../../../assets/index";
import "./Left.css";
const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "UI Designer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="left-l">
      <div className="left-l-1">
        <img
          className="left-l-1-img"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="left-l-2">
        <div className="left-l-2-txt">
          <h1 className="left-l-2-txt-h">Alba Ceo</h1>
          <p className="left-l-2-txt-p">
            {text}
            <Cursor cursorBlinking="true" cursorStyle="|" />
          </p>
          <div className="left-l-2-txt-icons">
            <span className="left-l-2-txt-icon">
              <FaGithub />
            </span>
            <span className="left-l-2-txt-icon">
              <FaLinkedin />
            </span>
            <span className="left-l-2-txt-icon">
              <SiYoutubemusic />
            </span>
            <span className="left-l-2-txt-icon">
              <BsFacebook />
            </span>
            <span className="left-l-2-txt-icon">
              <FiInstagram />
            </span>
            <span className="left-l-2-txt-icon">
              <AiFillTwitterCircle />
            </span>
            <span className="left-l-2-txt-icon">
              <FiMail />
            </span>
          </div>
        </div>
        <div className="left-l-2-down">
          <a
            href={CV}
            target="_blank"
            className="left-l-2-down-cv"
            rel="noreferrer"
          >
            <button className="left-l-2-down-cv-btn">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button className="left-l-2-down-contact">
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
