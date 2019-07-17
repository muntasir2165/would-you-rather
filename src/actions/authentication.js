export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = authedUser => ({
  type: LOGIN,
  authedUser
});

export const logout = authedUser =>
  authedUser
    ? {
        type: LOGOUT,
        authedUser: null
      }
    : null;
