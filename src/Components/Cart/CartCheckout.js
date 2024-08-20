import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartCheckout = ({ totalPrice }) => {
  return (
    <Row className="my-2 d-flex justify-content-center cart-checkout py-3">
      <Col xs="11" className="d-flex flex-column my-2 ">
        <div className="d-flex ">
          <input
            className="copon-input d-inline text-center "
            placeholder="Discount Code"
          />
          <button className="copon-btn d-inline ">Submit</button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          <span className="cart-item-desc cart-egp">Total Items Price :</span>{" "}
          {totalPrice} <span className="cart-item-desc cart-egp">EGP</span>
        </div>
        {/* <div style={{ marginBottom: "2em" }}> */}
        {totalPrice > 0 ? (
          <Link
            to="/order/payment"
            style={{ textDecoration: "none" }}
            className="product-cart-add  d-inline "
          >
            <button className="product-cart-add w-100 px-2 py-2">
              Checkout
            </button>
          </Link>
        ) : null}

        {/* </div> */}
      </Col>
    </Row>
  );
};

export default CartCheckout;
