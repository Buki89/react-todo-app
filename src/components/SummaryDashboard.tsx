import React from "react";
import { BodyContainer } from "./HomeDashboard";
import { Task } from "../types/types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  div {
    margin: 0 40px;
    padding: 5px 0;
  }
`;

interface SummaryDashboardProps {
  taskList: Array<Task>;
}

const SummaryDashboard = ({ taskList }: SummaryDashboardProps) => (
  <BodyContainer>
    <Wrapper>
      <div>
        <h2>Completed tasks</h2>
        {taskList &&
          taskList
            .filter(item => item.isCompleted)
            .map(item => <div key={item.id}>{item.task}</div>)}
      </div>
      <div>
        <h2>Incompleted tasks</h2>
        {taskList &&
          taskList
            .filter(item => !item.isCompleted)
            .map(item => <div key={item.id}>{item.task}</div>)}
      </div>
    </Wrapper>
  </BodyContainer>
);

export default SummaryDashboard;
