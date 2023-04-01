import { IProduct } from "../Interface/IProduct";

export type CartActionTypes = { type: "ADD_ITEM"; payload: IProduct }|{ type: "REMOVE_ITEM"; payload: IProduct}
