import React from "react";
import HomeDashboard from "./HomeDashboard2";
import Header from "./Header";
import Menu from "./Menu";
import styled from "styled-components";
import theme from "../themes/theme";
import { connect } from "react-redux";
import {
  startTaskAdd,
  startRemoveTask,
  startEditTask,
  startCompleteTask
} from "../store/actions/taskActions";
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

  handleEditTask = ({ id, task, category }) => {
    this.props.startEditTask({ id, task, category });
  };

  handleRemoveTask = (id: string) => {
    this.props.startRemoveTask({ id });
  };

  handleCompleteTask = (id: string) => {
    this.props.startCompleteTask({ id });
  };

  render() {
    return (
      <MainContainer>
        <Header />
        <Menu />
        <HomeDashboard
          handleAddTask={this.handleAddTask}
          handleEditTask={this.handleEditTask}
          handleRemoveTask={this.handleRemoveTask}
          handleCompleteTask={this.handleCompleteTask}
          taskList={this.props.taskList}
          startTaskAdd={this.props.startTaskAdd}
          startRemoveTask={this.props.startRemoveTask}
          startEditTask={this.props.startEditTask}
          startCompleteTask={this.props.startCompleteTask}
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
const mapDispatchToProps = {
  startTaskAdd,
  startRemoveTask,
  startEditTask,
  startCompleteTask
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
