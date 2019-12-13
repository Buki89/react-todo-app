import { FilterAction } from "../../types/types";

export const filterChange = (filter: string) => ({
  type: FilterAction.FilterChange,
  payload: {
    filter
  }
});
