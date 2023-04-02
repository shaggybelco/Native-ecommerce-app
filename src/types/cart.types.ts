import { IProduct } from "../Interface/IProduct";

export type CartActionTypes =
  | { type: "ADD_ITEM"; payload: IProduct }
  | { type: "REMOVE_ITEM"; payload: IProduct }
  | { type: "ADD_BY_SELECTION"; payload: {product: IProduct, addedPrice: string, quantity: number} };
