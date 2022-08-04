import { combineReducers } from "redux";
import productsReducer from "./products";
import addProductReducer from "./addProduct";
import deleteProductReducer from "./deleteProduct";
import singleProductReducer from "./singleProduct";

const rootReducer = combineReducers({
  products: productsReducer,
  addProducts: addProductReducer,
  deleteProducts: deleteProductReducer,
  singleProduct: singleProductReducer,
});

export default rootReducer;
