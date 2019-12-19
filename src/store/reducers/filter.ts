import { FilterAction, FilterState, Filter } from "../../types/types";

// TODO: naming - sortAlphabetically -> isSortedAlphabetically
const initialState: FilterState = {
  displayTasks: Filter.everything,
  sortAlphabetically: true,
  pageNumber: 1
};

// TODO: type: Action
export default (state = initialState, action) => {
  switch (action.type) {
    case FilterAction.filterChange:
      return {
        ...state,
        displayTasks: action.payload.filter
      };
    case FilterAction.sortMethod:
      return { ...state, sortAlphabetically: !state.sortAlphabetically };
    case FilterAction.showPage:
      return { ...state, pageNumber: action.payload.pageNumber };

    default:
      return state;
  }
};
