import React from "react";
import { BodyContainer, BordedWrapper } from "../styles/styles";
import AddItemForm from "./AddItemForm";

const EditDashboard = props => (
  <BodyContainer>
    <BordedWrapper>
      <AddItemForm
        taskList={props.taskList}
        buttonTitle='Edit Item'
        handleSubmit={props.handleSubmit}
        handleRemoveTask={props.handleRemoveTask}
        handleCompleteTask={props.handleCompleteTask}
      />
    </BordedWrapper>
  </BodyContainer>
);

export default EditDashboard;
