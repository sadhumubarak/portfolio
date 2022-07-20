import { Box, Button, Grid, Typography } from "@mui/material";
import ContentBox from "../shared/ContentBox";
type knowledgeypes = {
  knowledge: React.ReactNode;
};

export default function Knowledge({ knowledge }: knowledgeypes) {
  return (
    <ContentBox contentId="skill">
      <Grid container sx={{ display: "flex", alignItems: "center" }}>
        <Grid item sx={{ position: "absolute", top: "70px", left: "0" }}>
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              // opacity: ".7",
              fontWeight: "normal",
              fontSize: "6rem",
              top: "-19px",
              left: "0px",
              color: "#575878",
              zIndex: "2",
              fontFamily: "Permanent Marker",
            }}
          >
            04
          </Typography>
          <Typography
            variant="h2"
            sx={{ marginTop: "32px", marginLeft: "106px" }}
          >
            Skills
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {knowledge.map((item, i) => (
            <Grid
              container
              key={i}
              sx={{
                marginBottom: "25px",
                alignItems: "center",
                "&:last-child": {
                  marginBottom: "0",
                },
              }}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1">{item.title}</Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    width: "100%",
                    height: "10px",
                    border: "1px solid #dfdfdf",
                    position: "relative",
                    borderRadius: "3px",
                    "&:after": {
                      position: "absolute",
                      content: '""',
                      top: "0",
                      left: "0",
                      height: "100%",
                      width: item.level,
                      backgroundColor: "#fff",
                    },
                  }}
                ></Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ContentBox>
  );
}
