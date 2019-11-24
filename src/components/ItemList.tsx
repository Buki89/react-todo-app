import React from "react";
import { Task } from "../store/types";
import Item from "./Item";

interface ItemListProps {
  list: Array<Task>;
  handleRemoveTask: any;
  handleEditTask: any;
  handleCompleteTask: any;
}

const textFilter = () => {};

class ItemList extends React.PureComponent<ItemListProps> {
  render() {
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

        <input name="filter" type="text" onChange={textFilter} />

        {list &&
          list
            .filter(item => !item.isCompleted)
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
