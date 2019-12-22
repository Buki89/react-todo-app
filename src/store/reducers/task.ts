import { TaskAction, TodoState } from "../../types/types";

const initialState: TodoState = [];

// TODO: action type
export default (state = initialState, action) => {
  switch (action.type) {
    case TaskAction.addTask:
      return state.some(task => task.taskName === action.payload.task)
        ? state
        : [...state, action.payload];
    case TaskAction.setTasks:
      return action.payload;
    case TaskAction.deleteTask:
      return state.filter(task => task.id !== action.payload.id);
    case TaskAction.editTask:
      return state.map(task => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    case TaskAction.completeTask:
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
    default:
      return state;
  }
};
