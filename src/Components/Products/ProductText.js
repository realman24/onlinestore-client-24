import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductsDetalisHook from "../../hooks/product/ProductsDetalisHook";
import { AddToCartHook } from "../../hooks/user/UserCartHooks";
import { ToastContainer } from "react-toastify";

const ProductText = () => {
  const { id } = useParams();

  const [item, cat, brand, prod, image] = ProductsDetalisHook(id);

  const [addToCart] = AddToCartHook(id);

  return (
    <div className="prod-text">
      <Row className="mt-2">
        <div className="cat-text ">{cat}</div>
      </Row>
      <Row>
        <Col md="8" className="cat-title">
          <div className=" d-inline">
            {item.name}
            <div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4 cat-title">
          <div className="cat-text d-inline">Brand :</div>
          <div className="barnd-text d-inline mx-1">{brand} </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text ">Specifications :</div>
      </Row>
      <Row className="mt-2 ">
        <Col md="10">
          <div className="product-description d-inline">{item.description}</div>
        </Col>
      </Row>
      <Row className="mt-4 ">
        <Col md="12" className="product-price-cart-container">
          <div className="product-price d-inline px-3 py-3 border">
            {item.price} <span className="cart-item-desc cart-egp">EGP</span>
          </div>
          <div
            className="product-cart-add d-inline px-3 py-3  mx-3"
            onClick={addToCart}
          >
            Add To Cart
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ProductText;
