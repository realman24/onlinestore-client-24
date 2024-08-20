import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsAction";

const SearchProductHook = (word) => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(currentPage, 6, word));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, word]);

  const searchProducts = useSelector(
    (state) => state.productsReducer.allProducts
  );

  console.log(searchProducts);

  return [searchProducts, setCurrentPage];
};

export default SearchProductHook;

// const AllProductHook = (word) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllTotalProducts(word));

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [word]);

//   const allTotalProducts = useSelector(
//     (state) => state.productsReducer.allProducts
//   );

//   console.log(allTotalProducts);

//   return [allTotalProducts];
// };

// export default AllProductHook;
