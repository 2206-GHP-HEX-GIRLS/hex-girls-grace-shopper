import axios from "axios";

//Action type
const CREATE_USER = "CREATE_USER";
const GET_USER = "GET_USER";

//Action Creator
const createdUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

const setUser = (user) => ({
  type: GET_USER,
  user,
});

//Thunk Creator
export const createUser = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post("/api/users", user);
    dispatch(createdUser(data));
  };
};

export const fetchUser = (user) => {
  return async (dispatch) => {
    const response = await axios.get(
      `/api/users/${user.username}/${user.password}`
    );
    console.log(response);
    dispatch(setUser(response.data));
  };
};

//Initial State
const initialState = {};

//Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.user;
    case GET_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
