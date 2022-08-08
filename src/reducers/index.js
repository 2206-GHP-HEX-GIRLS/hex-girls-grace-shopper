import { combineReducers } from 'redux';
import productsReducer from './products';
import singleProductReducer from './singleProduct';
import userReducer from './user';

const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  user: userReducer,
});

export default rootReducer;
