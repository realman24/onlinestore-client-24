import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetails = () => {
  return (
    <div>
      <Row className=" py-5">
        <Col lg="4" className="prod-galary d-flex">
          <ProductGallery />
        </Col>

        <Col lg="8" className=" d-flex">
          <ProductText />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
