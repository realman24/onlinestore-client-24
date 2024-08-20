import {
  CREATE_NEW_USER,
  LOGIN_USER,
  DELETE_USER,
  GET_ALL_USERS,
  GET_ONE_USER,
  UPDATE_USER,
} from "../type";

import { useInsertData } from "../../Api/useInsertData";
import useDeleteData from "../../Api/useDeleteData";
import { useGetDataToken } from "../../Api/useGetData";
import { useInsUpdateData } from "../../Api/useInsUpdateData";

//create new user
export const createNewUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/auth/register`, data);
    dispatch({
      type: CREATE_NEW_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_USER,
      payload: e.response,
    });
  }
};

//login  user
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`auth/login`, data);
    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};

//delete  user by id
export const deleteUser = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`users/${id}`);
    dispatch({
      type: DELETE_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DELETE_USER,
      payload: e.response,
    });
  }
};

//get all users
export const getAllUser = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/users`);
    dispatch({
      type: GET_ALL_USERS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USERS,
      payload: e.response,
    });
  }
};

//get one user
export const getOneUser = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/users/${id}`);
    dispatch({
      type: GET_ONE_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_USER,
      payload: e.response,
    });
  }
};

//update user
export const updateUser = (id, body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/users/${id}`, body);
    dispatch({
      type: UPDATE_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER,
      payload: e.response,
    });
  }
};
