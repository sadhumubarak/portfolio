import {
  AppBar,
  Box,
  Button,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { IoMail, IoMailOutline } from "react-icons/io5";

type SectionTitleType = {
  countNo?: string;
  title: string;
};

export default function SectionTitle({ countNo, title }: SectionTitleType) {
  return (
    <Grid
      item
      sx={{
        // position: "relative",
        paddingTop: "80px",
        mb: "50px",
        left: "0",
        display: "flex",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          height: "fit-content",
          position: "relative",
          // opacity: ".7",
          fontSize: { xs: "3rem", lg: "5rem" },
          top: { xs: "-10px", lg: "-24px" },
          left: "15px",
          // left: "0px",
          color: "#575878",
          zIndex: "2",
          fontFamily: "Permanent Marker",
        }}
      >
        {countNo}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          height: "fit-content",
          fontSize: { xs: "2.8rem", lg: "4rem" },
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
}
