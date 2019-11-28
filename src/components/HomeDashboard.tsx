import React from "react";
import styled from "styled-components";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import ItemListCompleted from "./ItemListCompleted";
import theme from "../themes/theme";
import { connect } from "react-redux";
import {
  taskAdd,
  startTaskAdd,
  removeTask,
  startRemoveTask,
  editTask,
  startEditTask,
  completeTask,
  startCompleteTask
} from "../store/actions/taskActions";
import { Task, State, Actions } from "../types/types";

export const BodyContainer = styled.div`
  background: ${theme.colors.color1};
  margin: 0 20px 20px 20px;
  padding: 40px;
  border: 1px solid ${theme.colors.color2};
  border-radius: 10px;
`;

interface DashboardProps {
  taskList: Array<Task>;
}

class HomeDashboard extends React.PureComponent<
  DashboardProps & Actions,
  State
> {
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
      <BodyContainer>
        <div>Add what you should do</div>
        <AddItemForm
          handleSubmit={this.handleAddTask}
          buttonTitle='Add Item'
          list={this.props.taskList}
        />
        <ItemList
          list={this.props.taskList}
          handleEditTask={this.handleEditTask}
          handleRemoveTask={this.handleRemoveTask}
          handleCompleteTask={this.handleCompleteTask}
        />
        <ItemListCompleted list={this.props.taskList} />
      </BodyContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskList: state
  };
};
const mapDispatchToProps = {
  taskAdd,
  startTaskAdd,
  removeTask,
  startRemoveTask,
  editTask,
  startEditTask,
  completeTask,
  startCompleteTask
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeDashboard);
