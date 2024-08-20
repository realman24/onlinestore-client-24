import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction";

const BrandContainerHook = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const allBrand = useSelector((state) => state.brandReducer.brand);

  useEffect(() => {
    dispatch(getAllBrand(currentPage, 5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  console.log(allBrand);

  return [allBrand, setCurrentPage];
};

export default BrandContainerHook;
