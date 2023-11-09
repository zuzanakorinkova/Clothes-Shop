import React from 'react';
import Logo from '../assets/logo.svg'
import Basket from '../assets/basket.svg'
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
    <header class="topnav">
        <Link to="/shop">Shop for all</Link>
        <Link to="/"> <img src={Logo} alt="logo" className='logo' /></Link>
        <Link  to="/cart">    <img src={Basket} alt="shopping-basket" className='icon' /></Link>

    </header>
    

      <Outlet />
    </>
  )
}
