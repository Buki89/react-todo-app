import React from "react";
import styled from "styled-components";
import Input from "./fields/Input";
import Checkbox from "./fields/Checkbox";
import Button from "./Button";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { HomePageActions } from "./HomePage";
import { Box } from "../themes/styles";
import { Task } from "../types/types";

const Container = styled.div`
  align-items: center;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  justify-content: space-between;
  margin: 10px 0;
  padding: 15px;
  max-height: 60px;
  height: 100%;
`;

const Inputs = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 0 10px;
  justify-content: flex-start;
  display: flex;
`;

const Icons = styled.div`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

interface StyledTextProps {
  isCompleted: boolean;
}

const StyledText = styled.div<StyledTextProps>`
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
  state = {
    isChecked: this.props.task ? this.props.task.isCompleted : false,
    isVisible: false,
    taskName: this.props.task ? this.props.task.taskName : "",
    error: false,
    errorMessage: ""
  };

  handleDeleteTask = () => {
    this.props.taskActions.startDeleteTask(this.props.task.id);
  };

  handleOnCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { task } = this.props;
    const isChecked = e.target.checked;
    this.setState({ isChecked });
    this.props.taskActions.startCompleteTask(task.id, isChecked);
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
      <Container>
        <Inputs>
          {!this.state.isVisible && (
            <StyledText isCompleted={isCompleted}>
              {this.props.task.taskName}
            </StyledText>
          )}

          {this.state.isVisible && (
            <Box>
              <form onSubmit={this.handleEdit}>
                <Input
                  name="edit"
                  value={this.state.taskName}
                  onChange={this.handleChangeTask}
                />
                <Button name="Edit" type="submit"></Button>
              </form>
            </Box>
          )}
          {this.state.error && <div>{this.state.errorMessage}</div>}
        </Inputs>

        <Box justifyContent="space-between" alignItems="center">
          <Icons>
            <FaEdit
              color="#00ACC1"
              onClick={() =>
                this.setState({ isVisible: !this.state.isVisible })
              }
              size={25}
            />
          </Icons>
          <Icons>
            <FaTrashAlt
              onClick={this.handleDeleteTask}
              color="#d85d71"
              size={22}
            />
          </Icons>
          <Icons>
            <Checkbox
              checked={this.state.isChecked}
              onChange={this.handleOnCheckboxChange}
            />
          </Icons>
        </Box>
      </Container>
    );
  }
}
export default Item;
