import { combineReducers } from "redux";
import cartReducer from "./cart";
import productsReducer from "./products";
import singleProductReducer from "./singleProduct";
import userReducer from "./user";

const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
