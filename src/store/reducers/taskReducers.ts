import { TaskAction } from "../../types/types";
//import { tasks } from "../../test/test";

const taskInitialState = [];

export default (state = taskInitialState, action) => {
  switch (action.type) {
    case TaskAction.addTask:
      return state.some(item => item.task === action.payload.task)
        ? state
        : [...state, action.payload];
    case TaskAction.settingTasks:
      return action.payload;
    case TaskAction.removeTask:
      return state.filter(item => item.id !== action.payload.id);
    case TaskAction.editTask:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    case TaskAction.completingTask:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    default:
      return state;
  }
};

// case TaskAction.completingTask:
//       return state.map(item => {
//         if (item.id === action.payload.id) {
//           return { ...item, isCompleted: !item.isCompleted };
//         }
//         return item;
//       });
