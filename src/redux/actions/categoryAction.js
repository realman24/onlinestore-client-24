import { useGetData } from "../../Api/useGetData";
import { GET_ALL_CATEGORY, GET_ONE_CATEGORY } from "../type";

//get all category
export const getAllCategory = (page, limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/category?page=${page}&limit=${limit}`);

    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: e.response,
    });
  }
};

//get one category with
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/category/${id}`);

    dispatch({
      type: GET_ONE_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_CATEGORY,
      payload: e.response,
    });
  }
};
