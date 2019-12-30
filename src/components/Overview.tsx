import React from "react";
import { numberOfTasks } from "../lib/helpers";
import { Task, Filter } from "../types/types";
import { Box } from "../styles/styles";

interface OverviewProps {
  taskList: Array<Task>;
}

interface Category {
  label: string;
  filter: Filter;
}

const Overview = (props: OverviewProps) => {
  const data: Array<Category> = [
    { label: "Completed", filter: Filter.completed },
    { label: "Incompleted", filter: Filter.incompleted },
    { label: "All Tasks", filter: Filter.allTasks }
  ];

  return (
    <Box display="block" width="100px">
      {data.map((item: Category, index: number) => (
        <Box key={index} justifyContent="space-between">
          <div>{item.label}:</div>
          <div>{numberOfTasks(props.taskList, item.filter)}</div>
        </Box>
      ))}
    </Box>
  );
};
export default Overview;
