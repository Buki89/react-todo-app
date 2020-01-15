import React from "react";
import Item from "./Item";
import styled from "styled-components";
import { Task, FilterState } from "../types/types";
import { filterBy, sortBy } from "../lib/helpers";
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
  max-height: 60px;
  height: 100%;
`;

const ItemList = ({ taskList, filter, taskActions }: ItemListProps) => (
  <>
    {taskList &&
      filterBy(filter.filterBy, taskList)
        .sort(sortBy(filter.sortBy))
        .filter((_, index) => {
          const lastIndex = filter.currentPage * 10 - 1;
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
