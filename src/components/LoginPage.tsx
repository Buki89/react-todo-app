import React from "react";
import { connect } from "react-redux";
import { startSetTasks } from "../store/actions/task";
import { startLogin, login, autoLogin } from "../store/actions/auth";
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
  autoLogin: () => ThunkResult<void>;
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
  error: string;
  uid: string;
  taskList: Array<Task>;
}

class LoginPage extends React.PureComponent<LoginPageProps, any> {
  componentDidMount() {
    this.props.autoLogin();
  }

  componentDidUpdate(prevProps: LoginPageProps) {
    if (this.props.uid !== prevProps.uid) {
      this.props.startSetTasks();
    }
    if (this.props.taskList !== prevProps.taskList) {
      this.props.history.push("/home");
    }
  }

  handleLogin = () => {
    this.props.startLogin();
  };
  /* TODO: button compo */

  render() {
    return (
      <Box>
        <LoginButton onClick={this.handleLogin}>
          <p>Login with Google</p>
        </LoginButton>
        {this.props.error && <div>{this.props.error}</div>}
      </Box>
    );
  }
}

const mapStatetoProps = (state: State) => {
  return {
    error: state.auth.error,
    uid: state.auth.uid,
    taskList: state.tasks
  };
};

const mapDispatchToProps = { startLogin, login, startSetTasks, autoLogin };

export default connect(mapStatetoProps, mapDispatchToProps)(LoginPage);
