import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CheckoutBar from "../../Components/Checkout/CheckoutBar";
import NavBar from "../../Components/Uitily/NavBar";
import PlaceOrder from "../../Components/Checkout/PlaceOrder";
import OrederSummary from "../../Components/Checkout/OrederSummary";
import { AllCartItemsHook } from "../../hooks/user/UserCartHooks";

const PlaceOrderPage = () => {
  const [hide, setHide] = useState("show-sections");
  const [shippAdrs, setShipAdrs] = useState("");

  const [cartItems, numOfCartItems] = AllCartItemsHook();
  let cartId;
  let totalItemsPrice = "";
  let OrderTotals = "";
  if (cartItems) {
    totalItemsPrice = cartItems.totalCartPrice;
    OrderTotals = totalItemsPrice + 60;
    cartId = cartItems._id;
    console.log(cartId);
  }

  const getShippAdrs = (adrs) => {
    setShipAdrs(adrs);
  };

  console.log(shippAdrs);

  return (
    <>
      <NavBar setHide={setHide} />
      <Container className={hide} style={{ minHeight: "670px" }}>
        <Row className="my-3">
          <Col sm="6">
            <div className="cart-title mt-4">Checkout</div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around">
          <Col xs="9" md="8">
            <PlaceOrder getShippAdrs={getShippAdrs} />
          </Col>
          <Col xs="3" md="3">
            <OrederSummary
              shippAdrs={shippAdrs}
              cartId={cartId}
              OrderTotals={OrderTotals}
              totalItemsPrice={totalItemsPrice}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlaceOrderPage;
