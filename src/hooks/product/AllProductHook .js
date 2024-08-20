import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTotalProducts } from "../../redux/actions/productsAction";

const AllProductHook = (word) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTotalProducts(word));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  const allTotalProducts = useSelector(
    (state) => state.productsReducer.allProducts
  );

  console.log(allTotalProducts);

  return [allTotalProducts];
};

export default AllProductHook;
