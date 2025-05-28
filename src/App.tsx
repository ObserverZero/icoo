import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme, Container, Button } from "@mui/material";
import AppBar from "./components/AppBar";
import BottomTabs from "./components/BottomTabs";
import Content from "./components/content/Content";
import { MatrixProvider } from "./matrix/MatrixContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Login from "./components/auth/Login";
import { useMatrix } from "./matrix/MatrixContext";
import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#242424" },
  },
});

function AppContent() {
  const { isAuthenticated } = useMatrix();
  const [content, setContent] = useState(0);
  const theme = useTheme();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <Container sx={{ bgcolor: "theme.palette.primary" }}>
      <AppBar />
      <Content />
      <BottomTabs />
    </Container>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <MatrixProvider>
        <ThemeProvider theme={darkTheme}>
          <AppContent />
        </ThemeProvider>
      </MatrixProvider>
    </ErrorBoundary>
  );
}

export default App;

// TODO: create a notification system where users can choose select labels or words to be notified about. Hashtags as a kind of joungle telegraph? Maybe hash tags used by the user automatically get added to the notification list.
