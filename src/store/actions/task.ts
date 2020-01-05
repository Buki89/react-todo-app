import { TaskAction } from "../../types/types";
import { Task, State } from "../../types/types";
import { Dispatch } from "redux";

import database from "../../firebase/firebase";

type GetState = () => State;

enum Database {
  tasks = "tasks",
  users = "users"
}

export const taskAdd = ({ taskName, id, createdAt, isCompleted }: Task) => ({
  type: TaskAction.addTask,
  payload: {
    taskName,
    id,
    createdAt,
    isCompleted
  }
});

export const startTaskAdd = (taskData: Task) => {
  return (dispatch: Dispatch, getState: GetState) => {
    const uid = getState().auth.uid;
    const { taskName, isCompleted, createdAt } = taskData;
    const taskItem = { taskName, isCompleted, createdAt };
    return database
      .ref(`${Database.users}/${uid}/${Database.tasks}`)
      .push(taskItem)
      .then(ref => {
        dispatch(taskAdd({ taskName, id: ref.key, createdAt, isCompleted }));
      })
      .catch(e => {
        alert("Database error");
        console.log(e);
      });
  };
};

export const setTasks = (tasks: Array<Task>) => ({
  type: TaskAction.setTasks,
  payload: { tasks }
});

export const startSetTasks = () => {
  return (dispatch: Dispatch, getState: GetState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`${Database.users}/${uid}/${Database.tasks}`)
      .once("value")
      .then(snapshot => {
        const tasks: Array<Task> = [];
        snapshot.forEach(item => {
          tasks.push({
            id: item.key,
            ...item.val()
          });
        });
        dispatch(setTasks(tasks));
      })
      .catch(e => {
        alert("Database error");
        console.log(e);
      });
  };
};

export const deleteTask = (id: string) => ({
  type: TaskAction.deleteTask,
  payload: {
    id
  }
});

export const startDeleteTask = (id: string) => {
  return (dispatch: Dispatch, getState: GetState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`${Database.users}/${uid}/${Database.tasks}/${id}`)
      .remove()
      .then(() => {
        dispatch(deleteTask(id));
      })
      .catch(e => {
        alert("Database error");
        console.log(e);
      });
  };
};

export interface EditTaskArgs {
  id: string;
  taskName: string;
  isCompleted: boolean;
}

export const editTask = ({ id, taskName, isCompleted }: EditTaskArgs) => ({
  type: TaskAction.editTask,
  payload: {
    id,
    taskName,
    isCompleted
  }
});

export const startEditTask = ({ id, taskName, isCompleted }: EditTaskArgs) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`${Database.users}/${uid}/${Database.tasks}/${id}`)
      .update({ taskName, isCompleted })
      .then(() => {
        dispatch(
          editTask({
            id,
            taskName,

            isCompleted
          })
        );
      })
      .catch(e => {
        alert("Database error");
        console.log(e);
      });
  };
};

export const completeTask = (id: string) => ({
  type: TaskAction.completeTask,
  payload: {
    id
  }
});

export const startCompleteTask = (id: string, isChecked: boolean) => {
  return (dispatch: Dispatch, getState: GetState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`${Database.users}/${uid}/${Database.tasks}/${id}`)
      .update({ isCompleted: isChecked })
      .then(() => {
        dispatch(completeTask(id));
      })
      .catch(e => {
        alert("Database error");
        console.log(e);
      });
  };
};
