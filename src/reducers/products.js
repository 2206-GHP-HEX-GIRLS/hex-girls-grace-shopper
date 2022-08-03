import axios from "axios";
import product from "../server/db/models/product";


//action type
const GOT_PRODUCTS = 'GOT_PRODUCTS';
const ADD_PRODUCT = "ADD_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";

//action creators
const gotProducts = (products) => {
  return {
    type: GOT_PRODUCTS,
    products,
  };
};

//thunk creator
const addProducts = () => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

const editProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    product,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data: products } = await axios.get('api/products')
      gispatch(gotProducts(products))
    }catch (err) {
      console.log('Error getting products from DB', error)
    }
  }
}

export const createProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post('/api/products', product);
      dispatch(addProduct(created));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(`/api/products/${product.id}`, product)
      dispatch(editProduct(updated));
    } catch (err) {
      console.log(err);
    }
  };
};



//initial state
const initialState = []


const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_PRODUCTS:
      return action.products
    case ADD_PRODUCT:
      return [...state, action.product];
    case EDIT_PRODUCT:
      return state.map((product) => {
        return product.id === action.product.id ? action.product : product;
      });
    default:
      return state;
  }
}

export default productsReducer