import { TaskAction } from "../types";

const taskInitialState = [];

export default (state = taskInitialState, action) => {
  switch (action.type) {
    case TaskAction.addTask:
      return state.some(item => item.task === action.payload.task)
        ? state
        : [...state, action.payload];
    case TaskAction.removeTask:
      return state.filter(item => item.id !== action.payload.id);
    case TaskAction.editTask:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    case TaskAction.searchByName:
      return;
    case TaskAction.completingTask:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    default:
      return state;
  }
};

// return state.some(item => item.task === action.payload.task)
//   ? [...state, action.payload]
//   : state;

// return state.filter(item => item.task === action.payload.task).length ===
//         0
//         ? [...state, action.payload]
//         : state;
