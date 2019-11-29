import React from "react";
import styled from "styled-components";
import theme from "../themes/theme";

interface ItemProps {
  taskList?: any;
  handleSubmit?: any;
  buttonTitle: string;
  id?: string;
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
`;

const Menu = styled.div`
  display: flex;
`;

class AddItemForm extends React.PureComponent<ItemProps> {
  state = {
    task: "",
    category: ""
  };

  handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const task = e.target.value;
    this.setState({ task });
  };

  handleChangeCat = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    this.setState({ category });
  };

  handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id } = this.props;
    const { task, category } = this.state;
    task !== "" && this.props.handleSubmit({ e, task, category, id });
    this.setState({ task: "" });
  };

  render() {
    return (
      <BordedWrapper>
        <form onSubmit={this.handleSubmitForm}>
          <Menu>
            <div>
              <input
                name="task"
                type="text"
                onChange={this.handleChangeTask}
                placeholder=" Insert task name"
                value={this.state.task}
              />
            </div>
            <div>
              <select
                name="category"
                onChange={this.handleChangeCat}
                value={this.state.category}
                required
              >
                <option value="">select</option>
                <option value="work">Work</option>
                <option value="life">Life</option>
                <option value="hobby">Hobby</option>
                <option value="other">Other</option>
              </select>
              <div>
                <button type="submit">{this.props.buttonTitle}</button>
              </div>
            </div>
          </Menu>
        </form>
      </BordedWrapper>
    );
  }
}

export default AddItemForm;
