import React from 'react'
import { Link } from 'react-router-dom'
import DummyShoe from '../../assets/dummy_shoe.png'
import styles from './Shop.module.css';

export default function CardListItem({items}) {
  return (
        <li className={styles.cardList}>
          
            <Link to={`/shop/${items.id}`}>
              <img src={DummyShoe} alt="product image" />
              <h4>{items.name}</h4>
              <p>{items.price}</p>
            </Link>
        </li>
  )
}
