const taskInitialState = [];

export enum TaskAction {
  addTask = "ADD_TASK",
  removeTask = "REMOVE_TASK",
  editTask = "EDIT_TASK"
}

export default (state = taskInitialState, action) => {
  switch (action.type) {
    case TaskAction.addTask:
      return [...state, action.payload];
    case TaskAction.removeTask:
      return state.filter(item => item.id !== action.payload.id);
    case TaskAction.editTask:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });

    default:
      return state;
  }
};
