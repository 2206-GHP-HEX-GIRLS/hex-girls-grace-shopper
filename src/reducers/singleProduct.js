import axios from "axios";

//Action type
const GOT_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";

//Action Creator
const gotSingleProduct = (products) => {
  return {
    type: GOT_SINGLE_PRODUCT,
    products,
  };
};

const editedProduct = (products) => {
  return {
    type: EDIT_PRODUCT,
    products,
  };
};

//Thunk Creator
export const getSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(gotSingleProduct(data));
    } catch (error) {
      console.log("Error fetching single product!", error);
    }
  };
};

export const editProduct = (products, history) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(
        `/api/products/${products.id}`,
        products
      );
      dispatch(editedProduct(updated));
    } catch (error) {
      console.log("Error updating product!", error);
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
