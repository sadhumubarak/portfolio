import "./App.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffe118",
      },
    },

    typography: {
      fontFamily: ["Montserrat"].join(","),

      h1: {
        fontWeight: "700",
      },
      h2: {
        fontWeight: "700",
      },
      h3: {
        fontWeight: "700",
      },
      h4: {
        fontWeight: "700",
      },
      h5: {
        fontWeight: "700",
      },
      h6: {
        fontWeight: "700",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 2,
            boxShadow: "none",
            textTransform: "none",
            backgroundColor: "#ffe118",
          },
        },
        defaultProps: {
          variant: "contained",
          size: "large",
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
