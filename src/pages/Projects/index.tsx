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

export default function Projects({ experience, id }: Props) {
  return (
    <ContentBox contentId={id}>
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
        <SectionTitle countNo="05" title="My Works" />
      
      </Grid>
    </ContentBox>
  );
}
