import { FilterAction, FilterState } from "../../types/types";

const initialState: FilterState = { filter: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case FilterAction.FilterChange:
      return {
        filter: action.payload.filter
      };

    default:
      return state;
  }
};
