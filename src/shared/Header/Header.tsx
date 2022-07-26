import {
  AppBar,
  Box,
  Button,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
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
          <Grid item>
            <Typography variant="subtitle1" sx={{ color: "#ffe118" }}>
              {" "}
              &#60; Sadhamhussain /&#62;{" "}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              "&:after": {
                content: "''",
                position: "absolute",
                right: "-100%",
                width: "100%",
                height: "2px",
                backgroundColor: "#fff",
              },
            }}
          >
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/sadham-hussain-4177101a3/"
              className="nav-icon"
              sx={{
                marginRight: "20px",
                "&:hover svg": {
                  color: "#ffe118",
                },
              }}
            >
              <FaLinkedinIn style={{ fontSize: "1.6rem" }} />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/"
              className="nav-icon"
              sx={{
                marginRight: "20px",
                "&:hover svg": {
                  color: "#ffe118",
                },
              }}
            >
              <FaGithub style={{ fontSize: "1.6rem" }} />
            </Link>
            <Link
              target="_blank"
              href="mailto:sadham.mubarak@gmail.com"
              className="nav-icon"
              sx={{
                marginRight: "15px",
                "&:hover svg": {
                  color: "#ffe118",
                },
              }}
            >
              <IoMailOutline style={{ fontSize: "1.6rem" }} />
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
