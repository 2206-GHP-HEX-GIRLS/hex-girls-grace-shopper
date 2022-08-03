import axios from "axios";

const SET_PRODUCTS = "SET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

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

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/products/");
      dispatch(setProducts(data));
    } catch (error) {
      console.log("Error fetching all products from server", error);
    }
  };
};

export const createProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post("/api/products", product);
      dispatch(addProduct(created));
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
      return [...state, action.campus];
    default:
      return state;
  }
}
