import { useGetData } from "../../Api/useGetData";
import { GET_ALL_BRAND, GET_ONE_BRAND } from "../type";

//get all category
export const getAllBrand = (page, limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/brand?page=${page}&limit=${limit}`);

    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_BRAND,
      payload: e.response,
    });
  }
};

//get one Brand
export const getOneBrand = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/brand/${id}`);

    dispatch({
      type: GET_ONE_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_BRAND,
      payload: e.response,
    });
  }
};
