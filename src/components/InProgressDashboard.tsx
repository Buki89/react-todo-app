import React from "react";
import { Task } from "../types/types";
import InProgressTaskList from "./InProgressTaskList";
import { BodyContainer, BordedWrapper } from "../styles/styles";

interface InProgressDashboardProps {
  taskList: Array<Task>;
}

const InProgressDashboard = ({ taskList }: InProgressDashboardProps) => (
  <BodyContainer>
    <BordedWrapper>
      <>
        <h2>Tasks in progress</h2>
        <InProgressTaskList taskList={taskList} />
      </>
    </BordedWrapper>
  </BodyContainer>
);

export default InProgressDashboard;
