import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CheckoutBar from "../../Components/Checkout/CheckoutBar";
import PayAddress from "../../Components/Checkout/PayAddress";
import NavBar from "../../Components/Uitily/NavBar";

const PayAddressPage = () => {
  const [hide, setHide] = useState("show-sections");
  const [resevedAdrs, setResevedAdrs] = useState("");
  const [resevedPay, setResevedPay] = useState("");

  const handleAdrsFromChild = (data) => {
    setResevedAdrs(data);
  };

  const handlePayFromChild = (pay) => {
    setResevedPay(pay);
  };

  console.log(resevedAdrs);
  console.log(resevedPay);

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
            <PayAddress
              sendAdrsToParent={handleAdrsFromChild}
              sendPayToParent={handlePayFromChild}
            />
          </Col>
          <Col xs="3" md="3">
            <CheckoutBar resevedAdrs={resevedAdrs} resevedPay={resevedPay} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PayAddressPage;
