import { useRef, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import ViewPort from "../ViewPort";
import Experience from "../Experience";
import Education from "../Education/Education";
import myData from "../../assets/data/myData.json";
import Knowledge from "../Knowledge/Knowledge";
import NavPanel from "../../shared/ActionButtons";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import MediaPlayer from "../../shared/MediaPlayer/MediaPlayer";
import ProgressLine from "../../shared/ProgressLine";
import Projects from "../Projects";
import Contact from "../Contact";

// import useInteraction from "../../shared/useIntersection";
type Props = {};

const Home = ({}: Props) => {
  const [active, setActive] = useState("introduction");

  useEffect(() => {
    return () => {
      window.addEventListener("scroll", function () {
        var eleIntro = document.querySelector("#introduction");
        var eleExp = document.querySelector("#experience");
        var eleEdu = document.querySelector("#education");
        var eleKnow = document.querySelector("#skill");
        var eleProj = document.querySelector("#projects");
        var eleCon = document.querySelector("#contact");
        var positionIntro = eleIntro && eleIntro.getBoundingClientRect();
        var positionExp = eleExp && eleExp.getBoundingClientRect();
        var positionEdu = eleEdu && eleEdu.getBoundingClientRect();
        var positionKnow = eleKnow && eleKnow.getBoundingClientRect();
        var positionProj = eleProj && eleProj.getBoundingClientRect();
        var positionCon = eleCon && eleCon.getBoundingClientRect();

        // checking whether fully visible
        if (
          positionIntro &&
          positionIntro.top >= 0 &&
          positionIntro.bottom <= window.innerHeight
        ) {
          setActive("introduction");
        }
        if (
          positionExp &&
          positionExp.top >= 0 &&
          positionExp.bottom <= window.innerHeight
        ) {
          setActive("experience");
        }
        if (
          positionEdu &&
          positionEdu.top >= 0 &&
          positionEdu.bottom <= window.innerHeight
        ) {
          setActive("education");
        }
        if (
          positionKnow &&
          positionKnow.top >= 0 &&
          positionKnow.bottom <= window.innerHeight
        ) {
          setActive("skill");
        }
        if (
          positionProj &&
          positionProj.top >= 0 &&
          positionProj.bottom <= window.innerHeight
        ) {
          setActive("projects");
        }
        if (
          positionCon &&
          positionCon.top >= 0 &&
          positionCon.bottom <= window.innerHeight
        ) {
          setActive("contact");
        }
        // checking for partial visibility
        // if (positionEdu.top < window.innerHeight && positionExp.bottom >= 0) {
        //   setActive("");
        // }
      });
    };
  }, []);

  return (
    <Fragment>
      <MediaPlayer />
      <ProgressLine activeMenu={active} />
      <Header />
      <NavPanel activeMenu={active} />
      <ViewPort id="introduction" />
      <Experience id="experience" experience={myData.experience} />
      <Education id="education" education={myData.education} />
      <Knowledge id="skill" knowledge={myData.knowledge} />
      <Projects id="projects" />
      <Contact id="contact" />

      <Footer />
    </Fragment>
  );
};

export default Home;
