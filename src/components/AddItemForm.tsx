import React from "react";
import styled from "styled-components";
//import theme from "../themes/theme";
import moment from "moment";
import { Task } from "../types/types";

const AddButton = styled.button`
  background: #0000ff;
  color: #fff;
  text-align: center;
  border: 1px solid #0000ff;
  border-radius: 3px;
  max-width: 70px;
  font-weight: bold;
  margin: 0 0 0 5px;
`;

const Menu = styled.div`
  display: flex;
`;

interface ItemProps {
  taskList: Array<Task>;
  id?: string;
  buttonTitle: string;
  handleSubmit: any;
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
    const createdAt = moment().format("Do MMMM YYYY");
    const { id } = this.props;
    const { task } = this.state;

    task !== "" &&
      this.props.handleSubmit({
        e,
        task,
        id,
        createdAt
      });
    this.setState({ task: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <Menu>
            <input
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
