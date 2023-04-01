import { IUser } from "../Interface/User";

export type AuthActionTypes =
  | { type: "LOGIN_SUCCESS"; payload: { user: IUser; token: string } }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "LOGOUT" }
  | { type: "SET_TOKEN"; payload: string }
  | { type: "REMOVE_TOKEN" } 