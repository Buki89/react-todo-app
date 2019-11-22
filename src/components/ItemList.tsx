import React from "react";
import { Task } from "./Dashboard";
import Item from "./Item";

interface ItemListProps {
  list: Array<Task>;
  handleRemoveTask: any;
  handleEditTask: any;
}

const textFilter = () => {};

class ItemList extends React.PureComponent<ItemListProps> {
  render() {
    const { list, handleRemoveTask, handleEditTask } = this.props;

    return (
      <>
        <h1>To Do List of items</h1>

        <input name="filter" type="text" onChange={textFilter} />

        {list &&
          list.map((item: Task, index: number) => (
            <div key={index}>
              <Item
                item={item}
                handleRemoveTask={handleRemoveTask}
                handleEditTask={handleEditTask}
              />
            </div>
          ))}
      </>
    );
  }
}

export default ItemList;
