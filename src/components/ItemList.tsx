import React from "react";
import { Task } from "../store/types";
import Item from "./Item";

interface ItemListProps {
  list: Array<Task>;
  handleRemoveTask: any;
  handleEditTask: any;
  handleCompleteTask: any;
}

class ItemList extends React.PureComponent<ItemListProps, any> {
  state = {
    textFilter: ""
  };

  onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const textFilter = e.target.value;
    this.setState({ textFilter });
  };

  render() {
    console.log(this.state.textFilter);
    const {
      list,
      handleRemoveTask,
      handleEditTask,
      handleCompleteTask
    } = this.props;

    return (
      <>
        <h1>To Do List of items</h1>
        <h3>Incompleted tasks</h3>

        <input
          name="filter"
          type="text"
          value={this.state.textFilter}
          onChange={this.onTextChange}
        />

        {list &&
          list
            .filter(
              item =>
                !item.isCompleted &&
                item.task
                  .toLowerCase()
                  .includes(this.state.textFilter.toLocaleLowerCase())
            )
            .map((item: Task, index: number) => (
              <div key={index}>
                <Item
                  item={item}
                  handleRemoveTask={handleRemoveTask}
                  handleEditTask={handleEditTask}
                  handleCompleteTask={handleCompleteTask}
                />
              </div>
            ))}
      </>
    );
  }
}

export default ItemList;
