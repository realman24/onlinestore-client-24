import React, { useState } from "react";
import deleteicon from "../../images/delete.png";
import deleteiconwhite from "../../images/delete-white.png";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartCheckout from "../../Components/Cart/CartCheckout";
import CartItem from "../../Components/Cart/CartItem";
import NavBar from "../../Components/Uitily/NavBar";
import {
  AllCartItemsHook,
  DelAllCartItemHook,
} from "../../hooks/user/UserCartHooks";

const CartPage = () => {
  const [hide, setHide] = useState("show-sections");

  const [cartItems, numOfCartItems] = AllCartItemsHook();

  const [DelAllCartItem] = DelAllCartItemHook();

  // console.log(numOfCartItems);

  return (
    <>
      <NavBar setHide={setHide} />
      <Container className={hide} style={{ minHeight: "670px" }}>
        <Row className="my-3">
          <Col sm="6">
            <div className="cart-title mt-4">Cart</div>
          </Col>

          <Col sm="6" className="d-flex justify-content-start align-items-end">
            <Link to="#" style={{ textDecoration: "none" }}>
              <button
                type="button"
                class="btn btn-outline-dark"
                onClick={DelAllCartItem}
              >
                <div className="d-flex no-weap align-items-start lock">
                  {" "}
                  <img
                    src={deleteicon}
                    alt=""
                    width="20px"
                    height="24px"
                    className="icon-unlock"
                  />
                  <img
                    src={deleteiconwhite}
                    alt=""
                    width="20px"
                    height="24px"
                    className="icon-lock"
                  />
                  <span className="px-1"> Delete Cart</span>
                </div>
              </button>
            </Link>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around">
          <Col xs="9" md="8">
            {cartItems.cartItems ? (
              cartItems.cartItems.map((item, index) => {
                return <CartItem key={index} item={item} />;
              })
            ) : (
              <h6>Ther Is No Products In The Cart</h6>
            )}
          </Col>

          <Col xs="3" md="3">
            {cartItems ? (
              <CartCheckout totalPrice={cartItems.totalCartPrice} />
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CartPage;
