import {
  RECEIVE_USERS,
  ADD_QUESTION_AUTHOR,
  ADD_QUESTION_ANSWER_AUTHOR
} from "../actions/users";

const users = (state = { users: {} }, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users: { ...action.users }
      };
    case ADD_QUESTION_AUTHOR:
      const { question } = action;
      const authedUser = question.author;
      const users = {
        ...state.users,
        [authedUser]: {
          ...state.users[authedUser],
          questions: state.users[authedUser].questions.concat([question.id])
        }
      };
      return { ...state, ...users };
    case ADD_QUESTION_ANSWER_AUTHOR:
      const { authedUser, qid, answer } = action;
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
