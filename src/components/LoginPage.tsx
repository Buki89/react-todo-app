import React from "react";
import styled, { withTheme } from "styled-components";
import Button from "./Button";
import Layout from "./Layout";
import { Box } from "../themes/styles";
import { connect } from "react-redux";
import { startSetTasks } from "../store/actions/task";
import { startLogin, autoLogin } from "../store/actions/auth";
import { State, Task } from "../store/types";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { RouteType } from "../store/types";
import { Theme } from "../themes/theme";
import { iconSize } from "../lib/helpers";

const Wrapper = styled(Box)`
  margin: 40px auto;
`;

const IconWrapper = styled.div`
  padding: 10px;
  background: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  > p {
    color: ${({ theme }) => theme.colors.red};
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
  theme: Theme;
}

interface LoginPageActions {
  autoLogin: typeof autoLogin;
  startLogin: typeof startLogin;
  startSetTasks: typeof startSetTasks;
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
      this.props.history.push(RouteType.home);
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
              <FaUserAlt size={iconSize(80)} color='black' />
            </IconWrapper>
            <Button name='Login with Google' />
            {this.props.error && (
              <ErrorMessage>
                <FaExclamationTriangle color={this.props.theme.colors.red} />
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

export default withTheme(
  connect(mapStatetoProps, mapDispatchToProps)(LoginPage)
);
