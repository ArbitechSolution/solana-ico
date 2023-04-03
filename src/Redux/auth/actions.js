import { ActionTypes } from "../types";

export const login = (data) => {
  return async (dispatch) => {
    let isAuthenticated = false;
    if (localStorage.token) {
      isAuthenticated = true;
    }

    await dispatch({
      type: ActionTypes.LOGIN,
      payload: { isAuthenticated, data },
    });
  };
};
export const logout = () => {
  return async (dispatch) => {
    let isAuthenticated = false;
    await dispatch({ type: ActionTypes.LOGOUT, payload: isAuthenticated });
  };
};
