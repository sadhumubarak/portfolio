import { Box, Button, Grid, Typography } from "@mui/material";
import ContentBox from "../../shared/ContentBox";
import { IoFootsteps } from "react-icons/io5";
import SectionTitle from "../../shared/SectionTitle";
// import expPoster from "../../assets/img/exp.png";
type Props = {
  id: string;
};

export default function Contact({ id }: Props) {
  return (
    <ContentBox contentId={id}>
      <Grid>
        <SectionTitle countNo="06" title="Ping me" />
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ textIndent: "100px", width: "80%" }}
          >
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </Typography>

          <Button sx={{ mt: "20px" ,width:'fit-content'}}>Say Hello!</Button>
        </Grid>
      </Grid>
    </ContentBox>
  );
}
