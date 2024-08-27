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
      <NavBar setHide={setHide} />
      <Container className={hide}>
        <ProductDetails />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
