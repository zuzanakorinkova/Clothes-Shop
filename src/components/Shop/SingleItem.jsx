import React from 'react'
import { useParams } from 'react-router-dom'
import { DUMMY_ITEMS } from '../../data/items'
import DummyShoe from '../../assets/dummy_shoe.png';
import styles from './Shop.module.css';
import ShippingInfo from './ShippingInfo';

export default function SingleItem(props) {
    const params = useParams()
  return (
    <>
    {DUMMY_ITEMS.filter(i => i.id === params.id).map((item) => {
        return (
            <div className={styles.itemContainer}>
              <div className={styles.itemImages}>
                <div>
                  <img src={DummyShoe} alt="product image" width="100%" />
                </div>
                <div className={styles.itemImageArray}>
                  <div>
                    <img src={DummyShoe} alt="product image" width="100%"/>
                  </div>
                  <div>
                    <img src={DummyShoe} alt="product image" width="100%" />
                  </div>
                  <div>
                    <img src={DummyShoe} alt="product image" width="100%" />
                  </div>
                </div>
              </div>
              <div className={styles.itemDescription}>
                 <h2> {item.name}</h2>
                <p>{item.description}</p>
                <p>{item.size}</p>
                <ul>
                {item.advantages.map((advantage) => {
                  return (
                    <li>
                    {advantage}
                  </li>
                  )
                 
                })}
                </ul>
      
                <button className="primaryBtn">Add to Cart</button>
                <div className={styles.shippingInfo}>
                  <ShippingInfo />
                </div>
              </div>
            </div>
        )
    })
    }

    </>
  )
}
