import React from 'react'
import Logo from '../../assets/logo.svg'
import { NavLink, useLocation} from "react-router-dom";
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

export default function Header(props) {
  const location = useLocation();
  console.log(location.pathname === '/shop')

  return (
    <header>
      <nav className={styles.topnav}>
        <NavLink className={location.pathname === '/shop' ? styles.active : ""} to="/shop" aria-current="page">Shop for all</NavLink>
        <NavLink to="/"className={styles.logo} aria-current="page"> 
            <img src={Logo} alt="logo" name='logo' width="50px" />
        </NavLink>
        <HeaderCartButton onClick={props.onShowCart} />
      </nav>
    </header>
  )
}
