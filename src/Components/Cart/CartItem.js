import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png";
import deleteiconwhite from "../../images/delete-white.png";

import {
  DelCartItemHook,
  UpdateCartItemHook,
} from "../../hooks/user/UserCartHooks";
import { ToastContainer } from "react-toastify";

const CartItem = ({ item }) => {
  const [DelCartItem] = DelCartItemHook(item._id);

  const [setItemCount, itemCount, onChangeCount, handeleUpdateCart] =
    UpdateCartItemHook(item._id);
  // console.log(item);
  // console.log(item._id);
  // console.log(itemCount);

  useEffect(() => {
    setItemCount(item.quantity);
  }, []);

  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-3 align-items-center">
      <img width="200px" height="197px" src={item.avatar} alt="" />
      <div className="w-100 align-items-start">
        <Row className="justify-content-between ">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">
              {item.product.category_id.name}
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cart-item-name ">{item.name}</div>
            <div className="d-inline pt-2 cat-rate me-2 align-self-center">
              4.5
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start ">
            <div className="d-inline pt-1 cart-item-desc">
              {item.description}
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col sm="6" className="">
            <div className="cat-text d-inline">Brand :</div>
            <div className="cart-item-brand d-inline mx-1">
              {item.product.brand_id.name}{" "}
            </div>
          </Col>
          <Col sm="6" className=" d-flex flex-row justify-content-end mb-1">
            <div className="d-inline cart-price">
              {item.price}
              <span className="cart-item-desc cart-egp">EGP</span>
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col sm="12" className="mt-1 d-flex">
            <div
              className="color ms-2 border"
              style={{ backgroundColor: "#E52C2C" }}
            ></div>
          </Col>
        </Row> */}

        {/* <Row className="justify-content-between"></Row> */}

        <Row className="d-flex flex-row justify-content-between pt-3">
          <Col
            sm="3"
            className="d-flex justify-content-start align-items-end pb-3"
          >
            <Link to="#" style={{ textDecoration: "none" }}>
              <button
                type="button"
                class="btn btn-outline-dark"
                onClick={DelCartItem}
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
          </Col>
          <Col sm="9" className=" d-flex flex-row justify-content-end">
            <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
              <div className="cat-text  d-inline">Quantity</div>
              <select
                name="Qty"
                id="qty"
                className="mx-2 border"
                type="number"
                style={{ width: "40px", height: "25px" }}
                value={itemCount}
                onChange={onChangeCount}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </Col>
  );
};

export default CartItem;
