import { combineReducers } from 'redux';
import productsReducer from './products';
import addProductReducer from './addProduct';
import deleteProductReducer from './deleteProduct';
import singleProductReducer from './singleProduct';
import userReducer from './user';

const rootReducer = combineReducers({
  products: productsReducer,
  addProducts: addProductReducer,
  deleteProducts: deleteProductReducer,
  singleProduct: singleProductReducer,
  user: userReducer,
});

export default rootReducer;
