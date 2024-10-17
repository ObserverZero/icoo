import { useState } from "react";
import { useTheme, Container, Button } from "@mui/material";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const theme = useTheme();

  return (
    <>
      <Container sx={{ bgcolor: "theme.palette.primary" }}>
        <Button variant="contained">iCoo</Button>
      </Container>
    </>
  );
}

export default App;
