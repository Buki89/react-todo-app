import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Task } from "../types/types";

const AddButton = styled.button`
  background: #0000ff;
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 3px;
  max-width: 70px;
  font-weight: bold;
  margin: 0 0 0 5px;
`;

const Menu = styled.div`
  display: flex;
`;
const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px;
  text-align: center;
`;

interface ItemProps {
  taskList: Array<Task>;
  id?: string;
  buttonTitle: string;
  handleSubmit: ({ task, id, createdAt: string }) => void;
}

interface State {
  task: string;
}

class AddItemForm extends React.PureComponent<ItemProps, State> {
  state = {
    task: ""
  };

  handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const task = e.target.value;
    this.setState({ task });
  };

  handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id } = this.props;
    const { task } = this.state;

    task !== "" &&
      this.props.taskList.filter(item => item.task === task).length === 0 &&
      this.props.handleSubmit({
        task,
        id,
        createdAt: moment().toString()
      });
    this.setState({ task: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <Menu>
            <StyledInput
              name="task"
              type="text"
              onChange={this.handleChangeTask}
              placeholder="What should I do?"
              value={this.state.task}
            />

            <AddButton type="submit">Add</AddButton>
          </Menu>
        </form>
      </div>
    );
  }
}

export default AddItemForm;
