import axios from "axios";

//Action type
const SET_GUEST = "SET_GUEST";
const SET_GUEST_STATUS = "SET_GUEST_STATUS";

//Action Creator
const _setGuest = (guest) => ({
  type: SET_GUEST,
  guest,
});

//Thunk Creator
export const setGuest = (guestId) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/api/users/guest`, {
      accountId: guestId,
    });
    dispatch(_setGuest(data));
  };
};

//Initial State
const initialState = {};

//Reducer
const guestUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GUEST:
      return action.guest;
    case SET_GUEST_STATUS:
      return action.guest;
    default:
      return state;
  }
};

export default guestUserReducer;
