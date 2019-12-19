import React from "react";
import { numberOfTasks } from "../lib/helpers";
import { Task, Filter } from "../types/types";

interface Overviewprops {
  taskList: Array<Task>;
}

// TODO: use map instead
const Overview = (props: Overviewprops) => (
  <div>
    <div>Completed : {numberOfTasks(props.taskList, Filter.completed)}</div>
    <div>Incompleted : {numberOfTasks(props.taskList, Filter.incompleted)}</div>
    <div>Total : {numberOfTasks(props.taskList, Filter.everything)}</div>
  </div>
);

export default Overview;
