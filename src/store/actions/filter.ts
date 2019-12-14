import { FilterAction } from "../../types/types";

export const filterChange = (filter: string) => ({
  type: FilterAction.FilterChange,
  payload: {
    filter
  }
});
export const sortByMethod = () => ({
  type: FilterAction.SortMethod
});
