import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import BrandContainerHook from "../../hooks/Brand/BrandContainerHook";
import BrandCard from "./BrandCard";

const BrandContainer = ({ brands, cPage }) => {
  return (
    <Container>
      <div
        className="home-container "
        style={{ alignItems: "center", flexWrap: "wrap", overflow: "auto" }}
      >
        <Row className="my-3 d-flex justify-content-between">
          {brands.brand
            ? brands.brand.map((item, index) => {
                return (
                  <BrandCard key={index} title={item.name} img={item.avatar} />
                );
              })
            : null}
        </Row>
      </div>
      {/* <div className="my-3 d-flex justify-content-center">page {cPage}</div> */}
    </Container>
  );
};

export default BrandContainer;
