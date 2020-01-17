import { FilterAction, SortType, Action } from "../../types/types";

export const filterByChange = (filter: SortType): Action => ({
  type: FilterAction.filterByChange,
  payload: {
    filter
  }
});
export const sortByChange = (sort: SortType): Action => ({
  type: FilterAction.sortByChange,
  payload: {
    sort
  }
});

export const getPageNumber = (pageNumber: number): Action => ({
  type: FilterAction.getPageNumber,
  payload: {
    pageNumber
  }
});
