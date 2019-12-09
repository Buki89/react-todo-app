import { TaskAction } from "../../types/types";
import database from "../../firebase/firebase";
import { Task } from "../../types/types";
import { Dispatch } from "redux";
import { type } from "os";
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      task = "",
      category = "",
      isCompleted = false,
      createdAt = 0,
      note = "",
      deadline = ""
    } = taskData;
    const tasks = { task, category, isCompleted, createdAt, note, deadline };
    return database
      .ref(`users/${uid}/${Database.tasks}`)
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

type Test = (dispatch, getState) => Promise<void>;

export const startSetTasks = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`users/${uid}/${Database.tasks}`)
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`users/${uid}/${Database.tasks}/${id}`)
      .remove()
      .then(() => {
        dispatch(removeTask({ id }));
      });
  };
};

export const editTask = ({
  id,
  task,
  category,
  note,
  deadline,
  createdAt,
  isCompleted
}) => ({
  type: TaskAction.editTask,
  payload: {
    id,
    category,
    task,
    note,
    deadline,
    createdAt,
    isCompleted
  }
});

export const startEditTask = ({
  id,
  task,
  category,
  note,
  deadline,
  createdAt,
  isCompleted
}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`users/${uid}/${Database.tasks}/${id}`)
      .update({ task, category, note, deadline, createdAt, isCompleted })
      .then(() => {
        dispatch(
          editTask({
            id,
            task,
            category,
            note,
            deadline,
            createdAt,
            isCompleted
          })
        );
      })
      .catch(e => alert("něco je špatně"));
  };
};

// export const searchByName = ({ text }) => ({
//   type: TaskAction.searchByName,
//   payload: {
//     text
//   }
// });

export const completeTask = ({ id }) => ({
  type: TaskAction.completingTask,
  payload: {
    id
  }
});

export const startCompleteTask = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`users/${uid}/${Database.tasks}/${id}`)
      .update({ isCompleted: true })
      .then(() => {
        dispatch(completeTask({ id }));
      });
  };
};
