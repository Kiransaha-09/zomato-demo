import React from "react";

export const Pagination = (props) => {
  return (
    <div className="pages">
      {props.pageArray.map((item, index) => {
        return (
          <div key={index}>
            <button onClick={() => props.handleClick(item)}>{item}</button>
          </div>
        );
      })}
      <div>
        <select value={props.value} onChange={(event) => props.handleChange(event)}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
};
