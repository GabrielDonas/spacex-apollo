import ThemeButton from "../ThemeButton/ThemeButton";
import { Container, Typography } from "@mui/material";

function Header() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "2px solid rgb(181, 181, 181)",
        width: "100vw",
      }}
    >
      <Typography variant="h4">spacex-apollo</Typography>
      <ThemeButton />
    </Container>
  );
}

export default Header;
