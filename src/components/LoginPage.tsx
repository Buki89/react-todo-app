import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Layout from "./Layout";
import { Box } from "../themes/styles";
import { connect } from "react-redux";
import { startSetTasks } from "../store/actions/task";
import { startLogin, autoLogin } from "../store/actions/auth";
import { ThunkResult, State, Task } from "../types/types";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";

const Wrapper = styled(Box)`
  margin: 40px auto;
`;

const IconWrapper = styled.div`
  padding: 10px;
  background: #f7e200;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  > p {
    color: #cc0000;
    margin: 0 0 0 10px;
  }
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
      <Layout>
        <Wrapper>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            onClick={this.handleLogin}
          >
            <IconWrapper>
              <FaTasks size={80} color='black' />
            </IconWrapper>
            <Button name='Login with Google' />
            {this.props.error && (
              <ErrorMessage>
                <FaExclamationTriangle color='#cc0000' />
                <p>{this.props.error}</p>
              </ErrorMessage>
            )}
          </Box>
        </Wrapper>
      </Layout>
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
