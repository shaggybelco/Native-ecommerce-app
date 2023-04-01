import { AuthActionTypes } from "../types/auth.types";
import { IUser } from "../Interface/User";
import { IProduct } from "../Interface/IProduct";
import { CartActionTypes } from "../types/cart.types";

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

  export const addToCart = (item: IProduct): CartActionTypes =>({
    type: "ADD_ITEM",
    payload: item
  })

  export const removeFromCart = (item: IProduct): CartActionTypes => ({
    type: "REMOVE_ITEM",
    payload: item
  });