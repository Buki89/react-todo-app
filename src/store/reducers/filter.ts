import { FilterAction, FilterState, SortType, Action } from "../types";

const initialState: FilterState = {
  filterBy: SortType.allTasks,
  sortBy: "",
  currentPage: 1
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case FilterAction.filterByChange:
      return {
        ...state,
        filterBy: action.payload.filter
      };
    case FilterAction.sortByChange:
      return { ...state, sortBy: action.payload.sort };
    case FilterAction.getPageNumber:
      return { ...state, currentPage: action.payload.pageNumber };

    default:
      return state;
  }
};
