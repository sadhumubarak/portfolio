import { Suspense, lazy } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./shared/Loader/Loading";
import "./App.scss";
const Home = lazy(() => import("./pages/Home/Home"));
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
      subtitle1: {
        fontFamily: "firacode",
      },
      subtitle2: {
        fontFamily: "firacode",
      },
      body1: {
        fontFamily: "firacode",
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
      <Suspense fallback={<Loader />} >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
