import React, { useState, useEffect } from "react";

import "./Pagination.css";

export const Pagination = (props) => {
  const [pageArray, setPageArray] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const totalPages = Math.ceil(
    (props.searchText.length > 0 ? props.totalSearchItems : props.totalItems) /
      props.itemsPerPage
  );

  const getNumberOfPages = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPageArray(pages);
  };
  useEffect(() => {
    getNumberOfPages();
  }, [
    props.totalItems,
    props.totalSearchItems,
    props.itemsPerPage,
    props.searchText,
  ]);
  return (
    <div className="pages">
      {pageArray.map((item, index) => {
        return (
          <div key={index} className="page-btn">
            <button
              className={item === activePage ? "active" : ""}
              onClick={() => {
                props.onPageChange(item);
                setActivePage(item);
              }}
            >
              {item}
            </button>
          </div>
        );
      })}
      <div>
        {pageArray.length > 0 && (
          <select
            value={props.itemsPerPage}
            onChange={(event) => props.onItemsPerPageChange(event)}
            className="page-dropdown"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        )}
      </div>
    </div>
  );
};
