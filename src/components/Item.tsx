import React from "react";
import styled, { withTheme } from "styled-components";
import Input from "./fields/Input";
import Checkbox from "./fields/Checkbox";
import Button from "./Button";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { HomePageActions } from "./HomePage";
import { Box } from "../themes/styles";
import { Task } from "../store/types";
import { ErrorMessage } from "./fields/errorMessages";
import { TextSmall } from "../themes/typography";
import { TextAlignment } from "../themes/fields";
import { iconSize, anyChar } from "../lib/helpers";
import { Theme } from "../themes/theme";

const Container = styled(Box)`
  justify-content: space-between;

  height: 100%;
  min-height: 36px;
  margin: 10px;
`;

const Inputs = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 0 10px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const Icons = styled.div`
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const InputEdit = styled(Input)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
    margin: 0;
    max-height: 30px;
    max-width: 120px;
  }
`;

interface StyledTextProps {
  isCompleted: boolean;
}

const StyledText = styled.div<StyledTextProps>`
  color: ${({ isCompleted, theme }) =>
    isCompleted ? theme.colors.green : theme.colors.black};
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
`;

interface ItemProps {
  task: Task;
  theme: Theme;
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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  margin: 10px 0;
`;

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
    if (anyChar(value)) {
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
    // TODO: maybe put in separate components?
    return (
      <Div>
        <Container>
          <Inputs>
            {!this.state.isVisible && (
              <StyledText isCompleted={isCompleted}>
                {this.props.task.taskName}
              </StyledText>
            )}

            {this.state.isVisible && (
              <Box flexDirection="column" alignItems="flex-start">
                <div>
                  <form onSubmit={this.handleEdit}>
                    <InputEdit
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
                    />
                  </form>
                </div>
              </Box>
            )}
          </Inputs>

          <Box justifyContent="space-between" alignItems="center">
            <Icons>
              <FaEdit
                color={this.props.theme.colors.turquise}
                onClick={() =>
                  this.setState({
                    isVisible: !this.state.isVisible,
                    error: false
                  })
                }
                size={iconSize(25)}
              />
            </Icons>
            <Icons>
              <FaTrashAlt
                onClick={this.handleDeleteTask}
                color={this.props.theme.colors.redLight}
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

        {this.state.error && (
          <>
            <Box margin="0 0 10px 20px" justifyContent="flex-start">
              <TextSmall color={this.props.theme.colors.red}>
                {this.state.errorMessage}
              </TextSmall>
            </Box>
          </>
        )}
      </Div>
    );
  }
}
export default withTheme(Item);
