import React from "react";
import styled from "styled-components";
import { Box } from "../themes/styles";
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdLastPage,
  MdFirstPage
} from "react-icons/md";

interface PaginationProps {
  // TODO: maybe use currentPage or different naming
  currentPage: number;
  tasksAmount: number;
  getPageNumber: (pageNumber: number) => void;
}

const Pagination = ({
  tasksAmount,
  getPageNumber,
  currentPage
}: PaginationProps) => {
  const numberOfPages = Math.ceil(tasksAmount / 10);
  const pages: Array<number> = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  // const showNumberTabs = pages.filter((page: number) => {
  //   const numberOfTabs = 5;
  //   const numberOfSideTabs = 2;

  //   // 4-11
  //   if (currentPage > 3 && currentPage < numberOfPages - 3) {
  //     return (
  //       page <= currentPage + numberOfSideTabs &&
  //       page >= currentPage - numberOfSideTabs
  //     );
  //   }
  //   // 12-end
  //   if (currentPage >= numberOfPages - 3) {
  //     return page >= numberOfPages - numberOfTabs;
  //     // start-5
  //   } else {
  //     return page <= numberOfTabs;
  //   }
  // });

  const showNumberTabs = (pages: Array<number>) => {
    const start = currentPage - 3;
    const end = currentPage + 2;
    const maxTabs = 5;
    if (currentPage < 4) {
      return pages.slice(0, maxTabs);
    }
    if (currentPage > numberOfPages - 3) {
      return pages.slice(numberOfPages - maxTabs);
    }
    return pages.slice(start, end);
  };

  return (
    <Box>
      {currentPage >= 5 && (
        <Navigation onClick={() => getPageNumber(1)}>
          <MdFirstPage />
        </Navigation>
      )}
      {currentPage >= 4 && (
        <Navigation onClick={() => getPageNumber(currentPage - 1)}>
          <MdNavigateBefore />
        </Navigation>
      )}
      {numberOfPages > 1 &&
        showNumberTabs(pages).map((page: number, index: number) => (
          <Page
            page={page}
            currentPage={currentPage}
            key={index}
            onClick={() => getPageNumber(page)}
          >
            {page}
          </Page>
        ))}

      {currentPage <= numberOfPages - 3 && (
        <Navigation onClick={() => getPageNumber(currentPage + 1)}>
          <MdNavigateNext />
        </Navigation>
      )}
      {currentPage <= numberOfPages - 4 && (
        <Navigation onClick={() => getPageNumber(numberOfPages)}>
          <MdLastPage />
        </Navigation>
      )}
    </Box>
  );
};

export default Pagination;

interface PageProps {
  currentPage: number;
  page: number;
}

const Navigation = styled(Box)`
  margin: 0 5px;
  padding: 2px;
  font-size: 15px;
  height: 25px;
  width: 25px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.whiteDirty};
  border-radius: 3px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  user-select: none;
  &:hover {
    background: #cccccc;
  }
`;

const Page = styled(Navigation)<PageProps>`
  background: ${({ theme, page, currentPage }) =>
    page === currentPage ? "#cccccc" : theme.colors.whiteDirty};
`;
