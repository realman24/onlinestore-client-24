import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { createOrder } from "../../redux/actions/orderActions";

import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShippingAdrsHook } from "../../hooks/order/CheckoutHook";
// import { AllCartItemsHook } from "../../hooks/user/UserCartHooks";
// import { CraeteCashOrderHook } from "../../hooks/order/OrderHooks";
import { ToastContainer } from "react-toastify";
import notify from "../../hooks/useNotify";
import { useNavigate } from "react-router-dom";

const OrederSummary = ({
  resevedAdrs,
  resevedPay,
  shippAdrs,
  cartId,
  totalItemsPrice,
  OrderTotals,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);
  console.log(cartId);

  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [orderData, setOrderData] = useState("");

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [shippingAdrs] = ShippingAdrsHook(id);
  console.log(shippingAdrs);

  // Add New
  const onSubmit = async () => {
    setLoading(true);
    await dispatch(
      createOrder(cartId, {
        shippingAddress: {
          details: shippingAdrs.details,
          phone: shippingAdrs.phone,
          city: shippingAdrs.city,
          postalCode: shippingAdrs.postalCode,
        },
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.orderReducer.newOrder);
  console.log(res);

  useEffect(() => {
    if (loading === false) {
      // if (res && res.status === 200) {
      if (res) {
        setOrderData(res.data);
        notify("Order Placed Successfuly", "success");
        setTimeout(() => {
          navigate("/user/orders");
        }, 1000);
      } else {
        notify("There are a problem, please try again", "error");
      }
    }
  }, [loading]);

  return (
    <Row className="my-2 d-flex justify-content-center cart-checkout py-3">
      <Col xs="12" className="d-flex flex-column ">
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
        <div className="checkout-item  row " style={{ paddingTop: 0 }}>
          <div className="col-6">
            <span>Shipping :</span>
          </div>
          <div className="col-6" style={{ textAlign: "end" }}>
            {" "}
            <span className="checkout-price ">60</span>
            <span className="egp">EGP</span>
          </div>
        </div>

        <div className="checkout-total row border-top">
          <div className="col-6 px-2">
            <span style={{ color: "#ca2929" }}>Order Total :</span>
          </div>
          <div className="col-6" style={{ textAlign: "end" }}>
            {" "}
            <span
              className="checkout-price "
              style={{
                color: "#ca2929",
                textAlign: "end",
                paddingLeft: "0.8em",
              }}
            >
              {OrderTotals}
            </span>
            <span
              className="cart-item-desc cart-egp"
              style={{ color: "#ca2929" }}
            >
              EGP
            </span>
          </div>
        </div>
        {/* <div style={{ marginBottom: "2em" }}> */}
        {/* <Link
          // to={`/order/place-order/${resevedPay}/${resevedAdrs}`}
          to="#"
          style={{ textDecoration: "none" }}
          className="checkout-btn  d-inline "
        > */}
        <button
          className="btn btn-dark w-100 px-2 py-2"
          style={{ paddingBottom: "0.8em", paddingTop: "0.8em" }}
          onClick={onSubmit}
        >
          Place Your Order
        </button>
        {/* </Link> */}
        {/* </div> */}
      </Col>
    </Row>
  );
};

export default OrederSummary;
