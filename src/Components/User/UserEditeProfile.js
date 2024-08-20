import React from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { UpdateUserHook } from "../../hooks/user/UserEditDelProfileHook";

const UserEditeProfile = () => {
  const dataUser = localStorage.getItem("user");

  let userID;

  if (dataUser) {
    userID = JSON.parse(dataUser)["id"];
  }

  console.log(userID);

  const [name, onChangeName, onSubmit] = UpdateUserHook(userID);

  return (
    <div className="admin-profile">
      <Row className="admin-content-text justify-content-between">
        <Col sm="5" className="d-flex justify-content-start">
          Edite Your Profile
        </Col>
      </Row>
      <Row className="justify-content-start ">
        <Col sm="8">
          <input
            value={name}
            onChange={onChangeName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="New Name"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={onSubmit} className="btn btn-dark mt-2 px-4">
            Submit
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default UserEditeProfile;
