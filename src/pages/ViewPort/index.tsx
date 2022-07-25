import { Box, Button, Grid, Typography } from "@mui/material";
import ContentBox from "../../shared/ContentBox";
type Props = {
  id: string;
};

export default function ViewPort({ id }: Props) {
  return (
    <Grid container sx={{ height: "100vh" }} id={id}>
      <ContentBox>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "Fira Code, monospace" }}
            >
              Hi my name is
            </Typography>
            {/* <Typography variant="h2">User Name</Typography> */}
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              cupiditate sunt veritatis totam nihil expedita iusto, repudiandae
              obcaecati, labore nobis, nisi temporibus necessitatibus accusamus
              inventore provident quasi aliquam sed quos?
            </Typography>

            <Button sx={{ mt: "20px" }}>Contact Me</Button>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ backgroundColor: "" }}></Grid>
      </ContentBox>
    </Grid>
  );
}
