import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { State, TodoState, Task, ThunkResult } from "../types/types";
import {
  startDeleteTask,
  startCompleteTask,
  startEditTask
} from "../store/actions/task";
import Button from "./Button";
import StyledCheckbox from "../themes/checkbox";

const Menu = styled.div`
  display: flex;
  border: 1px solid #ddd;
  justify-content: space-between;
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  align-items: center;
  div {
    height: 60px;
    height: 100%;
  }
`;
const LeftSide = styled.div`
  font-size: 20px;
  font-weight: bold;
  justify-content: start;
  display: flex;
`;
const RightSide = styled.div`
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
        <LeftSide>
          <>{this.props.task.task}</>
          {this.state.isVisible && (
            <Flex>
              <form onSubmit={this.handleEdit}>
                <EditInput
                  value={this.state.task}
                  onChange={this.handleChangeTask}
                ></EditInput>
                <button type='submit'>Ok</button>
              </form>
            </Flex>
          )}
        </LeftSide>

        <RightSide>
          <StyledCheckbox
            type='checkbox'
            checked={this.state.isChecked}
            onChange={this.handleOnCheckboxChange}
          ></StyledCheckbox>
          <div>
            <Button
              color='#23cc33'
              onClick={() =>
                this.setState({ isVisible: !this.state.isVisible })
              }
              name='Edit'
            />
          </div>

          <Button
            color='#cc0000'
            onClick={this.handleDeleteTask}
            name='Delete'
          />
        </RightSide>
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
