import {
  CREATE_ORDER_CASH,
  GET_ALL_ORDER,
  UPDATE_ORDER_DELIVER,
  GET_ONE_ORDER,
  UPDATE_ORDER_PAY,
} from "../type";

import { useGetDataToken, useGetDataTokenToken } from "../../Api/useGetData";

import { useInsertData } from "../../Api/useInsertData";

export const createOrder = (cartId, data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/auth/order/${cartId}`, data);
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: e.response,
    });
  }
};

export const getAllOrders = () => async (dispatch) => {
  try {
    const response = await useGetDataTokenToken(`/auth/order`);
    dispatch({
      type: GET_ALL_ORDER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ORDER,
      payload: e.response,
    });
  }
};

export const getOneOrder = (id) => async (dispatch) => {
  try {
    const response = await useGetDataTokenToken(`/auth/order/${id}`);

    dispatch({
      type: GET_ONE_ORDER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_ORDER,
      payload: e.response,
    });
  }
};
