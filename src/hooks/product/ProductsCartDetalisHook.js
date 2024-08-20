import React from "react";
import item from "../../images/item.png";
import {
  getOneProduct,
  getProductLike,
} from "../../redux/actions/productsAction";
import { getOneBrand } from "../../redux/actions/brandAction";
import { getOneCategory } from "../../redux/actions/categoryAction";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsCartDetalisHook = (prodID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(prodID));
  }, []);

  const oneProducts = useSelector((state) => state.productsReducer.oneProduct);
  const oneCategory = useSelector((state) => state.categoryReducer.oneCategory);
  const oneBrand = useSelector((state) => state.brandReducer.oneBrand);

  // products item
  let item = [];
  if (oneProducts) {
    item = oneProducts;
    console.log(oneProducts);
  } else item = [];

  let name = item.name;
  console.log(name);

  let description = item.description;
  console.log(description);

  useEffect(() => {
    if (item.category_id) dispatch(getOneCategory(item.category_id));
    if (item.brand_id) dispatch(getOneBrand(item.brand_id));
    if (item.category_id) dispatch(getProductLike(item.category_id));
  }, []);

  console.log(item.category_id);

  // images gallery
  let image = [];
  if (item.avatar) image = item.avatar;
  else {
    image = [{ original: `${item}` }];
  }

  // category item
  let cat = [];
  if (oneCategory.name) {
    cat = oneCategory.name;
    console.log(oneCategory.name);
  } else cat = [];

  // brand item
  let brand = [];
  if (oneBrand.name) {
    brand = oneBrand.name;
    console.log(oneBrand.name);
  } else brand = [];

  return [name, description, cat, brand, image];
};

export default ProductsCartDetalisHook;
