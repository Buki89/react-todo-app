import React from "react";
import styled from "styled-components";
import Input from "./fields/Input";
import Checkbox from "./fields/Checkbox";
import Button from "./Button";
import theme from "../themes/theme";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { HomePageActions } from "./HomePage";
import { Box } from "../themes/styles";
import { Task } from "../store/types";
import { ErrorMessage } from "./fields/errorMessages";
import { TextSmall } from "../themes/typography";
import { TextAlignment } from "../themes/fields";

const mediaQuery = (breakPoint: string): boolean =>
  window ? window.matchMedia(`(max-width: ${breakPoint})`).matches : false;

const iconSize = (size: number): number => {
  const iconMobileSize = 0.8;

  if (mediaQuery(theme.breakpoints.mobile)) {
    return size * iconMobileSize;
  } else {
    return size;
  }
};

const Container = styled(Box)`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  justify-content: space-between;
  margin: 10px 0;
  padding: 15px;
  height: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 8px;
    padding: 10px;
    max-height: 40px;
    margin: 5px 0;
  }
`;

const Inputs = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 0 10px;
  justify-content: flex-start;
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    line-height: 18px;
  }
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
    const value = this.state.taskName;
    const hasUniqueName =
      this.props.taskList.filter(
        (task: Task) => task.taskName === this.state.taskName
      ).length === 0;
    if (value) {
      if (hasUniqueName) {
        this.props.taskActions.startEditTask({
          id: this.props.task.id,
          taskName: this.state.taskName,
          isCompleted: this.props.task.isCompleted
        });
        this.setState({ isVisible: false, error: false, errorMessage: "" });
      } else {
        this.setState({
          error: true,
          errorMessage: ErrorMessage.duplicate
        });
      }
    } else {
      this.setState({
        error: true,
        errorMessage: ErrorMessage.noValue
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
            <Box flexDirection="column">
              <div>
                <form onSubmit={this.handleEdit}>
                  <Input
                    name="edit"
                    value={this.state.taskName}
                    onChange={this.handleChangeTask}
                    textAlign={TextAlignment.left}
                  />

                  <Button
                    name="Edit"
                    type="submit"
                    styles={{
                      margin: "0 5px",
                      "font-size": "14px",
                      "line-height": "18px"
                    }}
                  ></Button>
                </form>
              </div>
              {this.state.error && (
                <TextSmall color="#cc0000">{this.state.errorMessage}</TextSmall>
              )}
            </Box>
          )}
        </Inputs>

        <Box justifyContent="space-between" alignItems="center">
          <Icons>
            <FaEdit
              color="#00ACC1"
              onClick={() =>
                this.setState({ isVisible: !this.state.isVisible })
              }
              size={iconSize(25)}
            />
          </Icons>
          <Icons>
            <FaTrashAlt
              onClick={this.handleDeleteTask}
              color="#d85d71"
              size={iconSize(22)}
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
