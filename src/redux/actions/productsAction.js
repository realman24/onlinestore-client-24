// import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { useGetData } from "../../Api/useGetData";
import {
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  CREATE_PRODUCTS,
  GET_PRODUCT_LIKE,
  GET_ALL_TOTAL_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETALIS,
} from "../type";

// //get all products without pagination
// export const getAllTotalProducts = (word) => async (dispatch) => {
//   try {
//     const response = await useGetData(`/product/all?name=${word}`);
//     dispatch({
//       type: GET_ALL_TOTAL_PRODUCTS,
//       payload: response,
//       loading: true,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_ALL_TOTAL_PRODUCTS,
//       payload: e.response,
//     });
//   }
// };

//get all products with pagination
export const getAllProducts = (page, limit, word) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/product?page=${page}&limit=${limit}&name=${word}`
    );
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: e.response,
    });
  }
};

//get one product with id
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/product/${id}`);
    dispatch({
      type: GET_PRODUCT_DETALIS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_DETALIS,
      payload: e.response,
    });
  }
};

//get similar products using id
export const getProductLike = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/product?category=${id}`);
    dispatch({
      type: GET_PRODUCT_LIKE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_LIKE,
      payload: e.response,
    });
  }
};

// //create products with pagination
// export const createProduct = (formatData) => async (dispatch) => {
//   try {
//     const response = await useInsertDataWithImage("/product", formatData);
//     dispatch({
//       type: CREATE_PRODUCTS,
//       payload: response,
//       loading: true,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_ERROR,
//       payload: "Error  " + e,
//     });
//   }
// };

// //get all products with pagination with pages number
// export const getAllProductsPage = (page, limit) => async (dispatch) => {
//   try {
//     const response = await useGetData(
//       `/api/v1/products?page=${page}&limit=${limit}`
//     );
//     dispatch({
//       type: GET_ALL_PRODUCTS,
//       payload: response,
//       loading: true,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_ERROR,
//       payload: "Error " + e,
//     });
//   }
// };

// //get all products with query string
// export const getAllProductsSearch = (queryString) => async (dispatch) => {
//   try {
//     const response = await useGetData(`/api/v1/products?${queryString}`);
//     dispatch({
//       type: GET_ALL_PRODUCTS,
//       payload: response,
//       loading: true,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_ERROR,
//       payload: "Error " + e,
//     });
//   }
// };

// //delete prooduct with id
// export const deleteProducts = (id) => async (dispatch) => {
//   try {
//     const response = await useDeleteData(`/api/v1/products/${id}`);
//     dispatch({
//       type: DELETE_PRODUCTS,
//       payload: response,
//       loading: true,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_ERROR,
//       payload: "Error " + e,
//     });
//   }
// };

// //update prooduct with id
// export const updateProducts = (id, data) => async (dispatch) => {
//   try {
//     const response = await useInUpdateDataWithImage(
//       `/api/v1/products/${id}`,
//       data
//     );
//     dispatch({
//       type: UPDATE_PRODUCTS,
//       payload: response,
//       loading: true,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_ERROR,
//       payload: "Error " + e,
//     });
//   }
// };
