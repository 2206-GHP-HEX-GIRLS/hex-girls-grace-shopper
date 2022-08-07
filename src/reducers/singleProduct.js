import axios from 'axios';

//Action type
const GOT_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';

//Action Creator
const gotSingleProduct = (product) => {
  return {
    type: GOT_SINGLE_PRODUCT,
    product,
  };
};

const editedProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    product,
  };
};

//Thunk Creator
export const getSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data: product } = await axios.get(`/api/products/${id}`);
      dispatch(gotSingleProduct(product));
    } catch (error) {
      console.log('Error fetching single product!', error);
    }
  };
};

export const editProduct = (product, id) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(`/api/products/${id}`, product);
      dispatch(editedProduct(updated));
    } catch (error) {
      console.log('Error updating product!', error);
    }
  };
};

//Initial State
const initialState = {};

//Reducer
const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_SINGLE_PRODUCT:
      return action.product;
    case EDIT_PRODUCT:
      return action.product;
    default:
      return state;
  }
};

export default singleProductReducer;
