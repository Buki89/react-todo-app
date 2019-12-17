import React from "react";
import { numberOfTasks } from "./TodoFunctions";
import { Task } from "../types/types";

interface Overviewprops {
  taskList: Array<Task>;
}

const Overview = (props: Overviewprops) => (
  <div>
    <div>Complete : {numberOfTasks(props.taskList, "Completed")}</div>
    <div>Incomplete : {numberOfTasks(props.taskList, "InCompleted")}</div>
    <div>Total : {numberOfTasks(props.taskList, "Total")}</div>
  </div>
);

export default Overview;
