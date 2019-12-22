import { TaskAction } from "../../types/types";
import database from "../../firebase/firebase";
import { Task } from "../../types/types";

enum Database {
  tasks = "tasks",
  users = "users"
}

export const taskAdd = ({ taskName, id, createdAt }: Task) => ({
  type: TaskAction.addTask,
  payload: {
    taskName,
    id,
    createdAt,
    isCompleted: false
  }
});

export const startTaskAdd = (taskData: Task) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { taskName = "", isCompleted = false, createdAt } = taskData;
    const taskItem = { taskName, isCompleted, createdAt };
    return database
      .ref(`${Database.users}/${uid}/${Database.tasks}`)
      .push(taskItem)
      .then(ref => {
        dispatch(taskAdd({ taskName, id: ref.key, createdAt }));
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

export const deleteTask = (id: string) => ({
  type: TaskAction.deleteTask,
  payload: {
    id
  }
});

export const startDeleteTask = (id: string) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`${Database.users}/${uid}/${Database.tasks}/${id}`)
      .remove()
      .then(() => {
        dispatch(deleteTask(id));
      });
  };
};

export const editTask = ({ id, taskName, isCompleted }) => ({
  type: TaskAction.editTask,
  payload: {
    id,
    taskName,
    isCompleted
  }
});

export const startEditTask = ({ id, taskName, isCompleted }) => {
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
      .catch(e => alert("něco je špatně"));
  };
};

// export const searchTask = ({ text }) => ({
//   type: TaskAction.searchTask,
//   payload: {
//     text
//   }
// });

export const completeTask = (id: string) => ({
  type: TaskAction.completeTask,
  payload: {
    id
  }
});

export const startCompleteTask = (id: string) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`${Database.users}/${uid}/${Database.tasks}/${id}`)
      .update({ isCompleted: true })
      .then(() => {
        dispatch(completeTask(id));
        // TODO: dispatch redux action -> error handling
      })
      .catch(e => console.log(":(", e));
  };
};
