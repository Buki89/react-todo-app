import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../themes/theme";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Menu from "./Menu";

const App = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Menu />
    <Dashboard />
  </ThemeProvider>
);

export default App;
