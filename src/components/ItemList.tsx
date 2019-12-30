import React from "react";
import Item from "./Item";
import { Task, FilterState } from "../types/types";
import { filterStatusCompletion, sortBy } from "../lib/helpers";
import styled from "styled-components";
import { HomePageActions } from "./HomePage";

interface ItemListProps {
  taskList: Array<Task>;
  filter: FilterState;
  taskActions: Pick<
    HomePageActions,
    "startDeleteTask" | "startEditTask" | "startCompleteTask"
  >;
}

const Row = styled.div`
  height: 70px;
  height: 100%;
`;

const ItemList = ({ taskList, filter, taskActions }: ItemListProps) => (
  <>
    {taskList &&
      filterStatusCompletion(filter.displayTasks, taskList)
        .sort(sortBy(filter.sortBy))
        .filter((_, index) => {
          const lastIndex = filter.pageNumber * 10 - 1;
          const firstIndex = lastIndex - 9;
          return index >= firstIndex && index <= lastIndex;
        })
        .map((task: Task) => (
          <Row key={task.id}>
            <Item task={task} taskList={taskList} taskActions={taskActions} />
          </Row>
        ))}
  </>
);

export default ItemList;
