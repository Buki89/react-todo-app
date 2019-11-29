import React from "react";
import styled from "styled-components";
import theme from "../themes/theme";
import Header from "./Header";
import Menu from "./Menu";
import HomeDashboard from "./HomeDashboard";
import { connect } from "react-redux";
import { startTaskAdd } from "../store/actions/taskActions";
import { Task, Actions } from "../types/types";

export const MainContainer = styled.div`
  background: ${theme.colors.color2};
  padding: 20px;
  max-width: 80rem;
  margin: 40px auto;
`;

interface HomePageProps {
  taskList: Array<Task>;
}

class HomePage extends React.PureComponent<HomePageProps & Actions, any> {
  handleAddTask = ({ category, task, id }) => {
    this.props.startTaskAdd({ category, task, id });
  };

  render() {
    return (
      <MainContainer>
        <Header />
        <Menu />
        <HomeDashboard
          taskList={this.props.taskList}
          handleAddTask={this.handleAddTask}
        />
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskList: state
  };
};
const mapDispatchToProps = { startTaskAdd };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
