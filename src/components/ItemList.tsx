import React from "react";
import Item from "./Item";
import { Task, FilterState } from "../types/types";
import { isCompletedFilter, sorting } from "./TodoFunctions";
import styled from "styled-components";

interface ItemListProps {
  taskList: Array<Task>;
  filter: FilterState;
  location: { pathname: string };
}

const Row = styled.div`
  height: 70px;
  height: 100%;
`;

const ItemList = ({ taskList, filter, location }: ItemListProps) => (
  <>
    {console.log(location.pathname)}
    {taskList &&
      isCompletedFilter(filter.filter, taskList)
        .sort(sorting(filter.ascendingSort))
        .filter((item: Task, index) => {
          if (location.pathname === "/") {
            return index < 10;
          } else {
            return index > 10;
          }
        })
        .map((task: Task) => (
          <Row key={task.id}>
            <Item task={task} />
          </Row>
        ))}
  </>
);

export default ItemList;
