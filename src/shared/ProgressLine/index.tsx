import { Box } from "@mui/material";
import React from "react";

type activeType = {
  activeMenu: string;
};

import { navMenus } from "../ActionButtons/index";

export default function index({ activeMenu }: activeType) {
  return (
    <Box
      sx={{
        position: "fixed",
        right: "40px",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {navMenus.map((item, i) => (
        <a href={item.menuTitle} key={i}>
          <Box
            sx={{
              width: `${item.menu === activeMenu ? "20px" : "10px"}`,
              height: "2px",
              backgroundColor: `${
                item.menu === activeMenu ? "#ffe118" : "#cccccc8f"
              }`,
              marginBottom: "10px",
              cursor: "pointer",
              // "&:nth-of-type(odd)": {
              //   width: "20px",
              // },
            }}
          ></Box>
        </a>
      ))}
    </Box>
  );
}
