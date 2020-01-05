import React from "react";
import ReactDOM from "react-dom";
import theme from "./themes/theme";
import GlobalStyle from "./themes";
import AppRouter from "./Router/Router";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </Provider>
);

serviceWorker.unregister();
ReactDOM.render(<App />, document.getElementById("root"));
