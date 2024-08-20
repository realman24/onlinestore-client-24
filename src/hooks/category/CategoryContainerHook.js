import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";

const CategoryContainerHook = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const allCategory = useSelector((state) => state.categoryReducer.category);

  useEffect(() => {
    dispatch(getAllCategory(currentPage, 4));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  return [allCategory, setCurrentPage];
};

export default CategoryContainerHook;
