import { Box, Button, Grid, Typography } from "@mui/material";
import ContentBox from "../../shared/ContentBox";
import { FaUserGraduate } from "react-icons/fa";
import SectionTitle from "../../shared/SectionTitle";
import { GiSchoolBag, GiTiedScroll } from "react-icons/gi";
import expPoster from "../../assets/img/clip.png";

type EduTypes = {
  education: {
    course: string;
    year: string;
    institute: string;
    location: string;
  }[];
  id: string;
};

export default function Education({ education }: EduTypes) {
  return (
    <ContentBox contentId="education">
      <Grid container sx={{ display: "flex", alignItems: "center" }}>
{/* 
        <Box
        component="img"
        src={ expPoster }
        alt="expPoster"
        sx={{
          top: 0,
          right: 0,
          position: "absolute",
          width: "100px",
          height: "100%",
          zIndex: "-1",
          border: "none",
        }}
      /> */}
        <SectionTitle countNo="03" title="Education" />
        <Grid item xs={12} >
{/*           
          <Grid container>
            {education.map((edu, i) => (
             
            ))}
          </Grid> */}
        </Grid>
      </Grid>
    </ContentBox>
  );
}
