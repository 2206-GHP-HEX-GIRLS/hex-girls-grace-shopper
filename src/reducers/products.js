import axios from 'axios';

//action type
const GOT_PRODUCTS = 'GOT_PRODUCTS';

//action creators
const gotProducts = (products) => {
  return {
    type: GOT_PRODUCTS,
    products,
  };
};

//thunk creator
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const { data: products } = await axios.get('api/products')
      gispatch(gotProducts(products))
    }catch (err) {
      console.log('Error getting products from DB', error)
    }
  }
}


//initial state
const initialState = []

//reducer
const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GOT_PRODUCTS:
      return action.products

      default: return state
  }
}

export default productsReducer