import React from "react";

const CartContext = React.createContext({
  amount: null,
  id: "",
  items: [],
  totalAmount: 0,
  addToCart: (item) => {},
  removeFromCart: (id) => {},
});

export default CartContext;
