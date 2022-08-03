import axios from "axios";
import product from "../server/db/models/product";

const SET_PRODUCTS = "SET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";

const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

const addProduct = (product) => {
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
      const { data } = await axios.get('/api/products/');
      dispatch(setProducts(data));
    } catch (error) {
      console.log('Error fetching all products from server', error);
    }
  };
};

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


export default function productsReducer(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
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
