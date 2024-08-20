import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";

import rate from "../../images/rate.png";
import { Link } from "react-router-dom";

import UserWishListHook from "../../hooks/user/UserWishListHook";

const ProductCard = ({ title, img, description, price, id }) => {
  const [fav, handleFav, favProd, favIcon, setFav, favNumbers] =
    UserWishListHook(id);
  console.log(id);

  let favImg;
  if (favProd.some((fitem) => fitem._id === id)) {
    favImg = favIcon;
  }

  useEffect(() => {
    if (favProd.some((fitem) => fitem._id === id)) {
      setFav(favIcon);
    }
    // window.scrollTo(0, 0);
  }, [favImg]);

  return (
    <>
      <Col xs="2" sm="2" className="d-md-none d-lg-none"></Col>
      <Col xs="8" sm="8" md="4" lg="3" className=" d-flex ">
        <Card
          className="my-2 "
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#f6f6f6",
            boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
          }}
        >
          <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
            <Card.Img style={{ height: "228px", width: "100%" }} src={img} />
          </Link>
          <div className="fav-icon d-flex justify-content-start mx-3 ">
            <img
              onClick={handleFav}
              src={fav}
              // src={favImg}
              alt=""
              className="text-center"
              style={{
                height: "24px",
                width: "26px",
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>
              <div className="card-title">{title}</div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between ">
                <div className="d-flex">
                  <div className="card-price">
                    {price} <span className="cart-item-desc cart-egp">EGP</span>
                  </div>
                </div>
                <div className="d-flex">
                  <img
                    className=""
                    src={rate}
                    alt=""
                    height="16px"
                    width="16px"
                  />
                  <div className="card-rate mx-2">4.5</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs="2" sm="2" className="d-md-none d-lg-none"></Col>
    </>
  );
};

export default ProductCard;
