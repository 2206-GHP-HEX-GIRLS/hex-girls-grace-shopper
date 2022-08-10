import axios from "axios";

const GET_CATEGORIES = "GET_CATEGORIES";

const setCategories = (categories) => ({
  type: GET_CATEGORIES,
  categories,
});

export const fetchCategories = (category, param) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/category/${param}`, category);

    dispatch(setCategories(data));
  };
};

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories;

    default:
      return state;
  }
};

export default categoryReducer;
