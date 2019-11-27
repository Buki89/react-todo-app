import { TaskAction } from "../types";
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

export const setTasks = payload => ({
  type: TaskAction.settingTasks,
  payload
});

export const startSetTasks = () => {
  return dispatch => {
    return database
      .ref("tasks")
      .once("value")
      .then(snapshot => {
        const tasks = [];
        snapshot.forEach(item => {
          tasks.push({
            id: item.key,
            ...item.val()
          });
        });
        dispatch(setTasks(tasks));
      });
  };
};

export const removeTask = ({ id }) => ({
  type: TaskAction.removeTask,
  payload: {
    id
  }
});

export const startRemoveTask = ({ id }) => {
  return dispatch => {
    return database
      .ref(`tasks/${id}`)
      .remove()
      .then(() => {
        dispatch(removeTask({ id }));
      });
  };
};

export const editTask = ({ id, task, category }) => ({
  type: TaskAction.editTask,
  payload: {
    id,
    category,
    task
  }
});

export const startEditTask = ({ id, task, category }) => {
  return dispatch => {
    return database
      .ref(`tasks/${id}`)
      .update({ task, category })
      .then(() => {
        dispatch(editTask({ id, task, category }));
      })
      .catch(e => alert("něco je špatně"));
  };
};

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
