import axios from "axios";

//action types
const GOT_PRODUCTS = "GOT_PRODUCTS";
const CREATE_PRODUCT = "CREATE_PRODUCT";

//action creator
const gotProducts = (products) => ({
  type: GOT_PRODUCTS,
  products,
});

const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product,
  };
};

//thunk creator
export const addProduct = (product) => {
  return async (dispatch) => {
    const response = await axios.post("/api/products", product);
    console.log(response.data);
    dispatch(createProduct(response.data));
  };
};

//thunk creators
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const { data: products } = await axios.get("/api/products");
      dispatch(gotProducts(products));
    } catch (error) {
      console.error("Error getting products from DB", error);
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
    case CREATE_PRODUCT:
      return [...state, action.product];
    default:
      return state;
  }
};

export default productsReducer;
