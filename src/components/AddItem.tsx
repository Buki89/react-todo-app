import React from "react";
import Item from "./Item";

class AddItem extends React.PureComponent {
  state = {
    value: "",
    list: []
  };

  handleSubmit = (e: any) => {
    if (this.state.value) {
      this.setState({ list: [...this.state.list, this.state.value] });
    }
    e.preventDefault();
  };
  handleChange = (e: any) => {
    const value = e.target.value;
    this.setState(() => ({ value }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.handleChange}
            placeholder='text'
            value={this.state.value}
          />
          <button>Add Item</button>
        </form>
        <Item list={this.state.list} />
      </div>
    );
  }
}
export default AddItem;

// {this.state.list.map(item => (
//   <div key={item}>{item}</div>
// ))}
