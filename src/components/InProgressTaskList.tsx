import React from "react";
import { Task } from "../types/types";
import styled from "styled-components";
import InProgressItem from "./InProgressItem";

interface InProgressTaskListProps {
  taskList: Array<Task>;
}

const Menu = styled.div`
  display: flex;
  div {
    margin: 0 20px;
    width: 100px;
    text-align: center;
    padding: 5px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const InProgressTaskList = ({ taskList }: InProgressTaskListProps) => (
  <div>
    <Menu>
      <div>Task</div>
      <div>Category</div>
      <div>Created</div>
      <div>Deadline</div>
    </Menu>

    <div>
      {taskList &&
        taskList
          .filter((task: Task) => !task.isCompleted)
          .map((item: Task) => <InProgressItem item={item} key={item.id} />)}
    </div>
  </div>
);

export default InProgressTaskList;
