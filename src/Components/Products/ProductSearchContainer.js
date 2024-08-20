import React, { useState } from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductSearchContainer = ({ searchProducts }) => {
  if (!searchProducts) {
    return <h1>Loading...</h1>;
  }

  return (
    <Row className="my-2 d-flex justify-content-start ">
      {searchProducts.product ? (
        searchProducts.product.length !== 0 ? (
          searchProducts.product.map((item, index) => {
            return (
              <ProductCard
                key={index}
                title={item.name}
                img={item.avatar}
                description={item.description}
                price={item.price}
                id={item._id}
              />
            );
          })
        ) : (
          <div className="notification">No Product Match This Search</div>
        )
      ) : null}
    </Row>
  );
};

export default ProductSearchContainer;
