import axios from 'axios';

//Action type
const CREATE_USER = 'CREATE_USER';

//Action Creator
const createdUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

//Thunk Creator
export const createUser = (user, history) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/users', user);
    dispatch(createdUser(data));
    history.push('/');
  };
};

//Initial State
const initialState = [];

//Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.user];
    default:
      return state;
  }
};

export default userReducer;
