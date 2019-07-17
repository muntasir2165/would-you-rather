import { RECEIVE_USERS, UPDATE_USER_ANSWERS } from "../actions/users";

const users = (state = { users: {} }, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users: { ...action.users }
      };
    case UPDATE_USER_ANSWERS:
      const { authedUser, qid, answer } = action;
      console.log("questions reducer: ", authedUser, qid, answer);
      const users = {
        ...state.users,
        [authedUser]: {
          ...state.users[authedUser],
          answers: {
            ...state.users[authedUser].answers,
            [qid]: answer
          }
        }
      };
      return { ...state, ...users };
    default:
      return state;
  }
};

export default users;
