import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import item from "../../images/item.png";
import deleteicon from "../../images/delete.png";

import UserOrderCard from "./UserOrderCard";

// import { AllUserOrders } from "../../hooks/order/OrderHooks";

const UserOrderItem = ({ order }) => {
  // const [allOrders] = AllUserOrders();
  console.log(order);
  console.log(order.cartItems);
  console.log(order.isPaid);

  return (
    <div className="user-order mt-3">
      <Row>
        <Col>
          {" "}
          <div className="py-3 order-title">
            Order No: <span className=" stat-small">{order._id}</span>
          </div>
        </Col>
        <Col
          xs="3"
          className="d-flex flex-row justify-content-end align-items-center"
        >
          {/* <div className="d-flex flex-row mx-2 mt-3 justify-content-center">
            <Link to="/user/edit-profile" style={{ textDecoration: "none" }}>
              <button type="button" class="btn btn-outline-dark">
                Delete Order
              </button>
            </Link>
          </div> */}
        </Col>
      </Row>
      <Row className="my-3 px-3">
        {" "}
        {order.cartItems
          ? order.cartItems.map((cartItem, index) => {
              return <UserOrderCard key={index} cartItem={cartItem} />;
            })
          : null}
      </Row>

      <Row className="d-flex justify-content-between align-items-center mb-2">
        <Col xs="8" className="">
          <div>
            <div className="d-inline my-3 order-title">Order state</div>

            {order.isPaid === true ? (
              <div className="d-inline mx-2 stat">Order Paied</div>
            ) : (
              <div className="d-inline mx-2 stat"> Paid Inprogress</div>
            )}
            {order.isDelivered === true ? (
              <div className="d-inline mx-2 stat">Order Deleverd</div>
            ) : (
              <div className="d-inline mx-2 stat">Delivery Inprogress</div>
            )}
            {/* {order.isPaid === false ? (
              order.isDelivered === false ? (
                <div className="d-inline mx-2 stat">Order Inprogress</div>
              ) : null
            ) : null} */}
          </div>
        </Col>
        <Col xs="4" className="d-flex justify-content-end ">
          <div className="d-inline my-3 stat ">
            Total order Price
            <span className="barnd-text px-2">
              {order.totalOrderPrice}
              <span className="cart-item-desc cart-egp px-2">EGP</span>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserOrderItem;
