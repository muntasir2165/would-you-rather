import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import {
  receiveUsers,
  addQuestionAuthor,
  addQuestionAnswerAuthor
} from "../actions/users";
import {
  receiveQuestions,
  addQuestion,
  addQuestionAnswer
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

export const handleAddQuestion = ({
  author,
  optionOneText,
  optionTwoText
}) => dispatch => {
  dispatch(showLoading());
  return saveQuestion({
    author,
    optionOneText,
    optionTwoText
  })
    .then(question => {
      dispatch(addQuestion(question));
      dispatch(addQuestionAuthor(question));
    })
    .then(() => dispatch(hideLoading()));
};

export const handleAddQuestionAnswer = ({
  authedUser,
  qid,
  answer
}) => dispatch => {
  dispatch(showLoading());
  return saveQuestionAnswer({
    authedUser,
    qid,
    answer
  })
    .then(() => {
      dispatch(addQuestionAnswer({ authedUser, qid, answer }));
      dispatch(addQuestionAnswerAuthor({ authedUser, qid, answer }));
    })
    .then(() => dispatch(hideLoading()));
};
