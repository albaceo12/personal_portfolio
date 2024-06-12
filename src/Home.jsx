import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import { BsTelephonePlusFill } from "react-icons/bs";
import Left from "./components/home/left/Left";
import About from "./components/about/About/About";
import Resume from "./components/resume/Resume/Resume";
import Projects from "./components/projects/projectsf/Projects";
import Blog from "./components/blog/blogf/Blog";
import Contact from "./components/contact/contactf/Contact";
import Sidenav from "./components/home/sidenav/sidenavf/Sidenav";
import "./Home.css";

const Home = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidenav(false);
      }
    });
  }, []);
  return (
    <div className="bg-home">
      {/* ================= Left Icons starts here ======================== */}
      <div className="left-icons">
        {/* ======= Home Icon start */}
        <div
          onClick={() => {
            setSidenav(true);
            // setIsOpen(true);
          }}
          className="home-icon"
        >
          <div className="home-icon-1">
            <span className="home-icon-1-1 home-icon-1-1-trans"></span>
            <span className="home-icon-1-1 home-icon-1-2-hover"></span>
            <span className="home-icon-1-1 home-icon-1-3-trans"></span>
          </div>
        </div>
        {/* ======= Home Icon End */}

        {/* ============= Sidenav Start here ============= */}
        <AnimatePresence mode="wait" initial={false}>
          {sidenav && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="home-sdie-fixed"
            >
              <div className="hsidemenu">
                <motion.div
                  ref={ref}
                  // variants={variants}
                  initial={{ opacity: 0, x: -500 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -500 }}
                  // animate={sidenav ? "open" : "closed"}
                  // exit={{ x: -500, opacity: 0, transition: { duration: 0.5 } }}
                  // variants={variants}
                  transition={{ duration: 0.5 }}
                  className="sidemotion"
                >
                  <Sidenav />
                  <span
                    onClick={() => {
                      setSidenav(false);
                      // setIsOpen(false);
                    }}
                    className="sidespan"
                  >
                    <MdOutlineClose />
                  </span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* ============= Sidenav End here =============== */}
        {/* ======= Other Icons Start */}
        <div className="left-menu-icons">
          {/* About Icon */}
          <span
            onClick={() =>
              setAbout(true) &
              setResume(false) &
              setProjects(false) &
              setBlog(false) &
              setContact(false)
            }
            className={`${
              about ? "condition-true" : "condition-false"
            } about-icon`}
            // className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <FaUser />
            <span className="about-icon-txt">About</span>
          </span>
          {/* Resume Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setResume(true) &
              setProjects(false) &
              setBlog(false) &
              setContact(false)
            }
            className={`${
              resume ? "condition-true" : "condition-false"
            } resume-icon`}
          >
            <IoIosPaper />
            <span className="resume-icon-txt">Resume</span>
          </span>
          {/* Project Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(true) &
              setBlog(false) &
              setContact(false)
            }
            className={`${
              projects ? "condition-true" : "condition-false"
            } proj-icon`}
          >
            <MdWork />
            <span className="proj-icon-txt">Projects</span>
          </span>
          {/* Blog Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setBlog(true) &
              setContact(false)
            }
            className={`${
              blog ? "condition-true" : "condition-false"
            } blog-icon`}
          >
            <SiGooglechat />
            <span className="blog-icon-txt">Blog</span>
          </span>
          {/* Contact Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setBlog(false) &
              setContact(true)
            }
            className={`${
              contact ? "condition-true" : "condition-false"
            } contact-icon`}
          >
            <FaEnvelope />
            <span className="contact-icon-txt">Contact</span>
          </span>
          <span className="phone-icon">
            <BsTelephonePlusFill />
            <span className="phone-icon-txt">Call</span>
          </span>
        </div>
        {/* ======= Other Icons End */}
      </div>
      {/* ================= Left Icons ends here ====================== */}
      <div className="home-h-left">
        {/* ======================== Home Left Start here ============================ */}
        <Left />
        {/* ======================== Home Left End here ============================== */}
        <div className="home-h-left-1">
          {/* ======================== Smaller device content Start ======================== */}
          {/* <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
            <About />
            <Resume />
            <Projects />
            <Blog />
            <Contact />
          </div> */}
          {/* ======================== Smaller device content End ========================== */}
          <div className="home-h-left-1-1">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}

            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
            {blog && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Blog />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="responsive-contact"
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>{" "}
        <div style={{ width: "1rem", display: "flex" }}>
          <span style={{ height: "0.4rem" }}></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
