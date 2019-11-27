import React from "react";
import styled from "styled-components";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import ItemListCompleted from "./ItemListCompleted";
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

const BodyContainer = styled.div`
  background: #f2f2f2;
`;

interface DashboardProps {
  taskList: Array<Task>;
}

class Dashboard extends React.PureComponent<DashboardProps & Actions, State> {
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
        <div>
          <h2>Add what you should do</h2>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
