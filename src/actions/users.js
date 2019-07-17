export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

function updateUserAnswers({ authedUser, qid, answer }) {
  return {
    type: UPDATE_USER_ANSWERS,
    authedUser,
    qid,
    answer
  };
}

export function handleUpdateUserAnswers({ authedUser, qid, answer }) {
  return (dispatch, getState) => {
    dispatch(updateUserAnswers({ authedUser, qid, answer }));
  };
}
