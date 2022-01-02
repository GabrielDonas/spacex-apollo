import { Box, Switch, Typography } from "@mui/material";
import { themeVar } from "../../cache";

function ThemeButton() {
  function changeState() {
    themeVar() === "lightTheme"
      ? themeVar("darkTheme")
      : themeVar("lightTheme");
  }

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor:
      themeVar() === "lightTheme" ? "white" : "rgba(255, 255, 255, 0.154)",
    padding: "0px 2px",
    borderRadius: "20px",
    border: "2px solid rgba(25, 118, 210, 0.736)",
  };

  return (
    <Box sx={containerStyle}>
      <Typography>🌜</Typography>
      <Switch onChange={changeState} defaultChecked />
      <Typography>🌞</Typography>
    </Box>
  );
}

export default ThemeButton;
