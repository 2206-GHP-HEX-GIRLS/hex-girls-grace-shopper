import axios from 'axios';

//Action type
const CREATE_USER = 'CREATE_USER';
const LOGIN_USER = 'LOGIN_USER';

//Action Creator
const createdUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

const loggedinUser = (user) => {
  return {
    type: LOGIN_USER,
    user,
  };
};

//Thunk Creator
export const createUser = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/users', user);
    dispatch(createdUser(data));
  };
};

export const loginUser = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/users/login', user);
    dispatch(loggedinUser(data));
  };
};

//Initial State
const initialState = [];

//Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.user];
    case LOGIN_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
