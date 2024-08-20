import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationReact = ({ currentPage, onPress, totalPages }) => {
  const pageNumbers = [];

  for (let i = 1; i < totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPress(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPress(currentPage + 1);
    }
  };

  return (
    <Pagination>
      <Pagination.First style={{ font: "3em" }} onClick={() => onPress(1)} />

      <Pagination.Item onClick={handlePrevPage}>Prev</Pagination.Item>

      {pageNumbers
        ? pageNumbers.map((page, i) => (
            <Pagination.Item kay={i} onClick={() => onPress(page)}>
              {page}
            </Pagination.Item>
          ))
        : null}

      <Pagination.Item>-----</Pagination.Item>

      <Pagination.Item onClick={() => onPress(totalPages)}>
        {totalPages}
      </Pagination.Item>
      <Pagination.Item onClick={handleNextPage}>Next</Pagination.Item>

      <Pagination.Last onClick={() => onPress(totalPages)} />
    </Pagination>
  );
};

export default PaginationReact;
