import { FilterAction } from "../../types/types";

export const showCompleted = ({ filter }) => ({
  type: FilterAction.showCompleted,
  payload: {
    filter
  }
});
