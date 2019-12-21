import React from "react";
import styled from "styled-components";
import moment from "moment";
import Input from "./fields/Input";
import Button from "./Button";
import { Task } from "../types/types";
import { ErrorMessage } from "./fields/errorMessages";

const Menu = styled.div`
  display: flex;
`;

interface ItemProps {
  taskList: Array<Task>;
  id?: string;
  buttonTitle: string;
  handleSubmit: ({ task, id, createdAt: string }) => void;
}

interface State {
  value: string;
  error: boolean;
  errorMessage: string;
}

class AddItemForm extends React.PureComponent<ItemProps, State> {
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
      this.props.taskList.filter(item => item.task === value).length === 0;
    if (value) {
      if (hasUniqueName) {
        this.props.handleSubmit({
          task: value,
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
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <Menu>
            <Input
              name="addTask"
              placeholder="What should I do?"
              value={this.state.value}
              onChange={this.handleChangeValue}
            />
            <Button name="Add" color="#0000ff" type="submit"></Button>
          </Menu>
          {this.state.error && <p>{this.state.errorMessage}</p>}
        </form>
      </div>
    );
  }
}

export default AddItemForm;
