import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png";
import deleteiconwhite from "../../images/delete-white.png";
import item2 from "../../images/item.png";

const UserOrderCard = ({ cartItem }) => {
  if (cartItem) console.log(cartItem);

  return (
    <div>
      <Row className="d-flex mb-2">
        <Col xs="3" md="3" className="d-flex justify-content-center">
          <img
            width="130em"
            height="130em"
            src={cartItem ? cartItem.product.avatar : item2}
            alt=""
          />
        </Col>
        <Col xs="6" md="7">
          <div className="d-inline pt-2 cat-title">
            {cartItem ? cartItem.product.name : <p>Loading....</p>}
          </div>
          <div className="d-inline pt-2 cat-rate me-2 mx-2">4.5</div>
          <div className="rate-count d-inline p-1 pt-2">(160 Rate)</div>
          <div className="mt-3">
            <div className="cat-text d-inline">Quantity </div>
            <input
              className="mx-3 "
              class="form"
              type="text"
              disabled
              style={{ width: "2em", height: "25px", textAlign: "center" }}
              value={cartItem ? cartItem.quantity : <p>Loading....</p>}
            />
          </div>
          <div className="mt-3">
            <div className="cat-text d-inline ">price </div>
            <span className="mx-1 ">
              {" "}
              {cartItem ? (
                cartItem.price * cartItem.quantity
              ) : (
                <p>Loading....</p>
              )}{" "}
            </span>

            <span className="cart-item-desc cart-egp">EGP</span>
          </div>
        </Col>
        {/* <Col
          xs="3"
          md="4"
          className="d-flex justify-content-start align-items-center pb-3"
        >
          <Link to="#" style={{ textDecoration: "none" }}>
            <button
              type="button"
              class="btn btn-outline-dark"
              // onClick={deleteAdd}
            >
              <div className="d-flex no-weap align-items-start  lock">
                {" "}
                <img
                  src={deleteicon}
                  alt=""
                  width="20px"
                  height="24px"
                  className="icon-unlock"
                />
                <img
                  src={deleteiconwhite}
                  alt=""
                  width="20px"
                  height="24px"
                  className="icon-lock "
                />
                <span className="" style={{ paddingLeft: "0.75em" }}>
                  Delete
                </span>
              </div>
            </button>
          </Link>
        </Col> */}
      </Row>
    </div>
  );
};

export default UserOrderCard;
