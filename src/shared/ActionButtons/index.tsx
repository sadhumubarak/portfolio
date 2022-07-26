import { Box, Button, Grid, Typography } from "@mui/material";
import { FaHome, FaSuitcase } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { Link } from "react-router-dom";

export const navMenus = [
  { menuTitle: "#introduction", menu: "introduction", iconName: <FaHome /> },
  { menuTitle: "#experience", menu: "experience", iconName: <FaSuitcase /> },
  { menuTitle: "#education", menu: "education", iconName: <IoSchoolSharp /> },
  { menuTitle: "#skill", menu: "skill", iconName: <GiSkills /> },
  { menuTitle: "#projects", menu: "projects", iconName: <GiSkills /> },
  { menuTitle: "#contact", menu: "contact", iconName: <GiSkills /> },
];

type ContentBoxType = {
  activeMenu: string;
};

export default function NavPanel({ activeMenu }: ContentBoxType) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: { lg: "50%", xs: "unset" },
        left: { lg: "40px", xs: "50%" },
        bottom: { lg: "unset", xs: "0px" },
        transform: { lg: "translateY(-50%)", xs: "translateX(-50%)" },
        display: "flex",
        flexDirection: { lg: "column", xs: "row" },
        justifyContent: { lg: "unset", xs: "center" },
        alignItems: { lg: "unset", xs: "center" },
        backgroundColor: { lg: "transparent", xs: "#242540" },
        zIndex: "9",
        width: { lg: "unset", xs: "100%" },
        padding: { lg: "unset", xs: "10px" },
        boxShadow: {
          xs: "0px -2px 4px -1px #00000033, 0px 4px 5px 0px #00000024, 0px 1px 10px 0px #0000001f",
          lg: "none",
        },
      }}
    >
      {navMenus.slice(0, 4).map((menu, i) => (
        <a href={menu.menuTitle} key={i}>
          <Box
            className="nav-icon"
            sx={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `${
                menu.menu === activeMenu
                  ? "1px solid #ffe118"
                  : "1px solid #cccccc"
              }`,
              backgroundColor: `${
                menu.menu === activeMenu ? "#ffde0036" : "transparent"
              }`,
              "& svg": {
                color: `${menu.menu === activeMenu ? "#ffe118" : "#cccccc"}`,
              },
              marginBottom: { lg: "15px", xs: "unset" },
              marginRight: "15px",
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
