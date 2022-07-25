import { Box, Button, Grid, Typography } from "@mui/material";

type ContentBoxType = {
  contentId?: string;
  children: React.ReactNode;
};

export default function ViewPort({ children, contentId }: ContentBoxType) {
  return (
    <Grid
      id={contentId}
      container
      sx={{
        width: { xs: "90%", lg: "80%" },
        margin: "0 auto",
        minHeight: "85vh",
        position: "relative",
      }}
    >
      {children}
    </Grid>
  );
}
