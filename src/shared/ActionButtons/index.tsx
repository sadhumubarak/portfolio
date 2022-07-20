import { Box, Button, Grid, Typography } from "@mui/material";
import { FaHome, FaSuitcase } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { Link } from "react-router-dom";

const navMenus = [
  { menuTitle: "#viewport", iconName: <FaHome /> },
  { menuTitle: "#experience", iconName: <FaSuitcase /> },
  { menuTitle: "#education", iconName: <IoSchoolSharp /> },
  { menuTitle: "#skill", iconName: <GiSkills /> },
];

type ContentBoxType = {
  children: React.ReactNode;
};

export default function NavPanel({ children }: ContentBoxType) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "40px",
        transform: "translateY(-50%)",
      }}
    >
      {navMenus.map((menu, i) => (
        <a href={menu.menuTitle} key={i}>
          <Box
            className="nav-icon"
            sx={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #dfdfdf",
              marginBottom: "15px",
              "&:hover": {
                borderColor: "#ffe118",
              },
              "&:hover  svg": { color: "#ffe118" },
            }}
          >
            {menu.iconName}
          </Box>
        </a>
      ))}
      {/* <a href="#viewport">
        <Box
          className="nav-icon"
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #dfdfdf",
            "&:hover": {
              borderColor: "#ffe118",
            },
          }}
        ></Box>
      </a>
      <a href="#experience">
        <Box
          className="nav-icon"
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #dfdfdf",
            "&:hover": {
              borderColor: "#ffe118",
            },
          }}
        >
          <FaSuitcase />
        </Box>
      </a>
      <a href="#education">
        <Box
          className="nav-icon"
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #dfdfdf",
            "&:hover": {
              borderColor: "#ffe118",
            },
          }}
        >
          <IoSchoolSharp />
        </Box>
      </a>
      <a href="#skill">
        <Box
          className="nav-icon"
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #dfdfdf",
            "&:hover": {
              borderColor: "#ffe118",
            },
            "&:hover  svg": { color: "#ffe118" },
          }}
        >
          <GiSkills />
        </Box>
      </a> */}
    </Box>
  );
}
