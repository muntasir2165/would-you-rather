import { combineReducers } from "redux";
import authentication from "./authentication";
import users from "./users";
import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authentication,
  users,
  questions,
  loadingBar: loadingBarReducer
});
