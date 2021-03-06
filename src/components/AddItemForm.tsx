import React from "react";
import styled, { withTheme } from "styled-components";
import moment from "moment";
import Input from "./fields/Input";
import Button from "./Button";
import { Task } from "../store/types";
import { ErrorMessage } from "./fields/errorMessages";
import { TextSmall } from "../themes/typography";
import { Theme } from "../themes/theme";
import { hasValue } from "../lib/helpers";

const Menu = styled.div`
  display: flex;
  > button {
    margin-left: ${({ theme }) => theme.spacing[0]};
  }
`;
const Message = styled.div`
  display: flex;
  margin: 5px 0 0 0;
  justify-content: center;
  align-items: center;
  min-height: 18px;
  > p {
    margin: 5px 0 0 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 30px;
    > p {
      margin: 0;
    }
  }
`;

interface AddItemFormProps {
  theme?: Theme;
  taskList: Array<Task>;
  id?: string;
  buttonTitle: string;
  handleSubmit: ({ taskName, id, createdAt: string }) => void;
}

interface AddItemFormState {
  value: string;
  error: boolean;
  errorMessage: string;
}

class AddItemForm extends React.PureComponent<
  AddItemFormProps,
  AddItemFormState
> {
  state = {
    value: "",
    error: false,
    errorMessage: ""
  };

  handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({ value });
  };

  handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id } = this.props;
    const { value } = this.state;

    const hasUniqueName =
      this.props.taskList.filter(task => task.taskName === value).length === 0;
    if (hasValue(value)) {
      if (hasUniqueName) {
        this.props.handleSubmit({
          taskName: value,
          id,
          createdAt: moment().toString()
        });
        this.setState({
          value: "",
          error: false,
          errorMessage: ""
        });
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

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <Menu>
          <Input
            name="addTask"
            placeholder="What should I do?"
            value={this.state.value}
            onChange={this.handleChangeValue}
          />
          <Button name="Add me!" type="submit"></Button>
        </Menu>
        <Message>
          {this.state.error && (
            <TextSmall color={this.props.theme.colors.red}>
              {this.state.errorMessage}
            </TextSmall>
          )}
        </Message>
      </form>
    );
  }
}

export default withTheme(AddItemForm);
