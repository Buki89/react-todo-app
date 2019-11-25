import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../themes/theme";
import AppRouter from "../Router/Router";

const App = () => (
  <ThemeProvider theme={theme}>
    <AppRouter />
  </ThemeProvider>
);

export default App;
