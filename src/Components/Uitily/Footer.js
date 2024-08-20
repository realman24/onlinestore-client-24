import { TextAlignment } from "@cloudinary/url-gen/qualifiers";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div
        className="  footer-background footer d-flex align-items-center"
        style={{ maxHeight: "300px", height: "100px" }}
      >
        <Container>
          <div className="d-flex flex-column justify-content-center align-items-center flex-wrap">
            <div className="footer-shroot d-flex flex-wrap justify-content-center px=1">
              <span style={{ paddingRight: "0.7em" }}>Conditions of Use</span>
              <span> Privacy Notice</span>
              <span style={{ paddingLeft: "0.7em" }}> Contact Us</span>
            </div>

            <div className="footer-shroot d-flex flex-wrap justify-content px-1">
              ©Wael 2024 , All Right Reserved
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
