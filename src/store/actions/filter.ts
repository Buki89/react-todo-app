import { FilterAction } from "../../types/types";

export const filterChange = (filter: string) => ({
  type: FilterAction.filterChange,
  payload: {
    filter
  }
});
export const sortByMethod = () => ({
  type: FilterAction.sortMethod
});

export const showPage = (pageNumber: number) => ({
  type: FilterAction.showPage,
  payload: {
    pageNumber
  }
});
