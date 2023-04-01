import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Interface/rootState';

interface CartContextType {
  count: number;
}

const CartContext = createContext<CartContextType>({ count: 0 });

export const CartProvider: React.FC<any> = ({ children }) => {
  const [count, setCount] = useState(0);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  useEffect(() => {
    let totalCount = 0;
    cartItems.forEach((cartItem) => {
      totalCount += cartItem.quantity || 0;
    });
    setCount(totalCount);
  }, [cartItems]);
  
  console.log(cartItems);

  return (
    <CartContext.Provider value={{ count }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
