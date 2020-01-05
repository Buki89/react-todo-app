import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Header from "./Header";
import { connect } from "react-redux";
import { startSetTasks } from "../store/actions/task";
import { startLogin, autoLogin } from "../store/actions/auth";
import { ThunkResult, State, Task } from "../types/types";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
`;

interface LoginPageProps {
  history: {
    push(url: string): void;
  };
  error: string;
  uid: string;
  taskList: Array<Task>;
}

interface LoginPageActions {
  autoLogin: () => ThunkResult<void>;
  startLogin: () => ThunkResult<void>;
  startSetTasks: () => ThunkResult<void>;
}

class LoginPage extends React.PureComponent<LoginPageProps & LoginPageActions> {
  componentDidMount() {
    this.props.autoLogin();
  }

  componentDidUpdate() {
    if (this.props.uid) {
      this.props.startSetTasks();
    }
    if (this.props.taskList) {
      this.props.history.push("/home");
    }
  }

  handleLogin = () => {
    this.props.startLogin();
  };

  render() {
    return (
      <div>
        <Header withLogoutButton={false} />
        <Box>
          <Button onClick={this.handleLogin} name="Login with Google" />
          {this.props.error && <div>{this.props.error}</div>}
        </Box>
      </div>
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

const mapDispatchToProps = { startLogin, startSetTasks, autoLogin };

export default connect(mapStatetoProps, mapDispatchToProps)(LoginPage);
