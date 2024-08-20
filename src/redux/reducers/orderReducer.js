import {
  CREATE_ORDER_CASH,
  GET_ALL_ORDER,
  UPDATE_ORDER_DELIVER,
  GET_ONE_ORDER,
  UPDATE_ORDER_PAY,
} from "../type";

const inital = {
  newOrder: [],
  allUserOrders: [],
  oneOrder: [],
  changePay: [],
  changeDeliver: [],
};

const orderReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_ORDER_CASH:
      return {
        ...state,
        newOrder: action.payload,
      };
    case GET_ALL_ORDER:
      return {
        ...state,
        allUserOrders: action.payload,
      };
    case GET_ONE_ORDER:
      return {
        ...state,
        oneOrder: action.payload,
      };
    //    case UPDATE_ORDER_PAY:
    //      return {
    //        ...state,
    //        changePay: action.payload,
    //      };
    //    case UPDATE_ORDER_DELIVER:
    //      return {
    //        ...state,
    //        changeDeliver: action.payload,
    //      };
    default:
      return state;
  }
};
export default orderReducer;
