import React, { useState } from "react";
import "./Pagination.css";
const Pagination = ({
  currentPage,
  setCurrentPage,
  productsPerPage,
  totalProducts,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  //Limit the page number shown

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  //paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //go to the next page
  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
    //show next set of pageNumbers 
    // if (currentPage + 1 > maxPageNumberLimit) {
    //   setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
    //   setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    // }
  };
  //go to previous page
  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
  };
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className="pagination-container">
        <li
          className={currentPage === pageNumbers[0] ? "pages-hidden" : "pages"}
          onClick={() => paginatePrev()}
        >
          Prev
        </li>
        {pageNumbers.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                className={currentPage === number ? "pages-active" : "pages"}
                key={number}
                onClick={() => paginate(number)}
              >
                {number}
              </li>
            );
          }
        })}
        <li
          className={currentPage === pageNumbers[pageNumbers.length - 1] ? "pages-hidden" : "pages"}
          onClick={() => paginateNext()}
        >
          Next
        </li>
        <p className="current-pages">
          <b>{currentPage}</b>
          <span>of</span>
          <b>{totalPages}</b>
        </p>
      </ul>
    </>
  );
};

export default Pagination;
