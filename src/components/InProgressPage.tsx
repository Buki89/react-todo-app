import React from "react";
import styled from "styled-components";
import theme from "../themes/theme";
import Header from "./Header";
import Menu from "./Menu";
import InProgressDashboard from "./InProgressDashboard";
import { connect } from "react-redux";
import { Task } from "../types/types";

const MainContainer = styled.div`
  background: ${theme.colors.color2};
  padding: 20px;
  max-width: 80rem;
  margin: 40px auto;
`;

interface InProgressProps {
  taskList: Array<Task>;
}

class InProgressPage extends React.PureComponent<InProgressProps, any> {
  render() {
    return (
      <MainContainer>
        <Header />
        <Menu />
        <InProgressDashboard taskList={this.props.taskList} />
      </MainContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    taskList: state.tasks
  };
};

export default connect(mapStateToProps)(InProgressPage);
