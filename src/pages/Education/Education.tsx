import { Box, Button, Grid, Typography } from "@mui/material";
import ContentBox from "../../shared/ContentBox";
import { FaUserGraduate } from "react-icons/fa";
import SectionTitle from "../../shared/SectionTitle";
import { GiSchoolBag, GiTiedScroll } from "react-icons/gi";
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
        <SectionTitle countNo="03" title="Education" />
        <Grid item xs={12}>
          <Grid container>
            {education.map((edu, i) => (
              <Grid
                item
                xs={12}
                md={12}
                lg={4}
                key={i}
                sx={{ margin: { lg: "0 auto", md: "0 auto 40px" } }}
              >
                <Box
                  sx={{
                    width: "90%",
                    height: "100%",
                    textAlign: "center",
                    position: "relative",
                    // boxShadow: "0 0 3px #dfdfdf",
                    backgroundColor: "#353655",
                    margin: "0 auto",
                    borderRadius: "5px",
                    padding: "20px 30px",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50px",
                      backgroundColor: "#575878",
                      left: "-5px",
                      top: "-25px",
                      transform: "translateX(-50%)",

                      "& svg": {
                        fontSize: "1.2rem",
                        color: "#ffe118",
                      },
                    }}
                  >
                    {i === 0 ? (
                      <GiTiedScroll />
                    ) : i === 1 ? (
                      <FaUserGraduate />
                    ) : (
                      <GiSchoolBag />
                    )}
                  </Box>
                  <Grid item sx={{ paddingTop: "10px" }}>
                    <Typography variant="h6">{edu.course}</Typography>
                    <Typography variant="subtitle1">{edu.year}</Typography>
                    <Typography variant="subtitle1">{edu.institute}</Typography>
                    <Typography variant="subtitle1">{edu.location}</Typography>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </ContentBox>
  );
}
