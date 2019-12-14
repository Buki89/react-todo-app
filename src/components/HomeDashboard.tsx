import React from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import { Task, FilterState } from "../types/types";
import styled from "styled-components";
import Filter from "./Filter";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";

interface HomeDashboardProps {
  handleAddTask: (params: Task) => void;
  taskList: Array<Task>;
  filter: FilterState;
  handleChangeFilter: (filter: string) => void;
  handleSortByMethod: () => void;
}

const Container = styled.div`
  flex-direction: column;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div`
  margin: 20px;
`;
const ItemListContainer = styled.div`
  max-width: 600px;
  width: 100%;
`;
const SortIcon = styled.div`
  margin: 0 0 0 30px;
`;

const HomeDashboard = (props: HomeDashboardProps) => (
  <Container>
    <Item>
      <AddItemForm
        handleSubmit={props.handleAddTask}
        buttonTitle='Add Item'
        taskList={props.taskList}
      />
    </Item>

    <ItemListContainer>
      <SortIcon>
        {props.filter.ascendingSort ? (
          <FaSortAlphaDown onClick={props.handleSortByMethod} />
        ) : (
          <FaSortAlphaUp onClick={props.handleSortByMethod} />
        )}
      </SortIcon>

      <ItemList taskList={props.taskList} filter={props.filter} />
    </ItemListContainer>
    <Item>
      <Filter handleChangeFilter={props.handleChangeFilter} />
    </Item>
  </Container>
);

export default HomeDashboard;
