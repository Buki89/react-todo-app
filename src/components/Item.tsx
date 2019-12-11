import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { State, TodoState, Task, ThunkResult } from "../types/types";
import {
  startDeleteTask,
  startCompleteTask,
  startEditTask
} from "../store/actions/task";

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 3px;
  padding: 5px;
  div {
    display: inline-block;
    margin: 3px;
    width: 200px;
  }
`;
const Flex = styled.div`
  display: flex;
`;

const DeleteButton = styled.button`
  background: #cc0000;
  color: #fff;
  text-align: center;
  border: 1px solid #ff0000;
  border-radius: 3px;
  width: 80px;
  height: 40px;
  font-weight: bold;
  margin: 2px;
  &:hover {
    cursor: pointer;
  }
`;
const EditButton = styled.button`
  background: #23cc33;
  color: #fff;
  text-align: center;
  border: 1px solid #33cc33;
  border-radius: 3px;
  width: 80px;
  height: 40px;
  font-weight: bold;
  margin: 2px;
  &:hover {
    cursor: pointer;
  }
`;
const EditInput = styled.input`
  width: 70px;
`;
type StartDeleteTaskAction = ({ id: string }) => ThunkResult<void>;
type StartCompleteTask = ({ id: string }) => ThunkResult<void>;
type StartEditTask = ({
  id,
  task,
  createdAt: string,
  isCompleted: boolean
}) => ThunkResult<void>;

interface ItemProps {
  task: Task;
  item: TodoState;
  startDeleteTask: StartDeleteTaskAction;
  startCompleteTask: StartCompleteTask;
  startEditTask: StartEditTask;
}
interface ItemState {
  isChecked: boolean;
  isVisible: boolean;
  task: string;
}

class Item extends React.PureComponent<ItemProps, ItemState> {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.task ? props.task.isCompleted : false,
      isVisible: false,
      task: props.task ? props.task.task : ""
    };
  }
  handleDeleteTask = () => {
    this.props.startDeleteTask({ id: this.props.task.id });
  };

  handleOnCheckboxChange = e => {
    const { task } = this.props;
    this.setState({ isChecked: e.target.checked });
    this.props.startCompleteTask({ id: task.id });
  };
  handleEdit = e => {
    e.preventDefault();
    this.props.startEditTask({
      id: this.props.task.id,
      task: this.state.task,
      createdAt: this.props.task.createdAt,
      isCompleted: this.props.task.isCompleted
    });
    this.setState({ isVisible: false });
  };
  handleChangeTask = e => {
    const task = e.target.value;
    this.setState({ task });
  };
  render() {
    return (
      <Menu>
        <div>
          <div>{this.props.task.task}</div>
          {this.state.isVisible && (
            <Flex>
              <form onSubmit={this.handleEdit}>
                <EditInput
                  value={this.state.task}
                  onChange={this.handleChangeTask}
                ></EditInput>
                <button type="submit">Ok</button>
              </form>
            </Flex>
          )}
        </div>

        <div>{this.props.task.createdAt}</div>
        <div>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleOnCheckboxChange}
          ></input>
          <EditButton
            onClick={() => this.setState({ isVisible: !this.state.isVisible })}
          >
            Edit
          </EditButton>
          <DeleteButton onClick={this.handleDeleteTask}>Delete</DeleteButton>
        </div>
      </Menu>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    item: state.tasks
  };
};

const mapDispatchToProps = {
  startDeleteTask,
  startCompleteTask,
  startEditTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
