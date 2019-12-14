import React from "react";
import Item from "./Item";
import { Task, FilterState } from "../types/types";
import { filtering } from "./Filterfunction";
import { sorting } from "./Sorting";
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
      filtering(filter.filter, taskList)
        .sort(sorting(filter.ascendingSort))
        .map(task => (
          <Row key={task.id}>
            <Item task={task} />
          </Row>
        ))}
  </>
);

export default ItemList;
