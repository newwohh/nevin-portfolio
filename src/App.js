import React, { useState } from "react";
import Footer from "./components/Home/Footer/Footer";
import Header from "./components/Home/Header/Header";
import Main from "./components/Home/Main/Main";
import { createTheme, Paper, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Loader from "./components/Loader/Loader";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const spinner = <Loader />;

  if (spinner) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  const Darktheme = createTheme({
    palette: {
      mode: darkMode ? "light" : "dark",
    },
  });

  return loading ? (
    <Loader />
  ) : (
    <ThemeProvider theme={Darktheme}>
      <Paper>
        <CssBaseline />
        <div>
          <Header check={darkMode} change={() => setDarkMode(!darkMode)} />
          <Main />
          <Footer />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
