import {
  ADD_QUESTION,
  ADD_QUESTION_ANSWER,
  RECEIVE_QUESTIONS
} from "../actions/questions";

const questions = (state = {questions: {}}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        questions: {...action.questions}
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
      // const { question } = action;

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
    default:
      return state;
  }
};

export default questions;
