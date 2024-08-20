import React from "react";
import Carousel from "react-bootstrap/Carousel";
import item from "../../images/item.png";
import { useParams } from "react-router-dom";
import ProductsDetalisHook from "../../hooks/product/ProductsDetalisHook";

const ProductGallery = () => {
  const { id } = useParams();
  console.log(id);

  const [item, cat, brand, prod, image] = ProductsDetalisHook(id);

  return (
    <div className="product-gallary-card d-flex justify-content-center align-items-center">
      <div className="gallary-card d-flex justify-content-center align-items-center">
        <Carousel>
          <Carousel.Item>
            <img src={image} className="login-img" alt="sfvs" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="gallary-card-thumb d-flex justify-content-around">
        {/* <img src={item} className="login-img" alt="sfvs" />
        <img src={item} className="login-img" alt="sfvs" />
        <img src={item} className="login-img" alt="sfvs" /> */}
      </div>
    </div>
  );
};

export default ProductGallery;
