import Header from "./components/Header/Header";

import { themeVar } from "./cache";
import { useReactiveVar } from "@apollo/client";
import Sections from "./components/Sections/Sections";
import MainSection from "./components/MainSection/MainSection";
import { Box, Container } from "@mui/material";

function App() {
  const darkThemeStyle = { backgroundColor: "rgb(35, 35, 35)", color: "white" };
  const lightThemeStyle = { backgroundColor: "white", color: "black" };

  const theme =
    useReactiveVar(themeVar) === "lightTheme"
      ? lightThemeStyle
      : darkThemeStyle;

  return (
    <Box sx={theme}>
      <Header />
      <Sections />
      <MainSection />
    </Box>
  );
}

export default App;
