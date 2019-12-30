import React from "react";
import { Box } from "../styles/styles";

interface PaginationProps {
  tasksAmount: number;
  showPage: (pageNumber: number) => void;
}

const Pagination = ({ tasksAmount, showPage }: PaginationProps) => {
  const numberOfPages = Math.ceil(tasksAmount / 10);
  const pages: Array<number> = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  return (
    <Box>
      {numberOfPages > 1 &&
        pages.map((page: number, index: number) => (
          <div key={index} onClick={() => showPage(page)}>
            {page}
          </div>
        ))}
    </Box>
  );
};

export default Pagination;
