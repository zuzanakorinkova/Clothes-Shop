import React from 'react'
import Logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

export default function Header(props) {
  return (
    <header className={styles.topnav}>
        <Link to="/shop">Shop for all</Link>
        <Link to="/"> 
            <img src={Logo} alt="logo" name='logo' width="50px" />
        </Link>
            <HeaderCartButton onClick={props.onShowCart} />

    </header>
  )
}
