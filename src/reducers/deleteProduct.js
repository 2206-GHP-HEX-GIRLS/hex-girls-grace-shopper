import axios from "axios";

//action types
const DELETE_PRODUCT = "DELETE_PRODUCT";

//action creator
const deletedProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    product,
  };
};

//thunk creator
export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data: products } = await axios.delete(`/api/products/${id}`);
      dispatch(deletedProduct(products));
    } catch (error) {
      console.log("Error deleting Product from DB", error);
    }
  };
};

//initial state
const initialState = [];

//reducer
const deleteProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product.id);
    default:
      return state;
  }
};

export default deleteProductReducer;
