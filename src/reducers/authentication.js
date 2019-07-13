import { LOGIN, LOGOUT } from "../actions/authentication";

const authentication = (state = { id: null }, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, id: action.id };
    case LOGOUT:
      return { ...state, id: null };
    default:
      return state;
  }
};

export default authentication;
