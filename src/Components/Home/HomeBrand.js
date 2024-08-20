import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Uitily/SubTitle";
import BrandCard from "../Brands/BrandCard";
import baseUrl from "../../Api/baseURL";
import BrandContainer from "../Brands/BrandContainer";
import BrandContainerHook from "../../hooks/Brand/BrandContainerHook";

const HomeBrand = ({ pathTxt }) => {
  const [allBrand, setCurrentPage] = BrandContainerHook();
  if (!allBrand) {
    return <h1>Loading...</h1>;
  }

  let brands = allBrand;

  return (
    <Container>
      <div className="home-container" style={{ alignItems: "center" }}>
        <SubTitle
          title={"Top Brands"}
          btnTxt={"See all Brands"}
          pathTxt={"/brand"}
        />
        <BrandContainer brands={brands} />
      </div>
    </Container>
  );
};

export default HomeBrand;
