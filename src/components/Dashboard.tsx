import React from "react";
import styled from "styled-components";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import { connect } from "react-redux";
import { taskAdd, taskRemove, taskEdit } from "../store/actions/taskActions";
import { TaskAction } from "../store/reducers/taskReducers";

const BodyContainer = styled.div`
  background: #f2f2f2;
`;

interface DashBoardState {
  task: string;
  category: string;
}
interface DashboardProps {
  taskList: Array<Task>;
}
interface DashboardActions {
  taskAdd: (param: Task) => { type: TaskAction.addTask; payload: Task };
  taskRemove: ({
    id: string
  }) => { type: TaskAction.removeTask; payload: { id: string } };
  taskEdit: any;
}
export interface Task {
  task: string;
  category: string;
  id?: string;
}

class Dashboard extends React.PureComponent<
  DashboardProps & DashboardActions,
  DashBoardState
> {
  handleAddTask = ({ e, category, task }) => {
    this.props.taskAdd({ category, task });
  };

  handleEditTask = ({ e, id, task, category }) => {
    this.props.taskEdit({ id, task, category });
  };

  handleRemoveTask = (id: string) => {
    this.props.taskRemove({ id });
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
        />
      </BodyContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskList: state
  };
};
const mapDispatchToProps = { taskAdd, taskRemove, taskEdit };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
