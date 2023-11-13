import React from 'react';
import Logo from '../assets/logo.svg'
import Basket from '../assets/basket.svg'
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
    <header className="topnav">
        <Link to="/shop">Shop for all</Link>
        <Link to="/"> 
          <img src={Logo} alt="logo" name='logo' />
        </Link>
        <Link  to="/cart">
          <img src={Basket} alt="shopping-basket" name='icon' />
        </Link>

    </header>
    

      <Outlet />
    </>
  )
}
