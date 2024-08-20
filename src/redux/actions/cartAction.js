import {
  ADD_TO_CART,
  APPALY_COUPON_CART,
  ALL_CART_ITEMS,
  UPDATE_CART_ITEM,
  DELETE_CART_ITEM,
  CLEAR_ALL_CART_ITEMS,
} from "../type";
import { useGetData, useGetDataToken } from "../../Api/useGetData";
import { useInsertData, useInsertDataUser } from "../../Api/useInsertData";
import useDeleteData from "./../../Api/useDeleteData";
import { useInsUpdateData } from "./../../Api/useInsUpdateData";
//add to cart
export const addProductToCart = (body) => async (dispatch) => {
  try {
    const response = await useInsertDataUser("/cart", body);
    dispatch({
      type: ADD_TO_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_TO_CART,
      payload: e.response,
    });
  }
};

//get all cart items
export const getAllUserCartItems = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/cart`);
    console.log(response);
    dispatch({
      type: ALL_CART_ITEMS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ALL_CART_ITEMS,
      payload: e.response,
    });
  }
};

// Delete One Item From Cart
export const deleteCartItem = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/cart/${id}`);
    console.log(response);
    dispatch({
      type: DELETE_CART_ITEM,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_CART_ITEM,
      payload: e.response,
    });
  }
};

// Delete All Cart Items
export const clearAllCartItem = () => async (dispatch) => {
  try {
    const response = await useDeleteData(`/cart`);
    console.log(response);
    dispatch({
      type: CLEAR_ALL_CART_ITEMS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CLEAR_ALL_CART_ITEMS,
      payload: e.response,
    });
  }
};

// Update One Item In Cart
export const updateCartItem = (id, body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/cart/${id}`, body);
    console.log(response);
    dispatch({
      type: UPDATE_CART_ITEM,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_CART_ITEM,
      payload: e.response,
    });
  }
};
