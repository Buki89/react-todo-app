import React from "react";
import { connect } from "react-redux";
import { startSetTasks } from "../store/actions/task";
import { startLogin, login } from "../store/actions/auth";
import { firebase } from "../firebase/firebase";
import { ThunkResult, AuthAction, State, Task } from "../types/types";
import Loading from "./Loading";

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
  state: State;
}

class LoginPage extends React.PureComponent<LoginPageProps, any> {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.login(user.uid);
        this.props.startSetTasks();
        this.props.history.push("/home");
      }
    });
  }

  handleLogin = () => {
    this.props.startLogin();
    this.props.history.push("/loading");
  };

  render() {
    return (
      <div>
        {/* TODO: button compo */}
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

const mapStatetoProps = (state: State) => {
  return {
    state: state
  };
};

const mapDispatchToProps = { startLogin, login, startSetTasks };

export default connect(mapStatetoProps, mapDispatchToProps)(LoginPage);

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     store.dispatch(login(user.uid));
//     history.push("/home");
//     store.dispatch({ type: "START_SET_TASKS", payload: startSetTasks() });
//   } else {
//     store.dispatch(logout());
//   }
// });
