import React from "react";
import styled from "styled-components";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import theme from "../themes/theme";

export const BodyContainer = styled.div`
  background: ${theme.colors.color1};
  margin: 0 20px 20px 20px;
  padding: 40px;
  border: 1px solid ${theme.colors.color2};
  border-radius: 10px;
`;

const HomeDashboard = props => (
  <BodyContainer>
    <div>Add what you should do</div>
    <AddItemForm
      handleSubmit={props.handleAddTask}
      buttonTitle="Add Item"
      taskList={props.taskList}
    />
    <ItemList
      taskList={props.taskList}
      handleEditTask={props.handleEditTask}
      handleRemoveTask={props.handleRemoveTask}
      handleCompleteTask={props.handleCompleteTask}
    />
  </BodyContainer>
);

export default HomeDashboard;
