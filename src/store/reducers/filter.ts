import { FilterAction, FilterState } from "../../types/types";

// TODO: naming - ascendingSort -> isSortedAlphabetically
const initialState: FilterState = {
  filter: "",
  ascendingSort: true,
  pageNumber: 1
};

// TODO: type: Action
export default (state = initialState, action) => {
  switch (action.type) {
    case FilterAction.FilterChange:
      return {
        ...state,
        filter: action.payload.filter
      };
    case FilterAction.SortMethod:
      return { ...state, ascendingSort: !state.ascendingSort };
    case FilterAction.ShowPage:
      return { ...state, pageNumber: action.payload.pageNumber };

    default:
      return state;
  }
};
