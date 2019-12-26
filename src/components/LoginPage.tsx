import React from "react";
import { connect } from "react-redux";
import { startSetTasks } from "../store/actions/task";
import { startLogin, login } from "../store/actions/auth";
import { firebase } from "../firebase/firebase";
import { ThunkResult, AuthAction, State, Task } from "../types/types";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const LoginButton = styled.button`
  max-width: 200px;
  width: 100%;
  max-height: 100px;
  height: 100%;
  background: rgb(192, 192, 192);
  color: white;
  font-size: 25px;
  font-weight: 700;
`;

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
  /* TODO: button compo */

  render() {
    return (
      <Box>
        <LoginButton onClick={this.handleLogin}>
          <p>Login with Google</p>
        </LoginButton>
      </Box>
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
