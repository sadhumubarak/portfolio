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
        width: "80%",
        margin: "0 auto",
        minHeight: "90vh",
        position: "relative",
      }}
    >
      {children}
    </Grid>
  );
}
