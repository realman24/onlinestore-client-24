import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsAction";

const ProductCardContinerHook = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productsReducer.allProducts);

  console.log(allProducts);

  useEffect(() => {
    dispatch(getAllProducts(currentPage, 7));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return [allProducts, setCurrentPage];
};

export default ProductCardContinerHook;
