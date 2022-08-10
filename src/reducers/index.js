import { combineReducers } from "redux";
import cartReducer from "./cart";
import productsReducer from "./products";
import singleProductReducer from "./singleProduct";
import userReducer from "./user";
import categoryReducer from "./category";
import reviewReducer from "./review";
import guestUserReducer from "./guest";

const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  user: userReducer,
  cart: cartReducer,
  category: categoryReducer,
  guest: guestUserReducer,
  review: reviewReducer,
});

export default rootReducer;
