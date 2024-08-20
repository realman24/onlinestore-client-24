import React, { useEffect, useState } from "react";
import { Navbar, Container, Form, Nav, NavDropdown } from "react-bootstrap";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AllCartItemsHook } from "../../hooks/user/UserCartHooks";
import ProductSearchPage from "../../Pages/Products/ProductSearchPage";
import favorite from "../../images/fav-off-white-2.png";
import UserWishListHook from "../../hooks/user/UserWishListHook";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "de3y9ajne",
  },
});

const login = cld.image("store/login_frkqfd");
const cart = cld.image("store/cart_mmueen");
const storeLogo = cld.image("store/white-store-logo_vx1u6x.png");

const NavBar = ({ setHide }) => {
  // const [hide, setHide] = useState("show-sections");
  const [show, setShow] = useState("hide-sections");
  const [word, setWord] = useState("");

  const [cartItems, numOfCartItems] = AllCartItemsHook();
  const [fav, handleFav, favProd, favIcon, setFav, favNumbers] =
    UserWishListHook();

  console.log(favNumbers);
  console.log(favProd);

  const [logName, setLogName] = useState("");
  const dataUser = localStorage.getItem("user");

  useEffect(() => {
    if (dataUser) {
      setLogName(JSON.parse(dataUser)["name"]);
      console.log(logName);
      console.log(dataUser);
    } else {
      setLogName("");
    }
  }, [logName]);

  const logout = () => {
    localStorage.removeItem("user");
    setLogName("");
  };

  const handleChange = (e) => {
    setHide("hide-sections");
    setShow("show-sections");
    setWord(e.target.value);
    console.log(e.target.value);
  };

  const goBack = (e) => {
    setShow("hide-sections");
    setHide("show-sections");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className="mx-3">
            <a href="/">
              <AdvancedImage
                className="dicount-img"
                cldImg={storeLogo}
                width="170"
                height="50"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarscroll" />
          <Navbar.Collapse id="navbarscroll">
            <Form
              className=" serch-form d-flex form-control bg-transparent border-0"
              navbarscroll="true"
            >
              <Form.Control
                type="search"
                onChange={handleChange}
                placeholder="Search..."
                className="text-center"
                aria-label="Search"
              />

              {/* <Button
              variant="outline-light"
              className=" d-flex justify-content-center "
              style={{ marginLeft: "0.5em" }}
            >
              Search
            </Button> */}
            </Form>

            <Nav
              className="d-flex flex-row justify-content-center "
              style={{
                maxHeight: "100px",
                marginRight: "1em",
                marginLeft: "1.5em",
              }}
              navbarScroll
            >
              {logName ? (
                <NavDropdown
                  title={logName}
                  id="nav-dropdown"
                  drop="down"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/user/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logout} href="/">
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link
                  href="/auth"
                  className="nav-text d-flex mt-3 justify-content-center"
                  style={{
                    marginLeft: "0em",
                  }}
                >
                  <AdvancedImage className="login-img" cldImg={login} />

                  {/* <img src={login} className="login-img" alt="sfvs" /> */}

                  <p
                    className="login-txt"
                    style={{
                      color: "white",
                      paddingLeft: "0.4em",
                      fontSize: "1.1em",
                      fontWeight: "normal",
                    }}
                  >
                    login
                  </p>
                </Nav.Link>
              )}

              <Nav.Link
                href={logName ? "/user/favorites" : "#"}
                className="nav-text d-flex mt-3 justify-content-center "
                style={{
                  color: "white",
                  marginLeft: "0.1m",
                  marginRight: "0.1em",
                }}
              >
                <p
                  className="header-optionBasket"
                  style={{
                    color: "white",
                    paddingRight: "0.2em",
                    fontSize: "1.1em",
                    fontWeight: "normal",
                  }}
                >
                  {favNumbers > 0 ? (
                    <span className="counter fav-counter">{favNumbers}</span>
                  ) : null}
                </p>
                <img src={favorite} className="login-img" alt="sfvs" />
                {/* <AdvancedImage className="login-img " cldImg={favoff} /> */}
              </Nav.Link>
              <Nav.Link
                href={logName ? "/cart" : "#"}
                className="nav-text d-flex mt-3 justify-content-center "
                style={{
                  color: "white",
                  marginLeft: "0.2em",
                  // marginRight: "2em",
                }}
              >
                <p
                  className="header-optionBasket"
                  style={{
                    color: "white",
                    paddingRight: "0.2em",
                    fontSize: "1.1em",
                    fontWeight: "normal",
                  }}
                >
                  cart
                  {numOfCartItems > 0 ? (
                    <span className="counter cart-counter">
                      {numOfCartItems}
                    </span>
                  ) : null}
                </p>
                {/* <img src={cart} className="login-img" alt="sfvs" /> */}
                <AdvancedImage className="login-img " cldImg={cart} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={show}>
        <ProductSearchPage word={word} goBack={goBack} />
      </div>
    </>
  );
};

export default NavBar;
