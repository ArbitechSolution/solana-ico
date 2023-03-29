import { ActionTypes } from "../types";
import axios from "axios";
export const login = async (userData) => {
  return async (dispatch) => {
    let isAuthenticated = true;
    sessionStorage.setItem("token", userData.token);
    await dispatch({ type: ActionTypes.LOGIN, payload: isAuthenticated });
  };
};
export const logout = () => {
  return async (dispatch) => {
    let isAuthenticated = false;
    sessionStorage.removeItem("token");
    await dispatch({ type: ActionTypes.LOGOUT, payload: isAuthenticated });
  };
};
