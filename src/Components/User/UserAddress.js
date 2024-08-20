import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetAllAddressesHook } from "../../hooks/user/UserAddressesHooks";

import UserAddressCard from "./UserAddressCard";

const UserAddress = () => {
  const [adresses] = GetAllAddressesHook();

  console.log(adresses);
  return (
    <div className="admin-profile">
      <Row className="admin-content-text justify-content-between">
        <Col sm="5" className="d-flex justify-content-start">
          Adresses List
        </Col>

        <Col sm="6" className="d-flex justify-content-end">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button type="button" class="btn btn-outline-dark">
              Add Adress
            </button>
          </Link>
        </Col>
      </Row>
      {/* <div className="admin-content-text">Adresses List</div> */}
      {adresses.length > 0 ? (
        adresses.map((adress, index) => {
          return (
            <UserAddressCard
              addId={adress._id}
              alias={adress.alias}
              city={adress.city}
              details={adress.details}
              phone={adress.phone}
              postalCode={adress.postalCode}
            />
          );
        })
      ) : (
        <p>There Are No Address Exist</p>
      )}

      {/* <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">Add Adress </button>
          </Link>
        </Col>
      </Row> */}
    </div>
  );
};

export default UserAddress;
