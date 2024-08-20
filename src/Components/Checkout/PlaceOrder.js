import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ShippingAdrsHook } from "../../hooks/order/CheckoutHook";
import { useParams } from "react-router-dom";
import { AllCartItemsHook } from "../../hooks/user/UserCartHooks";

const PlaceOrder = ({ getShippAdrs }) => {
  const { id } = useParams();
  const { pay } = useParams();

  const [createDate, setCraeteDate] = useState();

  // get shipping address
  const [shippingAdrs] = ShippingAdrsHook(id);
  let shAdrs;
  if (shippingAdrs !== undefined) {
    shAdrs = shippingAdrs;
  }
  useEffect(() => {
    getShippAdrs(shippingAdrs);
  }, [shAdrs]);

  const paymentMeth = pay;

  let payMeth = "Cash On Deliver";
  if (paymentMeth === "Card") {
    payMeth = "Credit / Debit Card";
  }

  const [cartItems, numOfCartItems] = AllCartItemsHook();
  console.log(cartItems);

  //////////////// get arriving Date ////////////////
  // Function to Add days to current date
  const addDays = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    const newShortDate = newDate.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return newShortDate;
  };

  // Get the current date
  const todayDate = new Date();

  // Number of days that we want to
  // add in current date
  const days = 2;

  // Function call to add days
  const arrivingDate = addDays(todayDate, days);
  console.log(arrivingDate);
  //////////////////////////////////////////////

  // useEffect(() => {
  //   const getDate = async () => {
  //     await setCraeteDate(oneOrder.createdAt);
  //   };
  //   getDate();
  // }, [oneOrder]);

  // let date = new Date(createDate);
  // const formattedDate = date.toLocaleDateString("en-us", {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  // });

  // console.log(formattedDate);

  return (
    <>
      <div className=" user-address-card mt-2 mb-5" style={{ padding: "2em" }}>
        <div>
          <Row className="d-flex justify-content-between pt-3 px-2 ">
            <Col xs="6">
              <div style={{ fontWeight: "600" }}>1- Shipping Address :</div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-between px-5">
            <Col xs="2"></Col>
            <Col xs="10" className="d-flex align-items-start ">
              <div className="p-1 align-self-center ">
                <div class="">
                  <div
                    style={{
                      color: "#555550",
                      fontFamily: "Almarai",
                      fontSize: "0.9em",
                      fontWeight: "600",
                    }}
                  >
                    {shippingAdrs.alias}
                  </div>
                  <div style={{ fontSize: "0.9em", marginBottom: "5px" }}>
                    <div>
                      {shippingAdrs.details} ,{shippingAdrs.city}
                    </div>
                    <div>{shippingAdrs.phone}</div>
                    <div>{shippingAdrs.postalCode}</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row className="d-flex justify-content-between pt-3 px-2 my-3 border-top">
            <Col xs="6">
              <div style={{ fontWeight: "600" }}>2- Payment Method :</div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-between px-5">
            <Col xs="2"></Col>
            <Col xs="10" className="d-flex align-items-start ">
              <div className="p-1 align-self-center ">
                <div class="">
                  <div
                    style={{
                      color: "#555550",
                      fontFamily: "Almarai",
                      fontSize: "0.9em",
                      fontWeight: "600",
                    }}
                  >
                    {payMeth}{" "}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row className="d-flex justify-items-between pt-3 px-2 my-3 border-top">
            <Col xs="6">
              <div style={{ fontWeight: "600" }}>
                3- Review Items And Shipping :
                {/* <button onClick={handleClick}>ShippingAdrs</button> */}
              </div>
            </Col>
            <Col
              xs="6"
              // className=" d-flex justify-self-center"
              style={{
                // paddingTop: "1em",
                color: "#267531",
                fontSize: "0.8em",
                fontWeight: "600",
                textAlign: "end",
              }}
            >
              Arriving
              <span
                style={{
                  paddingLeft: "0.5em",
                }}
              >
                {arrivingDate}
              </span>
            </Col>
          </Row>

          <Row className="d-flex justify-content-between px-5">
            {cartItems.cartItems ? (
              cartItems.cartItems.map((item, index) => {
                return (
                  <div key={index} className="row py-3">
                    <Col xs="2"></Col>
                    <Col xs="3">
                      <img
                        // onClick={handleFav}
                        src={item.avatar}
                        alt=""
                        // className="text-center"
                        style={{
                          height: "7em",
                          width: "9em",
                        }}
                      />
                    </Col>
                    <Col xs="7" className="d-flex align-items-center">
                      <div
                        style={{
                          fontSize: "0.9em",
                          marginBottom: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        <div
                          style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "0.9em",
                            fontWeight: "600",
                            alignItems: "center",
                          }}
                        >
                          <div>{item.name}</div>
                        </div>
                        <div style={{ color: "#555550" }}>
                          Qty : {item.quantity}
                        </div>
                        <div style={{ color: "#ca2929" }}>
                          Price :{item.price * item.quantity}{" "}
                          <span className="egp" style={{ color: "#ca2929" }}>
                            EGP
                          </span>
                        </div>
                      </div>
                    </Col>
                    {/* <Col xs="2">{arrivingDate}</Col> */}
                  </div>
                );
              })
            ) : (
              <Col xs="12">No Items</Col>
            )}
          </Row>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default PlaceOrder;
