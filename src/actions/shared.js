import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { receiveUsers, handleUpdateUserAnswers } from "../actions/users";
import {
  receiveQuestions,
  handleAddQuestionAnswer
} from "../actions/questions";
import { showLoading, hideLoading } from "react-redux-loading";

export const handleInitialData = () => {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
};

export const handleUpdateUserAnswersAndAddQuestionAnswer = ({
  authedUser,
  qid,
  answer
}) => {
  return (dispatch, getState) => {
    console.log("shared.js: ", authedUser, qid, answer);
    dispatch(showLoading());
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(({authedUser, qid, answer}) => {
        dispatch(handleUpdateUserAnswers({ authedUser, qid, answer }));
        dispatch(handleAddQuestionAnswer({ authedUser, qid, answer }));
      })
      .then(() => dispatch(hideLoading())).catch(error => console.log(JSON.stringify(error)));
  };
};
