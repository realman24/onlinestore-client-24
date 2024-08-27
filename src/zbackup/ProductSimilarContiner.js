import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "../Components/Products/ProductCard";
import { useParams } from "react-router-dom";

import ProductCardContinerHook from "../hooks/product/ProductCardContinerHook";
import ProductsDetalisHook from "../hooks/product/ProductsDetalisHook";

import SubTitle from "../Components/Uitily/SubTitle";

const ProductSimilarContiner = () => {
  const [item, cat, brand, prod] = ProductsDetalisHook();

  return (
    <Row className="my-2 d-flex justify-content-start ">
      <SubTitle title={"Similar Products"} />

      {/* {prod
        ? prod.map((item, index) => {
            return (
              <ProductCard
                key={index}
                title={item.name}
                img={item.avatar}
                description={item.description}
                price={item.price}
              />
            );
          })
        : null} */}
    </Row>
  );
};

export default ProductSimilarContiner;
