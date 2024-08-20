import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import UserOrder from "../../Components/User/UserOrder";
import UserSideBar from "../../Components/User/UserSideBar";
import NavBar from "../../Components/Uitily/NavBar";

const UserOrdersPage = () => {
  const [hide, setHide] = useState("show-sections");

  return (
    <>
      <NavBar setHide={setHide} />
      <Container className={hide}>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <UserSideBar />
          </Col>

          <Col sm="9" xs="10" md="10">
            <UserOrder />;
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserOrdersPage;
