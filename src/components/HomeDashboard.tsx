import React from "react";
import styled from "styled-components";
import theme from "../themes/theme";
import AddItemForm from "./AddItemForm";
import NewItemList from "./NewItemList";

export const BodyContainer = styled.div`
  background: ${theme.colors.color1};
  margin: 0 20px 20px 20px;
  padding: 40px;
  border: 1px solid ${theme.colors.color2};
  border-radius: 10px;
`;

const HomeDashboard = props => (
  <BodyContainer>
    <AddItemForm
      handleSubmit={props.handleAddTask}
      buttonTitle='Add Item'
      taskList={props.taskList}
    />
    <NewItemList taskList={props.taskList} />
  </BodyContainer>
);

export default HomeDashboard;
