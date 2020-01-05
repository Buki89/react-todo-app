import { FilterAction, SortType } from "../../types/types";

export const filterByChange = (filter: SortType) => ({
  type: FilterAction.filterByChange,
  payload: {
    filter
  }
});
export const sortByChange = (sort: SortType) => ({
  type: FilterAction.sortByChange,
  payload: {
    sort
  }
});

export const getPageNumber = (pageNumber: number) => ({
  type: FilterAction.getPageNumber,
  payload: {
    pageNumber
  }
});
