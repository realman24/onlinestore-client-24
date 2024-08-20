import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserProfile from "../../Components/User/UserProfile";
import UserSideBar from "../../Components/User/UserSideBar";
import NavBar from "../../Components/Uitily/NavBar";
import { ToastContainer } from "react-toastify";

const UserProfilePage = () => {
  const [hide, setHide] = useState("show-sections");

  return (
    <>
      <NavBar setHide={setHide} />
      <Container className={hide}>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <UserSideBar />
          </Col>

          <Col sm="9" xs="10" md="19">
            <UserProfile />
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
};

export default UserProfilePage;
