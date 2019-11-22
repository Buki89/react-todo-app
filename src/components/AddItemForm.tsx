import React from "react";

interface ItemProps {
  list?: any;
  handleSubmit?: any;
  buttonTitle: string;
  id?: string;
}

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
    const isUnique =
      this.props.list.find(item => item.task === task) === undefined;
    if (isUnique) {
      this.props.handleSubmit({ e, task, category, id });
      this.setState({ task: "" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <input
            name='task'
            type='text'
            onChange={this.handleChangeTask}
            placeholder='text'
            value={this.state.task}
          />
          <select
            name='category'
            onChange={this.handleChangeCat}
            value={this.state.category}
            required
          >
            <option value=''>select</option>
            <option value='work'>Work</option>
            <option value='hobby'>Hobby</option>
            <option value='other'>Other</option>
          </select>

          <button type='submit'>{this.props.buttonTitle}</button>
        </form>
      </div>
    );
  }
}

export default AddItemForm;
