import React from "react";
import { Card, Col } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const BrandCard = ({ img }) => {
  return (
    <Col
      className="mx-5 my-3 d-flex justify-content-center "
      style={{
        width: "100%",
        height: "auto",
        minHeight: "7em",
        border: "none",
        marginTop: "1em",
        marginBottom: "3em",
      }}
    >
      <NavLink to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
        <div className="allCard d-flex justify-content-center">
          <Card.Img className="brand-card-img" src={img} />
        </div>
      </NavLink>
    </Col>
  );
};

export default BrandCard;
