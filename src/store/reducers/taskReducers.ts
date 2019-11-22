const taskInitialState = [];

export enum TaskAction {
  addTask = "ADD_TASK",
  removeTask = "REMOVE_TASK",
  editTask = "EDIT_TASK",
  searchByName = "SEARCH_BY_NAME"
}

export default (state = taskInitialState, action) => {
  switch (action.type) {
    case TaskAction.addTask:
      return state.some(item => item.task === action.payload.task)
        ? [...state, action.payload]
        : state;
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
