import React from "react";
import { usePagination, DOTS } from "./hooks/usePagination";
import * as FiIcons from "react-icons/fi";

interface PaginationProps {
  onPageChange: any;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange
    ? paginationRange[paginationRange.length - 1]
    : null;

  return (
    <div className="pagination">
      <ul className={`pagination-container`}>
        <li
          onClick={onPrevious}
          className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        >
          <FiIcons.FiChevronLeft />
        </li>
        {paginationRange &&
          paginationRange.map((pageNumber:any) => {
            if (pageNumber === DOTS) {
              return <li className={`pagination-item dots`}>&#8230;</li>;
            }
            return (
              <li
                className={`pagination-item ${
                  pageNumber === currentPage ? "selected" : ""
                }`}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
        <li
          onClick={onNext}
          className={`pagination-item ${
            currentPage === lastPage ? "disabled" : ""
          }`}
        >
          <FiIcons.FiChevronRight />
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
