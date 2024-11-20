import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme, Container, Button } from "@mui/material";
import AppBar from "./components/AppBar";
import BottomTabs from "./components/BottomTabs";
import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#242424" },
  },
});

function App() {
  const [count, setCount] = useState(0);
  const theme = useTheme();

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container sx={{ bgcolor: "theme.palette.primary" }}>
          <AppBar />
          <BottomTabs />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
