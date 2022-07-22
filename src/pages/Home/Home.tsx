import { useRef, useEffect } from "react";
import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import ViewPort from "../ViewPort";
import Experience from "../Experience";
import Education from "../Education";
import myData from "../../assets/data/myData.json";
import Knowledge from "../Knowledge";
import NavPanel from "../../shared/ActionButtons";
import Header from "../../shared/Header/Header";
// import useInteraction from "../../shared/useIntersection";
type Props = {};

const Home = ({}: Props) => {
  useEffect(() => {
    return () => {
      window.addEventListener("scroll", function () {
        var element = document.querySelector("#experience");
        var position = element.getBoundingClientRect();

        // checking whether fully visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          
        }

        // checking for partial visibility
        if (position.top < window.innerHeight && position.bottom >= 0) {
          console.log("Element is partially visible in screen");
        }
      });
    };
  }, []);

  return (
    <Fragment>
      <Header />
      <NavPanel />
      <ViewPort />
      <Experience experience={myData.experience} />
      <Education education={myData.education} />
      <Knowledge knowledge={myData.knowledge} />
    </Fragment>
  );
};

export default Home;
