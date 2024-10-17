import { useState } from "react";
import { useTheme, Container, Button } from "@mui/material";
import AppBar from "./components/AppBar";
import BottomTabs from "./components/BottomTabs";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const theme = useTheme();

  return (
    <>
      <Container sx={{ bgcolor: "theme.palette.primary" }}>
        <AppBar />
        <Button variant="contained">iCoo</Button>
        <BottomTabs />
      </Container>
    </>
  );
}

export default App;
