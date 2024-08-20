import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import CategoryContainerHook from "../../hooks/category/CategoryContainerHook";

const CategoryContainer = ({ categories }) => {
  // const CategoryContainer = () => {
  //   const [allCategory] = CategoryContainerHook();
  //   let categories = allCategory || [];
  if (!categories) {
    return <h1>Loading...</h1>;
  }

  console.log(categories);
  return (
    <Container>
      <div
        className="home-container "
        style={{ alignItems: "center", flexWrap: "wrap", overflow: "auto" }}
      >
        <Row className="my-3 d-flex justify-content-between">
          {categories.category
            ? categories.category.map((item, index) => {
                return (
                  <CategoryCard
                    key={index}
                    title={item.name}
                    img={item.avatar}
                  />
                );
              })
            : null}
        </Row>
      </div>
    </Container>
  );
};

export default CategoryContainer;
