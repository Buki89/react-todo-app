import React from "react";
import Item from "./Item";
import { Task, FilterState } from "../types/types";
import { filterStatusCompletion, sortAlphabetically } from "../lib/helpers";
import styled from "styled-components";

interface ItemListProps {
  taskList: Array<Task>;
  filter: FilterState;
}

const Row = styled.div`
  height: 70px;
  height: 100%;
`;
// TODO: Naming
const ItemList = ({ taskList, filter }: ItemListProps) => (
  <>
    {taskList &&
      filterStatusCompletion(filter.displayTasks, taskList)
        .sort(sortAlphabetically(filter.sortAlphabetically))
        .filter((_, index) => {
          const lastIndex = filter.pageNumber * 10 - 1;
          const firstIndex = lastIndex - 9;
          return index >= firstIndex && index <= lastIndex;
        })
        .map((task: Task) => (
          <Row key={task.id}>
            <Item task={task} />
          </Row>
        ))}
  </>
);

export default ItemList;
