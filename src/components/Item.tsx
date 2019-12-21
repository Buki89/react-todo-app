import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { State, TodoState, Task, ThunkResult } from "../types/types";
import {
  startDeleteTask,
  startCompleteTask,
  startEditTask
} from "../store/actions/task";
import StyledCheckbox from "../themes/checkbox";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Menu = styled.div`
  display: flex;
  border: 1px solid #000;
  justify-content: space-between;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  align-items: center;
  div {
    height: 100%;
  }
`;
const NameWithEdit = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 0 10px;
  justify-content: flex-start;
  display: flex;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Flex = styled.div`
  display: flex;
`;
const EditInput = styled.input`
  border: none;
  margin: 0 0 0 10px;
  width: 70px;
`;

interface ItemProps {
  task: Task;
  taskList: TodoState;
  startDeleteTask: (id: string) => ThunkResult<void>;
  startCompleteTask: (id: string) => ThunkResult<void>;
  startEditTask: ({
    id,
    task,
    isCompleted
  }: {
    id: string;
    task: string;
    isCompleted: boolean;
  }) => ThunkResult<void>;
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
    this.props.startDeleteTask(this.props.task.id);
  };

  handleOnCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { task } = this.props;
    this.setState({ isChecked: e.target.checked });
    this.props.startCompleteTask(task.id);
  };
  handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasUniqueValue =
      this.props.taskList.filter((item: Task) => item.task === this.state.task)
        .length === 0;
    if (hasUniqueValue) {
      this.props.startEditTask({
        id: this.props.task.id,
        task: this.state.task,
        isCompleted: this.props.task.isCompleted
      });
      this.setState({ isVisible: false });
    } else {
      alert("Duplicite task");
    }
  };
  handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const task = e.target.value;
    this.setState({ task });
  };
  render() {
    return (
      <Menu>
        <NameWithEdit>
          {this.props.task.task}
          {this.state.isVisible && (
            <Flex>
              <form onSubmit={this.handleEdit}>
                {/* TODO: input component */}
                <EditInput
                  value={this.state.task}
                  onChange={this.handleChangeTask}
                ></EditInput>
                <button type="submit">Ok</button>
              </form>
            </Flex>
          )}
        </NameWithEdit>

        <Buttons>
          <StyledCheckbox
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleOnCheckboxChange}
          ></StyledCheckbox>
          <FaEdit
            color="#1aff1a"
            onClick={() => this.setState({ isVisible: !this.state.isVisible })}
          />

          <FaTrashAlt onClick={this.handleDeleteTask} color="	#ff1a1a" />
        </Buttons>
      </Menu>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    taskList: state.tasks
  };
};

const mapDispatchToProps = {
  startDeleteTask,
  startCompleteTask,
  startEditTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
