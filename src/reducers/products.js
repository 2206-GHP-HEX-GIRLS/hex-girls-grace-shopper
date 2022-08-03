import axios from "axios";

//action types
const GOT_PRODUCTS = "GOT_PRODUCTS";

//action creators
const gotProducts = (products) => ({
  type: GOT_PRODUCTS,
  products,
});

//thunk creators
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const { data: products } = await axios.get("/api/products");
      dispatch(gotProducts(products));
    } catch (error) {
      console.log("Error getting products from DB", error);
    }
  };
};

//initial state
const initialState = [];

//reducer
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PRODUCTS:
      return action.products;

    default:
      return state;
  }
};

export default productsReducer;
