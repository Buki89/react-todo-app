import React from "react";
import Item from "./Item";
import { Task } from "../types/types";

interface ItemListProps {
  taskList: Array<Task>;
  filterList: { filter: string };
}

const ItemList = ({ taskList, filterList }: ItemListProps) => (
  <div>
    {taskList &&
      taskList.map(task => (
        <div key={task.id}>
          <Item task={task} />
        </div>
      ))}
  </div>
);

export default ItemList;
