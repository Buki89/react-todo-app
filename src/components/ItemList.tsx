import React from "react";
import Item from "./Item";
import { Task, FilterState } from "../types/types";
import { filterStatusCompletion, sortAlphabetically } from "./TodoFunctions";
import styled from "styled-components";

interface ItemListProps {
  taskList: Array<Task>;
  filter: FilterState;
}

const Row = styled.div`
  height: 70px;
  height: 100%;
`;

const ItemList = ({ taskList, filter }: ItemListProps) => (
  <>
    {taskList &&
      filterStatusCompletion(filter.displayTasks, taskList)
        .sort(sortAlphabetically(filter.sortAlphabetically))
        .filter((item: Task, index) => {
          const end = filter.pageNumber * 10 - 1;
          const start = end - 9;
          return index >= start && index <= end;
        })
        .map((task: Task) => (
          <Row key={task.id}>
            <Item task={task} />
          </Row>
        ))}
  </>
);

export default ItemList;
