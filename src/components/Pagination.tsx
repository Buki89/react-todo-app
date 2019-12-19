import React from "react";

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
    <>
      {pages.map((page: number, index: number) => (
        <div key={index} onClick={() => showPage(page)}>
          {page}
        </div>
      ))}
    </>
  );
};

export default Pagination;
