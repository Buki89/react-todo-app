import React from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import { Task } from "../types/types";
import styled from "styled-components";
import Filter from "./Filter";

interface HomeDashboardProps {
  handleAddTask: (params: Task) => void;
  taskList: Array<Task>;
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

const HomeDashboard = (props: HomeDashboardProps) => (
  <Container>
    <Item>
      <AddItemForm
        handleSubmit={props.handleAddTask}
        buttonTitle="Add Item"
        taskList={props.taskList}
      />
    </Item>
    <Item>
      <ItemList taskList={props.taskList} />
    </Item>
    <Item>
      <Filter />
    </Item>
  </Container>
);

export default HomeDashboard;
