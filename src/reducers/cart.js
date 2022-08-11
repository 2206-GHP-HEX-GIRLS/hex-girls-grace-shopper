import axios from 'axios';

const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_CART = 'UPDATE_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

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
      const { data } = await axios.get('/api/cart');
      dispatch(_getCart(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const addToCart = (item) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/cart', item);
      dispatch(_addToCart(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const removeFromCart = (item) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/cart/${item.id}`);
      dispatch(_removeFromCart(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const updateCart = (item, quantity) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/cart/`, {
        item,
        quantity,
      });
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
      return action.item;
    case UPDATE_CART:
      return action.item;
    case REMOVE_FROM_CART:
      return [...state].filter((item) => item.id !== action.item.id);
    default:
      return state;
  }
};

export default cartReducer;
