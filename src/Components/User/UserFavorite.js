import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import UserWishListHook from "../../hooks/user/UserWishListHook";

const UserFavorite = () => {
  const [fav, handleFav, favProd, favIcon, setFav, favNumbers] =
    UserWishListHook();
  return (
    <div className="admin-profile">
      <div className="admin-content-text pb-4">Favorites </div>
      <Row className="d-flex justify-content-start">
        {favProd.length > 0 ? (
          favProd.map((item, index) => {
            return (
              <ProductCard
                key={index}
                title={item.name}
                img={item.avatar}
                description={item.description}
                price={item.price}
                id={item._id}
              />
            );
          })
        ) : (
          <h6>Ther Is No Favorit Products</h6>
        )}
      </Row>
      {/* <Pagination /> */}
    </div>
  );
};

export default UserFavorite;
