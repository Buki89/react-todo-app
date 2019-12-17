import { TaskAction, TodoState } from "../../types/types";

const initialState: TodoState = [];

// TODO: action type
export default (state = initialState, action) => {
  switch (action.type) {
    case TaskAction.addTask:
      return state.some(item => item.task === action.payload.task)
        ? state
        : [...state, action.payload];
    case TaskAction.settingTasks:
      return action.payload;
    case TaskAction.deleteTask:
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
