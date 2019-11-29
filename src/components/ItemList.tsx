import React from "react";
import { Task } from "../types/types";
import Item from "./Item";

interface ItemListProps {
  taskList: Array<Task>;
  handleRemoveTask: any;
  handleEditTask: any;
  handleCompleteTask: any;
}

class ItemList extends React.PureComponent<ItemListProps, any> {
  state = {
    textFilter: "",
    sortBy: ""
  };

  onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const textFilter = e.target.value;
    this.setState({ textFilter });
  };
  handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBy = e.target.value;
    this.setState({ sortBy });
  };
  sortByName = (a, b) => {
    if (a.task > b.task) {
      return 1;
    } else if (b.task > a.task) {
      return -1;
    } else {
      return 0;
    }
  };

  sortByCategory = (a, b) => {
    if (a.category > b.category) {
      return 1;
    } else if (b.category > a.category) {
      return -1;
    } else {
      return 0;
    }
  };

  render() {
    const {
      taskList,
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
          placeholder="filter"
          value={this.state.textFilter}
          onChange={this.onTextChange}
        />
        <select onChange={this.handleSortByChange} value={this.state.sortBy}>
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
        {taskList &&
          taskList
            .filter(
              item =>
                !item.isCompleted &&
                item.task
                  .toLowerCase()
                  .includes(this.state.textFilter.toLocaleLowerCase())
            )
            .sort(
              this.state.sortBy === "name"
                ? this.sortByName
                : this.sortByCategory
            )

            .map((item: Task, index: number) => (
              <div key={item.id}>
                <Item
                  item={item}
                  handleRemoveTask={handleRemoveTask}
                  handleEditTask={handleEditTask}
                  handleCompleteTask={handleCompleteTask}
                  index={index}
                />
              </div>
            ))}
      </>
    );
  }
}

export default ItemList;
