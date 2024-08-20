import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
// import ProductCardContinerHook from "../../hooks/product/ProductCardContinerHook";

const ProductCardContiner = ({ allProducts }) => {
  if (!allProducts) {
    return <h1>Loading...</h1>;
  }
  return (
    <Row className="my-2 d-flex justify-content-start ">
      {allProducts.product
        ? allProducts.product.map((item, index) => {
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
        : null}
    </Row>
  );
};

export default ProductCardContiner;
