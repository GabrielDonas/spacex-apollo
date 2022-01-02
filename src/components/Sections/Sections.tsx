import { useReactiveVar } from "@apollo/client";
import {
  Button,
  ButtonGroup,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Categories } from "../../@types/categories";
import { categoryVar } from "../../cache";
import switchCategory from "../../services/switchCategory";

//MUI Custom Disable Button
const theme = createTheme({
  palette: {
    action: {
      disabledBackground: "rgb(181, 181, 181)",
      disabled: "white",
    },
  },
});

function Sections() {
  useReactiveVar(categoryVar);

  function disableButton(button: string) {
    return button === categoryVar();
  }

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", padding: "10px" }}
    >
      <ButtonGroup variant="contained" aria-label="categories">
        <ThemeProvider theme={theme}>
          <Button
            disabled={disableButton(Categories.PAST_LAUNCHES)}
            onClick={() => switchCategory(Categories.PAST_LAUNCHES)}
          >
            Past Launches
          </Button>
          <Button
            disabled={disableButton(Categories.ROCKETS)}
            onClick={() => switchCategory(Categories.ROCKETS)}
          >
            Rockets
          </Button>
          <Button
            disabled={disableButton(Categories.UPCOMING_LAUNCHES)}
            onClick={() => switchCategory(Categories.UPCOMING_LAUNCHES)}
          >
            Upcoming Launches
          </Button>
        </ThemeProvider>
      </ButtonGroup>
    </Container>
  );
}

export default Sections;
