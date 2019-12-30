import { FilterAction, Filter, SortType } from "../../types/types";

export const filterChange = (filter: Filter) => ({
  type: FilterAction.filterChange,
  payload: {
    filter
  }
});
export const sortByMethod = (value: SortType) => ({
  type: FilterAction.sortMethod,
  payload: {
    value
  }
});

export const showPage = (pageNumber: number) => ({
  type: FilterAction.showPage,
  payload: {
    pageNumber
  }
});
