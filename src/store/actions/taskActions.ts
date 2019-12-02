import { TaskAction } from "../../types/types";
import database from "../../firebase/firebase";
import { Task } from "../../types/types";

enum Database {
  tasks = "tasks"
}

export const taskAdd = ({ task, category, id, createdAt, note, deadline }) => ({
  type: TaskAction.addTask,
  payload: {
    task,
    category,
    id,
    isCompleted: false,
    createdAt,
    note,
    deadline
  }
});

export const startTaskAdd = (taskData: Task) => {
  return dispatch => {
    const {
      task = "",
      category = "",
      isCompleted = false,
      createdAt = 0,
      note = "",
      deadline = undefined
    } = taskData;
    const tasks = { task, category, isCompleted, createdAt, note, deadline };
    return database
      .ref(`${Database.tasks}`)
      .push(tasks)
      .then(ref => {
        dispatch(
          taskAdd({ task, category, id: ref.key, createdAt, note, deadline })
        );
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
      .ref(`${Database.tasks}`)
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
      .ref(`${Database.tasks}/${id}`)
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
      .ref(`${Database.tasks}/${id}`)
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

export const completeTask = ({ id }) => ({
  type: TaskAction.completingTask,
  payload: {
    id
  }
});

export const startCompleteTask = ({ id }) => {
  return dispatch => {
    return database
      .ref(`${Database.tasks}/${id}`)
      .update({ isCompleted: true })
      .then(() => {
        dispatch(completeTask({ id }));
      });
  };
};
