import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Cart from "./Cart/Cart";

export default function Layout() {
  // for modal
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Outlet />
    </>
  );
}
