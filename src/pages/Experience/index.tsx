import { Box, Button, Grid, Typography } from "@mui/material";
import ContentBox from "../../shared/ContentBox";
import { IoFootsteps } from "react-icons/io5";
type Props = { experience: React.ReactNode };

export default function ViewPort({ experience }: Props) {
  return (
    <ContentBox contentId="experience">
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
            02
          </Typography>
          <Typography
            variant="h2"
            sx={{ marginTop: "32px", marginLeft: "106px" }}
          >
            Experience
          </Typography>
        </Grid>
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
                <Typography variant="body2">{exp.jobTitle}</Typography>
                <Typography variant="body2">{exp.location}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ContentBox>
  );
}
