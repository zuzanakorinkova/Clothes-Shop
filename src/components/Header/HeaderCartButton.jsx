import React, {useState, useContext, useEffect} from 'react'
import CartContext from '../../store/cart-context';
import Basket from '../../assets/basket.svg';
import styles from './Header.module.css';


export default function HeaderCartButton(props) {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext)

    const {items} = cartCtx

    const numberOfCartItems = items.reduce((curNumber, items) => {
      return curNumber + items.amount
    }, 0)


useEffect(() => {

  if(items.length === 0) {
    return;
  }
  setBtnIsHighlighted(true)

  const timer = setTimeout(() => {
    setBtnIsHighlighted(false);
  }, 300)

  return () => {
    clearTimeout(timer);
  }

}, [items])

const btnClasses = `${styles.basketBtn} ${btnIsHighlighted ? styles.basketBump : ""}`;


  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span>
        <img src={Basket} alt="shopping-basket" className={styles.basketIcon} />
      </span>
      <span className={styles.basketBadge}>{numberOfCartItems}</span>
      <span className={styles.basketBump}></span>
    </button>
  )
}
