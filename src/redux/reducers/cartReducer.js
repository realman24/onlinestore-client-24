import {
  ADD_TO_CART,
  APPALY_COUPON_CART,
  ALL_CART_ITEMS,
  UPDATE_CART_ITEM,
  DELETE_CART_ITEM,
  CLEAR_ALL_CART_ITEMS,
} from "../type";

const inital = {
  addToCart: [],
  getAllUserCart: [],
  clearCart: [],
  deleteItem: [],
  updateItem: [],
  applayCoupon: [],
};
const cartReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addToCart: action.payload,
      };
    case ALL_CART_ITEMS:
      return {
        ...state,
        getAllUserCart: action.payload,
      };
    case CLEAR_ALL_CART_ITEMS:
      return {
        ...state,
        clearCart: action.payload,
      };
    case DELETE_CART_ITEM:
      return {
        ...state,
        deleteItem: action.payload,
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        updateItem: action.payload,
      };
    // case APPALY_COUPON_CART:
    //   return {
    //     ...state,
    //     applayCoupon: action.payload,
    //   };
    default:
      return state;
  }
};
export default cartReducer;
