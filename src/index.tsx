import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import GlobalStyle from "./styles";
import AppRouter from "./Router/Router";

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
