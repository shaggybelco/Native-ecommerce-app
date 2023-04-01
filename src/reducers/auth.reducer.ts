import { Reducer } from "redux";
import { AuthActionTypes } from "../types/auth.types";
import { AuthState } from "../Interface/authState";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
};

const authReducer: Reducer<AuthState, AuthActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        error: null,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "REMOVE_TOKEN":
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
