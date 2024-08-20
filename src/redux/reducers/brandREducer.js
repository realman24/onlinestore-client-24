import { GET_ALL_BRAND, GET_ONE_BRAND } from "../type";

const inital = {
  brand: [],
  oneBrand: [],
  loading: true,
};
const brandReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    case GET_ONE_BRAND:
      return {
        oneBrand: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default brandReducer;
