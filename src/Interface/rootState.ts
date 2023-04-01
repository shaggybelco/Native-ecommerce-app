// types.ts
import { AuthState } from './authState';
import { CartState } from './cartState';

export interface RootState {
  auth: AuthState;
  cart: CartState;
}
