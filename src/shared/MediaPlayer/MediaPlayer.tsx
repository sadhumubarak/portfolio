import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import audioLoop from "../../assets/mp3/loop.ogg";
export default function MediaPlayer() {
  const [isPlay, setIsPlay] = useState(false);
  const [song] = useState(new Audio(audioLoop));

  useEffect(() => {
    song.volume = 0.5;
    if (isPlay) {
      song.play();
    }
    if (!isPlay) {
      song.volume = 0.1;
      setTimeout(() => {
        song.pause();
      }, 1500);
    }
  }, [isPlay]);

  const handleMediaControl = () => {
    setIsPlay(!isPlay);
  };

  console.log("playmusi", isPlay);

  return (
    <Box
      className="mediaanim"
      sx={{
        display: "flex",
        alignItems: "end",
        justifyContent: "flex-end",
        position: "fixed",
        bottom: "40px",
        left: "40px",
        zIndex: "99",
        height: "25px",
        cursor: "pointer",
      }}
      onClick={handleMediaControl}
    >
      <Box
        sx={{
          marginRight: " 3.5px",
          width: "3px",
          height: "25px",
          background: "#ddd",
          transition: "1.2s all",
          animation: `1.2s ${isPlay ? "musicPlay" : "musicPause"} infinite`,
          "@keyframes musicPlay": {
            "0%": {
              height: "0px",
            },
            "50%": {
              height: "25px",
            },
            "100%": {
              height: "0px",
            },
          },
          "@keyframes musicPause": {
            "0% ,50%, 100%": {
              height: "1px",
            },
          },
        }}
      ></Box>
      <Box
        sx={{
          marginRight: "3.5px",
          width: "3px",
          height: "25px",
          background: "#ddd",
          transition: "1.2s ease",
          animation: `1.2s ${isPlay ? "musicPlay" : "musicPause"} infinite`,
          animationDelay: "1s",
          "@keyframes musicPause": {
            "0% , 100%": {
              height: "1px",
            },
          },
        }}
      ></Box>
      <Box
        sx={{
          marginRight: "3.5px",
          width: "3px",
          height: "25px",
          background: "#ddd",
          transition: "1.2s ease",
          animation: `1.2s ${isPlay ? "musicPlay" : "musicPause"} infinite`,
          animationDelay: ".2s",
          "@keyframes musicPause": {
            "0% , 100%": {
              height: "1px",
            },
          },
        }}
      ></Box>
      <Box
        sx={{
          marginRight: "3.5px",
          width: "3px",
          height: "25px",
          background: "#ddd",
          transition: "1.2s ease",
          animation: `1.2s ${isPlay ? "musicPlay" : "musicPause"} infinite`,
          animationDelay: ".1s",
          "@keyframes musicPause": {
            "0% , 100%": {
              height: "1px",
            },
          },
        }}
      ></Box>
      <Box
        sx={{
          marginRight: "3.5px",
          width: "3px",
          height: "25px",
          background: "#ddd",
          transition: "1.2s ease",
          animation: `1.2s ${isPlay ? "musicPlay" : "musicPause"} infinite`,
          animationDelay: "1.6s",
          "@keyframes musicPause": {
            "0% , 100%": {
              height: "1px",
            },
          },
        }}
      ></Box>
      <Box
        sx={{
          marginRight: "3.5px",
          width: "3px",
          height: "25px",
          background: "#ddd",
          transition: "1.2s ease",
          animation: `1.2s ${isPlay ? "musicPlay" : "musicPause"} infinite`,
          animationDelay: "1s",
          "@keyframes musicPause": {
            "0% , 100%": {
              height: "1px",
            },
          },
        }}
      ></Box>

      <Typography
        variant="subtitle2"
        sx={{ fontSize: "10px", marginLeft: "5px" }}
      >
        Play / Pause
      </Typography>
    </Box>
  );
}
