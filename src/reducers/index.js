import { combineReducers } from "redux";
import productsReducer from "./products";
import singleProductReducer from "./singleProduct";

const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
});

export default rootReducer;
