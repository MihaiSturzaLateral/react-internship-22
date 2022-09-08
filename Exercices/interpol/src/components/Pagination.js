import React from "react";
import { useState } from "react";
const Pagination = ({ paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= 20; i++) {
    pageNumbers.push(i);
  }
  const [active, setActive] = useState();
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item ">
            <a
              onClick={() => {
                paginate(number);
              }}
              className="page-link "
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
