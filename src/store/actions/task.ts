import { TaskAction } from "../../types/types";
import database from "../../firebase/firebase";
import { Task } from "../../types/types";

enum Database {
  tasks = "tasks",
  users = "users"
}

export const taskAdd = ({ task, id }: Task) => ({
  type: TaskAction.addTask,
  payload: {
    task,
    id,
    isCompleted: false
  }
});

export const startTaskAdd = (taskData: Task) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { task = "", isCompleted = false } = taskData;
    const tasks = { task, isCompleted };
    return database
      .ref(`${Database.users}/${uid}/${Database.tasks}`)
      .push(tasks)
      .then(ref => {
        dispatch(taskAdd({ task, id: ref.key }));
      })
      .catch(e => {
        alert("chyba");
      });
  };
};

export const setTasks = payload => ({
  type: TaskAction.setTasks,
  payload
});

export const startSetTasks = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`${Database.users}/${uid}/${Database.tasks}`)
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

export const deleteTask = ({ id }) => ({
  type: TaskAction.deleteTask,
  payload: {
    id
  }
});

export const startDeleteTask = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`${Database.users}/${uid}/${Database.tasks}/${id}`)
      .remove()
      .then(() => {
        dispatch(deleteTask({ id }));
      });
  };
};

export const editTask = ({ id, task, isCompleted }) => ({
  type: TaskAction.editTask,
  payload: {
    id,
    task,

    isCompleted
  }
});

export const startEditTask = ({ id, task, isCompleted }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`${Database.users}/${uid}/${Database.tasks}/${id}`)
      .update({ task, isCompleted })
      .then(() => {
        dispatch(
          editTask({
            id,
            task,

            isCompleted
          })
        );
      })
      .catch(e => alert("něco je špatně"));
  };
};

// export const searchTask = ({ text }) => ({
//   type: TaskAction.searchTask,
//   payload: {
//     text
//   }
// });

export const completeTask = ({ id }) => ({
  type: TaskAction.completeTask,
  payload: {
    id
  }
});

export const startCompleteTask = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`${Database.users}/${uid}/${Database.tasks}/${id}`)
      .update({ isCompleted: true })
      .then(() => {
        dispatch(completeTask({ id }));
        // TODO: dispatch redux action -> error handling
      })
      .catch(e => console.log(":(", e));
  };
};
