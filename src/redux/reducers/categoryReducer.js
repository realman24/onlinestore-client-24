import { GET_ALL_CATEGORY, GET_ONE_CATEGORY } from "../type";

const inital = {
  category: [],
  oneCategory: [],
  loading: true,
};
const categoryReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case GET_ONE_CATEGORY:
      return {
        oneCategory: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default categoryReducer;
