import { FilterAction, FilterState } from "../../types/types";

const initialState: FilterState = { filter: "", ascendingSort: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case FilterAction.FilterChange:
      return {
        ...state,
        filter: action.payload.filter
      };
    case FilterAction.SortMethod:
      return { ...state, ascendingSort: !state.ascendingSort };

    default:
      return state;
  }
};
