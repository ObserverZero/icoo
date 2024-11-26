import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme, Container, Button } from "@mui/material";
import AppBar from "./components/AppBar";
import BottomTabs from "./components/BottomTabs";
import Content from "./components/content/content";
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
          <Content />
          <BottomTabs />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

// TODO: create a notification system where users can choose select labels or words to be notified about. Hashtags as a kind of joungle telegraph? Maybe hash tags used by the user automatically get added to the notification list.
