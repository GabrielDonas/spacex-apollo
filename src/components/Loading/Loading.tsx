import { keyframes } from "@emotion/react";
import { Container, Typography } from "@mui/material";

function Loading() {
  const rocketAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-10px);
  }
`;

  const rocketStyle = {
    animation: `${rocketAnimation} 1.5s infinite`,
    fontSize: "5rem",
    padding: "1rem",
  };

  const loadingStyle = {
    fontFamily: `"Arimo", sans-serif`,
    fontSize: "1.5rem",
  };

  return (
    <Container sx={{ textAlign: "center", height: "100vh" }}>
      <Typography sx={rocketStyle}>🚀</Typography>
      <Typography sx={loadingStyle}>loading...</Typography>
    </Container>
  );
}

export default Loading;
