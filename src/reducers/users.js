import {
  RECEIVE_USERS,
  ADD_QUESTION_AUTHOR,
  ADD_QUESTION_ANSWER_AUTHOR
} from "../actions/users";

const users = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_USERS: {
      return {
        ...state,
        ...action.users
      };
    }
    case ADD_QUESTION_AUTHOR: {
      const { question } = action;
      const authedUser = question.author;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat([question.id])
        }
      };
    }
    case ADD_QUESTION_ANSWER_AUTHOR: {
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default users;
