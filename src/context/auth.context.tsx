import { createContext } from "react";


interface AuthContextData {
    user: any | null;
    signIn: (data: any) => Promise<void>;
    signOut: () => Promise<void>;
    signUp: (data: any) => Promise<void>;
  }

export const AuthContext = createContext<AuthContextData>({
  user: null,
  signIn: async () => {},
  signOut: async () => {},
  signUp: async () => {},
});
