import axios from "axios";

const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const UPDATE_CART = "UPDATE_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const _getCart = (items) => {
  return {
    type: GET_CART,
    items,
  };
};

const _addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item,
  };
};

const _updateCart = (item) => {
  return {
    type: UPDATE_CART,
    item,
  };
};

const _removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    item,
  };
};

export const getCart = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/cart");
      console.log(response.data);
      dispatch(_getCart(response.data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const addToCart = (item) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/cart", item);
      console.log(response.data);
      dispatch(_addToCart(response.data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const removeFromCart = (item) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/api/cart/${item.id}`);
      console.log(response);
      dispatch(_removeFromCart(response.data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const updateCart = (item) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/cart/${item.id}`, item);
      console.log(response);
      dispatch(_updateCart(response.data));
    } catch (err) {
      console.error(err);
    }
  };
};

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return action.items;
    case ADD_TO_CART:
      return [...state, action.item];
    case UPDATE_CART:
      return [...state].map((item) => {
        if (item.id === action.item.id) {
          item = action.item;
          return item;
        } else {
          return item;
        }
      });
    case REMOVE_FROM_CART:
      return [...state].filter((item) => item.id !== action.item.id);
    default:
      return state;
  }
};

export default cartReducer;
