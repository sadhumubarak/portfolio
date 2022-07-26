import { Box, Button, Grid, Typography } from "@mui/material";
import "./Loader.scss";
export default function Loader() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#242540",
        width: "100%",
        margin: "0 auto",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loadCount"></div>
    </Grid>
  );
}
