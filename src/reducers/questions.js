import {
  ADD_QUESTION,
  ADD_QUESTION_ANSWER,
  RECEIVE_QUESTIONS
} from "../actions/questions";

export default (questions = (state = { questions: {} }, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        questions: { ...action.questions }
      };
    case ADD_QUESTION:
      const { question } = action;
      questions = {
        ...state.questions,
        [question.id]: question
      };
      return {
        ...state,
        ...questions
      };
    case ADD_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action;
      const questions = {
        ...state.questions,
        [qid]: {
          ...state.questions[qid],
          [answer]: {
            ...state.questions[qid][answer],
            votes: state.questions[qid][answer].votes.concat([authedUser])
          }
        }
      };
      return {
        ...state,
        ...questions
      };
    default:
      return state;
  }
});
