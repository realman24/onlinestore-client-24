import {
  CREATE_NEW_USER,
  LOGIN_USER,
  DELETE_USER,
  GET_ALL_USERS,
  GET_ONE_USER,
  UPDATE_USER,
} from "../type";

const inital = {
  createUser: [],
  loginUser: [],
  deleteUser: [],
  allUsers: [],
  oneUser: [],
  updateUser: [],
  loading: true,
};
const authReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        createUser: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        deleteUser: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case GET_ONE_USER:
      return {
        ...state,
        oneUser: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        updateUser: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
