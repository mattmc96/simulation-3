/** @format */

const initialState = {
  user: {
    username: '',
    profile: '',
    userId: 0,
  },
};

const UPDATE_USER = 'UPDATE_USER';

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user,
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
