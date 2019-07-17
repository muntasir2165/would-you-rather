import { LOGIN, LOGOUT } from "../actions/authentication";

const authentication = (state = { authedUser: null }, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, authedUser: action.authedUser };
    case LOGOUT:
      return { ...state, authedUser: null };
    default:
      return state;
  }
};

export default authentication;
