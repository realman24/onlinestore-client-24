import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";

import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishList,
  getProductWishList,
  removeProductToWishList,
} from "../../redux/actions/wishlistAction";

const UserWishListHook = (pId) => {
  let noFavIcon = favoff;
  let favIcon = favon;

  const [fav, setFav] = useState(noFavIcon);
  // const [favNum, setFavNum] = useState("");
  const [loading, setLoading] = useState(true);
  const [favProd, setFavProd] = useState([]);

  // console.log(pId);

  const dispatch = useDispatch();

  const addToWishList = async () => {
    await dispatch(addProductToWishList({ productId: pId }));
    window.location.reload()
  };

  const removeFromWishList = async () => {
    await dispatch(removeProductToWishList(pId));
    window.location.reload()
  };
  

  const res = useSelector((state) => state.wishListReducer.allWishList);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductWishList());
      setLoading(false);
    };
    get();
  }, [fav]);



  useEffect(() => {
    if (loading === false) {
      if (res !== undefined) {
        setFavProd(res.data);
      } else setFavProd([]);
    }
  }, [loading]);

  const handleFav = () => {
    if (fav === noFavIcon) {
      setFav(favIcon);
      addToWishList();

    } else if (fav === favIcon){
      setFav(noFavIcon);
      removeFromWishList();
    }
  };

  let favNum = "";
  if (res !== undefined) {
    favNum = res.results;
  }


  console.log(favProd);

  // console.log(res);

  return [fav, handleFav, favProd, favIcon, setFav, favNum];
};

export default UserWishListHook;
