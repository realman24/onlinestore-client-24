import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AllCartItemsHook } from "../../hooks/user/UserCartHooks";

const CheckoutBar = ({ resevedAdrs, resevedPay }) => {
  const [cartItems, numOf] = AllCartItemsHook();

  let totalItemsPrice = "";
  let OrderTotals = "";
  if (cartItems) {
    totalItemsPrice = cartItems.totalCartPrice;
    OrderTotals = totalItemsPrice + 60;
  }

  console.log(resevedAdrs);
  console.log(resevedPay);

  return (
    <Row className="my-2 d-flex justify-content-center cart-checkout py-3">
      <Col xs="11" className="d-flex flex-column justify-content-center">
        <div className="checkout-subtitle ">Order Summary </div>
        <div className="checkout-item  row ">
          <div className="col-6">
            <span>Items :</span>
          </div>
          <div className="col-6" style={{ textAlign: "end" }}>
            {" "}
            <span className="checkout-price ">{totalItemsPrice}</span>
            <span className="cart-item-desc cart-egp">EGP</span>
          </div>
        </div>
        <div className="checkout-item row  " style={{ paddingTop: 0 }}>
          <div className="col-6">
            <span>Shipping :</span>
          </div>
          <div className="col-6" style={{ textAlign: "end" }}>
            {" "}
            <span className="checkout-price ">60</span>
            <span className="cart-item-desc cart-egp">EGP</span>
          </div>
        </div>

        <div className="checkout-total row border-top">
          <div className="col-6 px-0">
            <span style={{ color: "#ca2929" }}>Order Total :</span>
          </div>
          <div className="col-6" style={{ textAlign: "end" }}>
            {" "}
            <span
              className="checkout-price "
              style={{ color: "#ca2929", textAlign: "end" }}
            >
              {OrderTotals}
            </span>
            <span
              className="cart-item-desc cart-egp"
              style={{ color: "#ca2929", textAlign: "end" }}
            >
              EGP
            </span>
          </div>
        </div>
        {/* <div style={{ marginBottom: "1em", marginTop: "0.3em" }}> */}

        {resevedAdrs ? (
          resevedPay ? (
            <Link
              to={`/order/place-order/${resevedPay}/${resevedAdrs}`}
              style={{ textDecoration: "none" }}
              className="checkout-btn  d-inline "
            >
              <button
                className="btn btn-dark w-100 px-2 py-2 "
                style={{ paddingBottom: "0.8em", paddingTop: "0.8em" }}
              >
                Proceed To Place Order
              </button>
            </Link>
          ) : null
        ) : null}
        {/* </div> */}
      </Col>
    </Row>
  );
};

export default CheckoutBar;
