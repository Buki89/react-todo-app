import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";
import { startSetTasks } from "./store/actions/task";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import AppRouter from "./Router/Router";

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </Provider>
);

serviceWorker.unregister();

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     store.dispatch(login(user.uid));
//     history.push("/home");
//     store.dispatch({ type: "START_SET_TASKS", payload: startSetTasks() });
//   } else {
//     store.dispatch(logout());
//   }
// });
ReactDOM.render(<App />, document.getElementById("root"));
//@ts-ignore
store.dispatch(startSetTasks());
