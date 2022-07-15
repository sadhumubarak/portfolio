import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import ViewPort from "../ViewPort";
import Experience from "../Experience";
import Education from "../Education";
import myData from "../../assets/data/myData.json"
import Knowledge from "../Knowledge";
type Props = {};

export default function Home({}: Props) {
  return (
    <Fragment>
      <ViewPort />
      <Experience experience={myData.experience}/>
      <Education education={myData.education}/>
      <Knowledge knowledge={myData.knowledge}/>
    </Fragment>
  );
}
