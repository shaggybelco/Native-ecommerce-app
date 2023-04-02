import { AnyAction, Reducer } from "redux";
import { IProduct } from "../Interface/IProduct";
import { CartActionTypes } from "../types/cart.types";

interface CartItem extends IProduct {
  quantity: number;
  addedPrice: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer: Reducer<CartState, CartActionTypes> = (
  state = initialState,
  action: AnyAction
): CartState => {
  switch (action.type) {
    case "ADD_BY_SELECTION":
      const { product, quantity, addedPrice } = action.payload;
      const itemIndexx = state.items.findIndex(
        (item) => item.id === product.id
      );
      if (itemIndexx === -1) {
        // Item does not exist in the cart, add it with custom quantity and total price
        return {
          ...state,
          items: [...state.items, { ...product, quantity, addedPrice }],
        };
      } else {
        // Item already exists in the cart, update its quantity and total price
        const updatedItems = [...state.items];
        updatedItems[itemIndexx] = {
          ...updatedItems[itemIndexx],
          quantity,
          addedPrice: parseFloat(updatedItems[itemIndexx].price) * quantity,
        };
        return {
          ...state,
          items: updatedItems,
        };
      }
    case "ADD_ITEM":
      const newItem = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === newItem.id);
      if (itemIndex === -1) {
        // Item does not exist in the cart, add it with quantity 1
        return {
          ...state,
          items: [
            ...state.items,
            { ...newItem, quantity: 1, addedPrice: parseFloat(newItem.price) },
          ],
        };
      } else {
        // Item already exists in the cart, increment its quantity and price
        const updatedItems = [...state.items];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1,
          addedPrice:
            parseFloat(updatedItems[itemIndex].addedPrice.toString()) +
            parseFloat(newItem.price),
        };
        return {
          ...state,
          items: updatedItems,
        };
      }

    case "REMOVE_ITEM":
      const removeItem = action.payload;
      const itemToRemoveIndex = state.items.findIndex(
        (item) => item.id === removeItem.id
      );
      if (itemToRemoveIndex === -1) {
        // Item does not exist in the cart, do nothing
        return state;
      } else if (state.items[itemToRemoveIndex].quantity === 1) {
        // Item quantity is 1, remove it from the cart
        return {
          ...state,
          items: state.items.filter((item) => item.id !== removeItem.id),
        };
      } else {
        // Item quantity is greater than 1, decrement its quantity and price
        const updatedItems = [...state.items];
        updatedItems[itemToRemoveIndex] = {
          ...updatedItems[itemToRemoveIndex],
          quantity: updatedItems[itemToRemoveIndex].quantity - 1,
          addedPrice:
            parseFloat(updatedItems[itemToRemoveIndex].addedPrice.toString()) -
            parseFloat(removeItem.price),
        };

        return {
          ...state,
          items: updatedItems,
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
