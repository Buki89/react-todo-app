import React from "react";
import styled from "styled-components";
import theme from "../themes/theme";
import moment from "moment";

interface ItemProps {
  taskList?: any;
  handleSubmit?: any;
  buttonTitle: string;
  id?: string;
}

interface State {
  task: string;
  category: string;
  note: string;
  deadline: string;
}

const BordedWrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;

  input {
    border: 1px solid black;
    border-radius: 5px;
    box-sizing: border-box;
    height: 40px;
    text-align: center;
    padding: 2px;
    margin: 5px;
  }
  select {
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 5px;
    height: 40px;
    padding: 0;
    margin: 5px;
    width: 100px;
  }
  button {
    background: ${theme.colors.color4};
    border: none;
    margin: 5px;
    height: 40px;
  }
  textarea {
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 5px;
    height: 80px;
    padding: 0;
    margin: 5px;
    width: 300px;
  }
`;

const BodyWrapper = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
`;

class AddItemForm extends React.PureComponent<ItemProps, State> {
  state = {
    task: "",
    category: "",
    note: "",
    deadline: undefined
  };

  handleChangeDeadline = (e: React.ChangeEvent<HTMLInputElement>) => {
    const deadline = e.target.value;
    this.setState({ deadline });
  };

  handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const task = e.target.value;
    this.setState({ task });
  };

  handleChangeCat = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    this.setState({ category });
  };

  handleChangeNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const note = e.target.value;
    this.setState({ note });
  };

  handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createdAt = moment().format("YYYY-MM-DD");
    const { id } = this.props;
    const { task, category, note, deadline } = this.state;
    console.log(moment().format("YYYY-MM-DD"));

    task !== "" &&
      this.props.handleSubmit({
        e,
        task,
        category,
        id,
        createdAt,
        note,
        deadline
      });
    this.setState({ task: "" });
  };

  render() {
    console.log(this.state);
    return (
      <BordedWrapper>
        <form onSubmit={this.handleSubmitForm}>
          <BodyWrapper>
            <Menu>
              <div>
                Task Name
                <input
                  name='task'
                  type='text'
                  onChange={this.handleChangeTask}
                  placeholder=' Insert task name'
                  value={this.state.task}
                />
              </div>
              <div>
                <select
                  name='category'
                  onChange={this.handleChangeCat}
                  value={this.state.category}
                  required
                >
                  <option value=''>select</option>
                  <option value='work'>Work</option>
                  <option value='life'>Life</option>
                  <option value='hobby'>Hobby</option>
                  <option value='other'>Other</option>
                </select>
              </div>
              <div>
                <input
                  name='deadline'
                  type='date'
                  value={this.state.deadline}
                  onChange={this.handleChangeDeadline}
                />
              </div>
              <div>
                <textarea
                  name='note'
                  value={this.state.note}
                  onChange={this.handleChangeNote}
                ></textarea>
              </div>
            </Menu>
          </BodyWrapper>

          <div>
            <button type='submit'>{this.props.buttonTitle}</button>
          </div>
        </form>
      </BordedWrapper>
    );
  }
}

export default AddItemForm;
