export interface Task {
  task: string;
  category: string;
  id?: string;
  isCompleted?: boolean;
}

export interface State {
  task: string;
  category: string;
}

export interface Actions {
  taskAdd: (param: Task) => { type: TaskAction.addTask; payload: Task };
  taskRemove: ({
    id: string
  }) => { type: TaskAction.removeTask; payload: { id: string } };
  taskEdit: (param: Task) => { type: TaskAction.editTask; payload: Task };
  taskCompleted: ({
    id,
    checker: string
  }) => { type: TaskAction.completingTask; payload: { id: string } };
}

export enum TaskAction {
  addTask = "ADD_TASK",
  removeTask = "REMOVE_TASK",
  editTask = "EDIT_TASK",
  searchByName = "SEARCH_BY_NAME",
  completingTask = "COMPLETING_TASK"
}
