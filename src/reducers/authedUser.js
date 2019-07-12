import { SET_AUTHED_USER } from "../actions/authedUser";

const authedUser = (state = { id: null }, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return { ...state, id: action.id };
    default:
      return state;
  }
};

export default authedUser;
