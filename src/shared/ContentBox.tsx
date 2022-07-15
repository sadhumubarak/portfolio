import { Box, Button, Grid, Typography } from "@mui/material";

type ContentBoxType = {
    children: React.ReactNode
};

export default function ViewPort({ children }: ContentBoxType) {
  return (
    <Grid container sx={{ width: "80%", margin: "0 auto", minHeight: "100vh" }}>
      {children}
    </Grid>
  );
}
