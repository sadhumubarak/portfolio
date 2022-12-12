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

        {/* <Box
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
        <Grid container xs={12} rowSpacing={2}>
          {
            education.map((edu, i) => (
              <Grid item sx={{display:'flex',width:'100%', position:'relative', mb:"35px"}}>
                <Grid item xs={3} sx={{background:'#575878', position:'relative', left:'20px', zIndex:'2',p:'15px', height:'fit-content', width:'fit-content'}}>
                  <Typography>JUN 2017 - 2022</Typography>
                </Grid>
                <Grid item xs={9} sx={{background:'#333',position:'relative', top:'40px', padding:'15px 30px'}}>
                  <Typography variant="h5">Course Name</Typography>
                  <Typography variant="subtitle2">Insitute Name</Typography>
                </Grid>
              </Grid>
            ))
          }

        </Grid>
      </Grid>
    </ContentBox>
  );
}
