export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

export const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

export const addQuestion = question => ({
  type: ADD_QUESTION,
  question
});

export const addQuestionAnswer = ({authedUser, qid, answer}) => ({
  type: ADD_QUESTION_ANSWER,
  authedUser,
  qid,
  answer
});
