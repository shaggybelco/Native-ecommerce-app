import { AuthActionTypes } from "../Interface/types";
import { IUser } from "../Interface/User";

export const setToken = (token: string): AuthActionTypes => ({
    type: 'SET_TOKEN',
    payload: token,
  });
  
  export const removeToken = (): AuthActionTypes => ({
    type: 'REMOVE_TOKEN',
  });
  
  export const setUser = (user: IUser, token: string): AuthActionTypes => ({
    type: 'LOGIN_SUCCESS',
    payload: {user: user, token: token}
  })
  
  export const logOut = (): AuthActionTypes => ({
    type: 'LOGOUT',
  });

  export const loginFailed = (message: string): AuthActionTypes => ({
    type: 'LOGIN_FAILURE',
    payload: message
  });