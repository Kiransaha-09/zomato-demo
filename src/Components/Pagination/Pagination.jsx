import React, { useState, useEffect } from "react";

export const Pagination = (props) => {
  const [pageArray, setPageArray] = useState([]);
  
  const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);

  const getNumberOfPages = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPageArray(pages);
  };
  useEffect(() => {
    getNumberOfPages();
  }, [props.totalItems,]);

  return (
    <div className="pages">
      {pageArray.map((item, index) => {
        return (
          <div key={index}>
            <button onClick={() => props.onPageChange(item)}>{item}</button>
          </div>
        );
      })}
      <div>
        {pageArray.length > 0 && (
          <select
            value={props.itemsPerPage}
            onChange={(event) => props.onItemsPerPageChange(event)}
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
