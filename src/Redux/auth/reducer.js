import { ActionTypes } from "../types";

const INITIAL_STATE = {
  isAuthenticated: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
