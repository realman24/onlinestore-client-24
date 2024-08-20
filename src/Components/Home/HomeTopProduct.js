import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import SubTitle from "../Uitily/SubTitle";
import ProductCardContinerHook from "../../hooks/product/ProductCardContinerHook";

const HomeTopProduct = ({ title, btnTxt, pathTxt }) => {
  const [allProducts, setCurrentPage] = ProductCardContinerHook();
  if (!allProducts) {
    return <h1>Loading...</h1>;
  }
  return (
    <Container>
      <div className="home-container">
        <SubTitle
          title={"Top selling products"}
          btnTxt={"See more Products"}
          pathTxt={"/product"}
        />
        <Row className="my-3 d-flex justify-content-start">
          {allProducts.product
            ? allProducts.product.slice(0, 4).map((item, index) => {
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
      </div>
    </Container>
  );
};

export default HomeTopProduct;
