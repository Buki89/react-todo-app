import React from "react";
import { BodyContainer } from "./HomeDashboard";
import { Task } from "../types/types";

interface SummaryDashboardProps {
  taskList: Array<Task>;
}

const SummaryDashboard = ({ taskList }: SummaryDashboardProps) => (
  <BodyContainer>
    <div>
      <div>
        {taskList &&
          taskList
            .filter(item => item.isCompleted === true)
            .map(item => <div key={item.id}>{item.task}</div>)}
      </div>
      <div>
        {taskList &&
          taskList
            .filter(item => !item.isCompleted === false)
            .map(item => <div key={item.id}>{item.task}</div>)}
      </div>
    </div>
  </BodyContainer>
);

export default SummaryDashboard;
