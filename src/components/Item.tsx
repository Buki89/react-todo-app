import React from "react";
import styled from "styled-components";
import Input from "./fields/Input";
import { Task } from "../types/types";
import StyledCheckbox from "../themes/checkbox";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { HomePageActions } from "./HomePage";
import { Box } from "../styles/styles";

const Menu = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  justify-content: space-between;
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
  align-items: center;
  div {
    height: 100%;
  }
`;

const NameWithEdit = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 0 10px;
  justify-content: flex-start;
  display: flex;
`;

const MenuItem = styled.div`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

interface TestStyleProps {
  isCompleted: boolean;
}

const Test = styled.div<TestStyleProps>`
  color: ${({ isCompleted }) => (isCompleted ? "#28e08d" : "#333")};
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
`;

interface ItemProps {
  task: Task;
  taskList: Array<Task>;
  taskActions: Pick<
    HomePageActions,
    "startDeleteTask" | "startEditTask" | "startCompleteTask"
  >;
}

interface ItemState {
  isChecked: boolean;
  isVisible: boolean;
  taskName: string;
  error: boolean;
  errorMessage: string;
}

class Item extends React.PureComponent<ItemProps, ItemState> {
  constructor(props: ItemProps) {
    super(props);
    this.state = {
      isChecked: props.task ? props.task.isCompleted : false,
      isVisible: false,
      taskName: props.task ? props.task.taskName : "",
      error: false,
      errorMessage: ""
    };
  }

  handleDeleteTask = () => {
    this.props.taskActions.startDeleteTask(this.props.task.id);
  };

  handleOnCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { task } = this.props;
    this.setState({ isChecked: e.target.checked });
    this.props.taskActions.startCompleteTask(task.id);
  };

  handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasUniqueValue =
      this.props.taskList.filter(
        (task: Task) => task.taskName === this.state.taskName
      ).length === 0;
    if (hasUniqueValue) {
      this.props.taskActions.startEditTask({
        id: this.props.task.id,
        taskName: this.state.taskName,
        isCompleted: this.props.task.isCompleted
      });
      this.setState({ isVisible: false, error: false, errorMessage: "" });
    } else {
      this.setState({
        error: true,
        errorMessage: "Task with this name already exist"
      });
    }
  };

  handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const taskName = e.target.value;
    this.setState({ taskName });
  };

  render() {
    const isCompleted = this.props.task && this.props.task.isCompleted;

    return (
      <Menu>
        <NameWithEdit>
          <Test isCompleted={isCompleted}>{this.props.task.taskName}</Test>

          {this.state.isVisible && (
            <Box>
              <form onSubmit={this.handleEdit}>
                <Input
                  name="edit"
                  value={this.state.taskName}
                  onChange={this.handleChangeTask}
                />
                <button type="submit">Ok</button>
              </form>
            </Box>
          )}
          {this.state.error && <div>{this.state.errorMessage}</div>}
        </NameWithEdit>

        <Box justifyContent="space-between" alignItems="center">
          <MenuItem>
            <FaEdit
              color="#00ACC1"
              onClick={() =>
                this.setState({ isVisible: !this.state.isVisible })
              }
              size={25}
            />
          </MenuItem>
          <MenuItem>
            <FaTrashAlt
              onClick={this.handleDeleteTask}
              color="#d85d71"
              size={22}
            />
          </MenuItem>
          <MenuItem>
            <StyledCheckbox
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.handleOnCheckboxChange}
            />
          </MenuItem>
        </Box>
      </Menu>
    );
  }
}
export default Item;
