import { Box, Button, Grid, Typography } from "@mui/material";
import ContentBox from "../../shared/ContentBox";
import SectionTitle from "../../shared/SectionTitle";
type knowledgeypes = {
  knowledge: { title: string; level: string }[];
  id: string;
};

export default function Knowledge({ knowledge, id }: knowledgeypes) {
  return (
    <ContentBox contentId={id}>
      <Grid container sx={{ display: "flex", alignItems: "center" }}>
        <SectionTitle countNo="04" title="Skills" />
        <Grid item xs={12}>
          {knowledge.map((item, i) => (
            <Grid
              key={i}
              sx={{
                display: "flex",
                alingnItems: "center",
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
