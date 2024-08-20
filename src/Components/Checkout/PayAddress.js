import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GetAllAddressesHook } from "../../hooks/user/UserAddressesHooks";

const PayAddress = ({ sendAdrsToParent, sendPayToParent }) => {
  const [adresses] = GetAllAddressesHook();

  // if (cartItems._id) localStorage.setItem("cartId", cartItems._id);

  const chooseAddress = (e) => {
    console.log(e.target.value);
    sendAdrsToParent(e.target.value);
  };

  const choosePay = (e) => {
    console.log(e.target.value);
    sendPayToParent(e.target.value);
  };

  return (
    <>
      <div className=" user-address-card mt-2 mb-5" style={{ padding: "2em" }}>
        <div>
          <Row className="d-flex justify-content-between pt-3 px-2 ">
            <Col xs="3">
              <div style={{ fontWeight: "600" }}>1- Shipping Address :</div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-between px-5">
            <Col xs="3"></Col>
            <Col xs="9" className="d-flex align-items-start ">
              <div className="p-1 align-self-center ">
                {adresses.length > 0 ? (
                  adresses.map((adrs, index) => {
                    return (
                      <div class="form-check" key={index}>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value={adrs._id}
                          onClick={chooseAddress}
                        />
                        <label
                          class="form-check-label"
                          for="flexRadioDefault1"
                          style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "0.8em",
                          }}
                        >
                          {adrs.alias}
                        </label>
                        <p
                          style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "0.8em",
                          }}
                        >
                          {adrs.details} {adrs.city}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <div sm="6" className="d-flex justify-content-end">
                    <Link
                      to="/user/add-address"
                      style={{ textDecoration: "none" }}
                    >
                      <button type="button" class="btn btn-outline-dark">
                        Please add Address to Proceed
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row className="d-flex justify-content-between pt-3 px-2 ">
            <Col xs="3">
              <div style={{ fontWeight: "600" }}>2- Payment Method :</div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-between px-5">
            <Col xs="3"></Col>
            <Col xs="9" className="d-flex align-items-start ">
              <div className="p-1 align-self-center ">
                <div class="form-check my-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadio2"
                    id="flexRadio2"
                    value="Cash"
                    onClick={choosePay}
                  />
                  <label
                    class="form-check-label"
                    for="flexRadio2"
                    style={{
                      color: "#555550",
                      fontFamily: "Almarai",
                      fontSize: "0.8em",
                    }}
                  >
                    Cash In Delivery
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadio2"
                    id="flexRadio2"
                    value="Card"
                    onClick={choosePay}
                    disabled
                  />
                  <label
                    class="form-check-label"
                    for="flexRadio2"
                    style={{
                      color: "#555550",
                      fontFamily: "Almarai",
                      fontSize: "0.8em",
                    }}
                  >
                    Credit / Debit Card
                  </label>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default PayAddress;
