import { Box, Button, Grid, Typography } from "@mui/material";
import ContentBox from "../shared/ContentBox";
type knowledgeypes = {
    knowledge: React.ReactNode;
};

export default function Knowledge({ knowledge }: knowledgeypes) {
  return (
    <ContentBox>
      <Grid item xs={12}>
        {knowledge.map((item, i) => (
          <Grid
            container
            key={i}
            sx={{ marginBottom: "25px", alignItems: "center" }}
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
                  borderRadius:'3px',
                  "&:after": {
                    position: "absolute",
                    content: '""',
                    top: "0",
                    left: "0",
                    height: "100%",
                    width: item.level,
                    backgroundColor:'#fff'
                  },
                }}
              ></Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </ContentBox>
  );
}
