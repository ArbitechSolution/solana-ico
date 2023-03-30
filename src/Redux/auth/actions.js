import { ActionTypes } from "../types";

export const login = () => {
  return async (dispatch) => {
    let isAuthenticated = false;
    if (sessionStorage.token) {
      isAuthenticated = true;
    }

    await dispatch({ type: ActionTypes.LOGIN, payload: isAuthenticated });
  };
};
export const logout = () => {
  return async (dispatch) => {
    let isAuthenticated = false;
    await dispatch({ type: ActionTypes.LOGOUT, payload: isAuthenticated });
  };
};
