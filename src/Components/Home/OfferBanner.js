import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import item from "../../images/item.png";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "de3y9ajne",
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'cld-sample-5'.
const offerPic = cld.image("store/offer-pic_qpzo9n");
// import offerPic from "../../images/offer-pic_qpzo9n";

const OfferBanner = () => {
  return (
    <Container>
      <div className="home-container-offers d-flex align-items-center ">
        <Row className="discount-backcolor my-3 flex-fill mx-2 d-flex text-center align-items-center ">
          <Col className="d-flex justify-content-center">
            <div className="discount-title">Special Offer Up To 50% </div>
          </Col>

          <Col className="d-flex justify-content-center">
            <AdvancedImage className="dicount-img" cldImg={offerPic} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default OfferBanner;
