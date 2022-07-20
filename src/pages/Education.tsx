import { Box, Button, Grid, Typography } from "@mui/material";
import ContentBox from "../shared/ContentBox";
import { FaUserGraduate } from "react-icons/fa";
type EduTypes = {
  education: React.ReactNode;
};

export default function Education({ education }: EduTypes) {
  return (
    <ContentBox contentId="education">
      <Grid container sx={{ display: "flex", alignItems: "center" }}>
        <Grid item sx={{ position: "absolute", top: "70px", left: "0" }}>
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              // opacity: ".7",
              fontSize: "6rem",
              top: "-19px",
              left: "0px",
              color: "#575878",
              zIndex: "2",
              fontFamily: "Permanent Marker",
            }}
          >
            03
          </Typography>
          <Typography
            variant="h2"
            sx={{ marginTop: "32px", marginLeft: "106px" }}
          >
            Education
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {education.map((edu, i) => (
              <Grid item xs={12} md={4} key={i} sx={{}}>
                <Box
                  sx={{
                    width: "90%",
                    textAlign: "center",
                    position: "relative",
                    boxShadow: "0 0 3px #dfdfdf",
                    margin: "0 auto",
                    borderRadius: "5px",
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
                    }}
                  >
                    <FaUserGraduate />
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
