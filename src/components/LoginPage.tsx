import React from "react";
import { connect } from "react-redux";
import { startSetTasks } from "../store/actions/task";
import { startLogin, login } from "../store/actions/auth";
import { firebase } from "../firebase/firebase";
import { ThunkResult, AuthAction } from "../types/types";
import { Redirect } from "react-router-dom";

interface LoginPageProps {
  startLogin: () => ThunkResult<void>;
  startSetTasks: () => ThunkResult<void>;
  login: (
    uid: string
  ) => {
    type: AuthAction.login;
    uid: string;
  };
  history: {
    push(url: string): void;
  };
}

class LoginPage extends React.PureComponent<LoginPageProps, any> {
  handleInitialization = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("1");
        this.props.login(user.uid);
        this.props.startSetTasks();
        this.props.history.push("/home");
      } else {
        console.log("No user sigh");
      }
    });
  };

  handleLogin = () => {
    this.props.startLogin();
    console.log("User logged");
  };

  render() {
    this.handleInitialization();
    return (
      <div>
        {/* TODO: button compo */}
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

const mapDispatchToProps = { startLogin, login, startSetTasks };

export default connect(undefined, mapDispatchToProps)(LoginPage);

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     store.dispatch(login(user.uid));
//     history.push("/home");
//     store.dispatch({ type: "START_SET_TASKS", payload: startSetTasks() });
//   } else {
//     store.dispatch(logout());
//   }
// });
