import { createContext } from "react";
import { IUser } from "../Interface/User";


interface AuthContextData {
    user: any | null;
    signIn: (data: any) => Promise<void>;
    signOut: () => Promise<void>;
  }

export const AuthContext = createContext<AuthContextData>({
  user: null,
  signIn: async ({}) => {},
  signOut: async () => {},
});
