import { TaskAction } from "../types";
import uuid from "uuid";
import database from "../../firebase/firebase";

interface TaskData {
  task: string;
  category: string;
  id: string;
  isCompleted: boolean;
}

export const taskAdd = ({ task, category, id }) => ({
  type: TaskAction.addTask,
  payload: {
    task,
    category,
    id,
    isCompleted: false
  }
});

export const startTaskAdd = (taskData: TaskData) => {
  return dispatch => {
    const { task = "", category = "", isCompleted = false } = taskData;
    const tasks = { task, category, isCompleted };
    return database
      .ref(`tasks`)
      .push(tasks)
      .then(ref => {
        dispatch(taskAdd({ task, category, id: ref.key }));
      })
      .catch(e => {
        alert("chyba");
      });
  };
};

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

export const taskCompleted = ({ id }) => ({
  type: TaskAction.completingTask,
  payload: {
    id
  }
});
