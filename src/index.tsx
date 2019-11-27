import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";
import { startSetTasks } from "./store/actions/taskActions";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import AppRouter from "./Router/Router";

const App = () => (
  <ThemeProvider theme={theme}>
    <AppRouter />
  </ThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
store.dispatch(startSetTasks());
serviceWorker.unregister();
