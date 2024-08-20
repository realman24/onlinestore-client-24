import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AddAddressesHook } from "../../hooks/user/UserAddressesHooks";
import { ToastContainer } from "react-toastify";

const UserAddAddress = () => {
  const [
    alias,
    details,
    city,
    phone,
    postal,
    onChangeAlias,
    onChangeDetails,
    onChangeCity,
    onChangePhone,
    onChangePostal,
    onSubmit,
  ] = AddAddressesHook();
  return (
    <div className="admin-profile">
      <Row className="admin-content-text justify-content-between">
        <Col sm="5" className="d-flex justify-content-start">
          Add New Adress
        </Col>
      </Row>
      <Row className="justify-content-start ">
        <Col sm="8">
          <input
            value={alias}
            onChange={onChangeAlias}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Address Name       (Ex: Home , Work )"
          />
          <textarea
            value={details}
            onChange={onChangeDetails}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder=" Address Details"
          />
          <input
            value={city}
            onChange={onChangeCity}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="City"
          />
          <input
            value={phone}
            onChange={onChangePhone}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Phone Number"
          />
          <input
            value={postal}
            onChange={onChangePostal}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Postal Code"
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

export default UserAddAddress;
