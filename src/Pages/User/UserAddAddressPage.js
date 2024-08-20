import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserSideBar from "../../Components/User/UserSideBar";
import UserAddAddress from "../../Components/User/UserAddAddress";
import NavBar from "../../Components/Uitily/NavBar";

const UserAddAddressPage = () => {
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
            <UserAddAddress />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default UserAddAddressPage;
