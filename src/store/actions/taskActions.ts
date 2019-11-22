import { TaskAction } from "../reducers/taskReducers";
import uuid from "uuid";

export const taskAdd = ({ task, category }) => ({
  type: TaskAction.addTask,
  payload: {
    task,
    category,
    id: uuid()
  }
});

export const taskRemove = ({ id }) => ({
  type: TaskAction.removeTask,
  payload: {
    id
  }
});

export const taskEdit = ({ id, task, category }) => ({
  type: TaskAction.editTask,
  payload: {
    id,
    category,
    task
  }
});

export const searchByName = ({ text }) => ({
  type: TaskAction.searchByName,
  payload: {
    text
  }
});
