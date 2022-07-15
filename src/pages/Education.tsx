import { Box, Button, Grid, Typography } from "@mui/material";
import ContentBox from "../shared/ContentBox";
import { FaUserGraduate } from "react-icons/fa";
type EduTypes = {
  education: React.ReactNode;
};

export default function Education({ education }: EduTypes) {
  return (
    <ContentBox>
      <Grid item xs={12}>
        <Grid container>
          {education.map((edu, i) => (
            <Grid item xs={12} md={4} key={i} sx={{  }}>
              <Box sx={{ width: "100%", textAlign: "center" }}>
                <Box>
                  <FaUserGraduate />
                </Box>
                <Typography variant="h6">{edu.course}</Typography>
                <Typography variant="subtitle1">{edu.year}</Typography>
                <Typography variant="subtitle1">{edu.institute}</Typography>
                <Typography variant="subtitle1">{edu.location}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ContentBox>
  );
}
