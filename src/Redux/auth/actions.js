import { ActionTypes } from "../types";
export const login = () => {
  // const navigate = useNavigate();
  return async (dispatch) => {
    let isAuthenticated = true;
    await dispatch({ type: ActionTypes.LOGIN, payload: isAuthenticated });
    // navigate("/mypage");
  };
};
export const logout = () => {
  return async (dispatch) => {
    let isAuthenticated = false;
    await dispatch({ type: ActionTypes.LOGOUT, payload: isAuthenticated });
  };
};
