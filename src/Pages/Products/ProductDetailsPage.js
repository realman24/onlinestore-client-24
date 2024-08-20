import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import ProductDetails from "../../Components/Products/ProductDetails";
// import ProductSimilarContiner from "../../Components/Products/ProductSimilarContiner";
import NavBar from "../../Components/Uitily/NavBar";

const ProductDetailsPage = ({ prod }) => {
  const [hide, setHide] = useState("show-sections");

  return (
    <div style={{ minHeight: "670px" }}>
      {/* <div className=" d-flex flex-column align-content-start"> */}
      <NavBar setHide={setHide} />
      {/* <Container></Container> */}
      {/* <CategoryHeader /> */}
      <Container className={hide}>
        <ProductDetails />
        {/* <RateContainer /> */}
        {/* <ProductSimilarContiner prod={prod} title="منتجات قد تعجبك" /> */}
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
