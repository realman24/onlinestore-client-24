import React from "react";
import { Col, Card } from "react-bootstrap";
// import egg from "../../images/pngegg.png";
import { NavLink } from "react-router-dom";
// import effect from "../../images/round-light-effect.png";
import effect from "../../images/light-effect.png";

const CategoryCard = ({ img, title }) => {
  return (
    <Col
      className="mx-3 my-3 d-flex justify-content-center "
      style={{
        width: "100%",
        height: "auto",
        border: "none",
        marginTop: "1em",
      }}
    >
      <NavLink to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
        <div className="allCard mb-3 categoty-card">
          <div>
            <img alt="zcv" src={img} className="categoty-card-img" />
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              width: "12em",
              minHeight: "2em",
            }}
          >
            <p className="categoty-card-text my-2">{title}</p>
          </div>
          <img
            alt="zcv"
            src={effect}
            className="categoty-card-decor"
            style={{ zIndex: "-1" }}
          />
        </div>{" "}
      </NavLink>
    </Col>
  );
};

export default CategoryCard;
