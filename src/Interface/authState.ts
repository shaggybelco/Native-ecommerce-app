import { IUser } from "./User";

export interface AuthState {
    isAuthenticated: boolean;
    user: IUser | null;
    token: string | null;
    error: string | null;
  }