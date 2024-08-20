import {
  ADD_ADDRESS,
  GET_ALL_ADDRESS,
  DELETE_ADDRESS,
  GET_ONE_ADDRESS,
  EDIT_ADDRESS,
} from "../type";

const inital = {
  addAddress: [],
  allAddresses: [],
  deleteAddress: [],
  oneAddress: [],
  editAddress: [],
};

const addressReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        addAddress: action.payload,
      };
    case GET_ALL_ADDRESS:
      return {
        ...state,
        allAddresses: action.payload,
      };
    case DELETE_ADDRESS:
      return {
        ...state,
        deleteAddress: action.payload,
      };
    case GET_ONE_ADDRESS:
      return {
        ...state,
        oneAddress: action.payload,
      };
    case EDIT_ADDRESS:
      return {
        ...state,
        editAddress: action.payload,
      };
    default:
      return state;
  }
};
export default addressReducer;
