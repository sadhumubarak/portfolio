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

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ height: "60px", backgroundColor: "#242540" }}
    >
      <Toolbar
        variant="dense"
        sx={{
          height: "100%",
          width: "100%",
          margin: "0 auto",
          padding: "0 40px !important",
        }}
      >
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item></Grid>
          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <Link
              href="https://github.com/"
              className="nav-icon"
              sx={{ marginLeft: "15px" }}
            >
              <FaGithub style={{ fontSize: "1.6rem" }} />
            </Link>
            <Link
              href="https://github.com/"
              className="nav-icon"
              sx={{ marginLeft: "25px" }}
            >
              <IoMailOutline style={{ fontSize: "1.6rem" }} />
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
