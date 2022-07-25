import { Box, Button, Grid, Typography } from "@mui/material";
import ContentBox from "../../shared/ContentBox";
import { IoFootsteps } from "react-icons/io5";
import SectionTitle from "../../shared/SectionTitle";
// import expPoster from "../../assets/img/exp.png";
type Props = {
  experience: {
    jobTitle: string;
    period: string;
    employer: string;
    location: string;
  }[];
  id: string;
};

export default function ViewPort({ experience, id }: Props) {
  return (
    <ContentBox contentId={id}>
      {/* <Box
        component="img"
        src={{ expPoster }}
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
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          // position: "relative",

          // "&:after": {
          //   content: "''",
          //   top: 0,
          //   right: 0,
          //   position: "absolute",
          //   width: "100%",
          //   height: "100%",
          //   backgroundImage: `url(${"../../"})`,
          // },
        }}
      >
        <SectionTitle countNo="02" title="Experience" />
        <Grid item xs={12}>
          <Grid container sx={{ marginBottom: "30px", height: "60px" }}>
            <Grid
              item
              sx={{
                height: "40px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: "25px",
                  width: "25px",
                  borderRadius: "50px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  "&:after": {
                    position: "absolute",
                    content: '""',
                    borderRadius: "50px",
                    height: "60px",
                    width: "1px",
                    borderLeft: "1px dashed #fff",
                    left: "50%",
                    top: "27px",
                    transform: "translateX(-50%)",
                  },
                }}
              >
                <IoFootsteps
                  style={{
                    color: "#ffe118",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          {experience.map((exp, i) => (
            <Grid
              container
              sx={{
                marginBottom: "30px",
                height: "100px",
                flexWrap: "nowrap",
                "&:nth-child(2) .indicator:before": {
                  backgroundColor: "#ffe118",
                  animation: "blinker 1s linear infinite",
                  "@keyframes blinker": {
                    "50% ": {
                      opacity: "0",
                    },
                  },
                },
                "&:last-child .indicator:after": {
                  borderColor: "red",
                  display: "none",
                },
              }}
              key={i}
            >
              <Grid
                item
                sx={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  className="indicator"
                  sx={{
                    height: "25px",
                    width: "25px",
                    border: "1px solid #fff",
                    borderRadius: "50px",
                    position: "relative",
                    "&:before": {
                      position: "absolute",
                      content: '""',
                      backgroundColor: "#fff",
                      borderRadius: "50px",
                      height: "10px",
                      width: "10px",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    },
                    "&:after": {
                      position: "absolute",
                      content: '""',
                      borderRadius: "50px",
                      height: "100px",
                      width: "1px",
                      borderLeft: "1px dashed #fff",
                      left: "54%",
                      top: "27px",
                      transform: "translateX(-50%)",
                    },
                  }}
                ></Box>
              </Grid>
              <Grid
                item
                sx={{ display: "flex", flexDirection: "column", pl: "20px" }}
              >
                <Typography variant="h6">
                  {exp.employer} ({exp.period})
                </Typography>
                <Typography variant="subtitle2">{exp.jobTitle}</Typography>
                <Typography variant="subtitle2">{exp.location}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ContentBox>
  );
}
