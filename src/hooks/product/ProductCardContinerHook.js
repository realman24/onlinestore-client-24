import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsAction";

const ProductCardContinerHook = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productsReducer.allProducts);

  let word = "";
  useEffect(() => {
    dispatch(getAllProducts(currentPage, 6, word));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  console.log(allProducts);
  console.log(currentPage);

  return [allProducts, setCurrentPage];
};

export default ProductCardContinerHook;
