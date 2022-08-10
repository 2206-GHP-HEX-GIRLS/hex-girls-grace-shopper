import axios from 'axios';
import history from '../../history';
import { COOKIE } from '../../components/Auth/Cookie';
import { getCart } from './cart';

const TOKEN = 'token';

//action types
const SET_AUTH = 'SET_AUTH';

//action types
const setAuth = (auth) => ({ type: SET_AUTH, auth });

//action types
export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token,
      },
    });
    dispatch(getCart());
    return dispatch(setAuth(res.data));
  }
};

export const authenticate =
  (username, password, method) => async (dispatch) => {
    try {
      const device = window.localStorage.getItem(COOKIE);
      const resp = { username, password, device };
      const res = await axios.post(`/auth/${method}`, resp);
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
      history.push('/');
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  history.go(0);
  return {
    type: SET_AUTH,
    auth: {},
  };
};

//reducer
const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
};

export default authReducer;
