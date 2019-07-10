import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddQuestion(author, optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    dispatch(showLoading());

    return saveQuestion({
      author,
      optionOneText,
      optionTwoText
    })
      .then(question => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

function addQuestionAnswer(authedUser, qid, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function handleAddQuestionAnswer(authedUser, qid, answer) {
  return (dispatch, getState) => {
    dispatch(showLoading());

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then((authedUser, qid, answer) =>
        dispatch(addQuestionAnswer(authedUser, qid, answer))
      )
      .then(() => dispatch(hideLoading()));
  };
}

export const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};
