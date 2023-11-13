import React, { useState } from "react";

const CartContext = React.createContext({
  amount: null,
  mealId: "",
  items: [],
  totalAmount: 0,
  addToCart: (item) => {},
  removeFromCart: (id) => {},
});

export default CartContext;
