export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_AUTHOR = "ADD_QUESTION_AUTHOR";
export const ADD_QUESTION_ANSWER_AUTHOR = "ADD_QUESTION_ANSWER_AUTHOR";

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const addQuestionAuthor = question => ({
  type: ADD_QUESTION_AUTHOR,
  question
});

export const addQuestionAnswerAuthor = ({ authedUser, qid, answer }) => ({
  type: ADD_QUESTION_ANSWER_AUTHOR,
  authedUser,
  qid,
  answer
});
