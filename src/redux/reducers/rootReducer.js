import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import authReducer from "./authReducer";
import brandReducer from "./brandREducer";
import productsReducer from "./productsReducer";
import wishListReducer from "./wishListReducer";
import cartReducer from "./cartReducer";
import addressReducer from "./addressReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  productsReducer: productsReducer,
  categoryReducer: categoryReducer,
  brandReducer: brandReducer,
  authReducer: authReducer,
  wishListReducer: wishListReducer,
  cartReducer: cartReducer,
  addressReducer: addressReducer,
  orderReducer: orderReducer,
});
