import React, {useContext} from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../Modal';
import CartItem from './CartItem/CartItem';
import styles from './Cart.module.css'


export default function Cart(props) {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
      cartCtx.removeFromCart(id);
    };
    const cartItemAddHandler = (item) => {
      cartCtx.addToCart({ ...item, amount: 1 });
    };

    const cartItems = (
      // bind allows us to configure the function for the future execution with pre-configured argument
      <ul className={styles["cart-items"]}>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          );
        })}
      </ul>
    );

  return (
    <Modal onClose={props.onClose}>
    <div>
      {cartItems}
      {hasItems ? 
        <div className={styles.total}>
          <span>Total Amount</span>
          <span className={styles.price}>{totalAmount}</span>
        </div>
        :
        <div className={styles.noItems}>
          <span>No items yet</span>
          <span>{`:(`}</span>
        </div>}
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </div>
  </Modal>
  )
}
