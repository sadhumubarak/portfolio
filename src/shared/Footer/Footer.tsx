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

// type ContentBoxType = {
//   contentId?: string;
//   children: React.ReactNode;
// };

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        height: { lg: "100px", xs: "150px" },
        backgroundColor: "#191b38",
        paddingTop: "40px",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontFamily: "firacode", color: "#cccccc" }}
        >
          Designed and Developed by Sadhamhussain
        </Typography>
      </Grid>
    </Grid>
  );
}
