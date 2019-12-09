import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";
import { startSetTasks } from "./store/actions/taskActions";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import AppRouter, { history } from "./Router/Router";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./store/actions/authActions";

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </Provider>
);

serviceWorker.unregister();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    history.push("/home");
    ReactDOM.render(<App />, document.getElementById("root"));
    //@ts-ignore
    store.dispatch(startSetTasks());
  } else {
    store.dispatch(logout());
  }
});
