import axios from "axios";

//action type
const CREATE_PRODUCT = "CREATE_PRODUCT";

//action creator
const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product,
  };
};

//thunk creator
export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post("/api/products", product);
      dispatch(createProduct(created));
    } catch (error) {
      console.error("Error adding product to DB!", error);
    }
  };
};

//initial state
const initialState = [];

//reducer
const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return [...state, action.product];
    default:
      return state;
  }
};

export default addProductReducer;
