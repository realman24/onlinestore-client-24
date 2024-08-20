import { useGetDataTokenToken } from "../../Api/useGetData";
import { useInsertData } from "../../Api/useInsertData";
import {
  ADD_ADDRESS,
  GET_ALL_ADDRESS,
  DELETE_ADDRESS,
  GET_ONE_ADDRESS,
  EDIT_ADDRESS,
} from "../type";
import useDeleteData from "./../../Api/useDeleteData";
import { useInsUpdateData } from "./../../Api/useInsUpdateData";

//add new address
export const addNewAddress = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/auth/address`, data);
    dispatch({
      type: ADD_ADDRESS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ADD_ADDRESS,
      payload: e.response,
    });
  }
};

//get all addresss
export const getAllAddresses = () => async (dispatch) => {
  try {
    const response = await useGetDataTokenToken(`/auth/address`);
    console.log(response);
    dispatch({
      type: GET_ALL_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ADDRESS,
      payload: e.response,
    });
  }
};

//Delete address
export const deleteAddress = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/auth/address/${id}`);
    console.log(response);
    dispatch({
      type: DELETE_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_ADDRESS,
      payload: e.response,
    });
  }
};

//get one address
export const getOneAddress = (id) => async (dispatch) => {
  try {
    const response = await useGetDataTokenToken(`/auth/address/${id}`);
    console.log(response);
    dispatch({
      type: GET_ONE_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_ADDRESS,
      payload: e.response,
    });
  }
};

//update one address by id
export const updateAddress = (id, body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/auth/address/${id}`, body);
    console.log(response);
    dispatch({
      type: EDIT_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: EDIT_ADDRESS,
      payload: e.response,
    });
  }
};
