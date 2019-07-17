import {
  ADD_QUESTION,
  ADD_QUESTION_ANSWER,
  RECEIVE_QUESTIONS
} from "../actions/questions";

const questions = (state = { questions: {} }, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        questions: { ...action.questions }
      };
    case ADD_QUESTION:
      const { question } = action;

      // let replyingTo = {};
      // if (tweet.replyingTo !== null) {
      //   replyingTo = {
      //     [tweet.replyingTo]: {
      //       ...state[tweet.replyingTo],
      //       replies: state[tweet.replyingTo].replies.concat([tweet.id])
      //     }
      //   };
      // }

      return {
        ...state
        // [action.tweet.id]: action.tweet,
        // ...replyingTo
      };
    case ADD_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action;
      console.log("questions reducer: ", authedUser, qid, answer);
      const questions = {
        ...state.questions,
        [qid]: {
          ...state.questions[qid],
          [answer]: {
            ...state.questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
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
};

export default questions;
