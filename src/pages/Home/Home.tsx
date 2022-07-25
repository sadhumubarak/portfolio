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
// import useInteraction from "../../shared/useIntersection";
type Props = {};

const Home = ({}: Props) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    return () => {
      window.addEventListener("scroll", function () {
        var eleIntro = document.querySelector("#introduction");
        var eleExp = document.querySelector("#experience");
        var eleEdu = document.querySelector("#education");
        var eleKnow = document.querySelector("#skill");
        var positionIntro = eleIntro && eleIntro.getBoundingClientRect();
        var positionExp = eleExp && eleExp.getBoundingClientRect();
        var positionEdu = eleEdu && eleEdu.getBoundingClientRect();
        var positionKnow = eleKnow && eleKnow.getBoundingClientRect();

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
      <Header />
      <NavPanel activeMenu={active} />
      <ViewPort id="introduction" />
      <Experience id="experience" experience={myData.experience} />
      <Education id="education" education={myData.education} />
      <Knowledge id="skill" knowledge={myData.knowledge} />
      <Footer />
    </Fragment>
  );
};

export default Home;
