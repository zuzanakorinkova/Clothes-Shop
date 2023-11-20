import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { DUMMY_ITEMS } from '../../data/items'
import DummyShoe from '../../assets/dummy_shoe.png';
import styles from './Shop.module.css';
import ShippingInfo from './ShippingInfo';
import CartContext from '../../store/cart-context';

export default function SingleItem(props) {
    const params = useParams()
    const cartCtx = useContext(CartContext)

    let itemName;
    let itemPrice;

    DUMMY_ITEMS.filter(i => i.id === params.id).map((item) => {
      itemName = item.name
      itemPrice = item.price
    })
    

    const addToCartHandler = () => {
      cartCtx.addToCart({
        id: params.id,
        name: itemName,
        amount: 1,
        price: itemPrice
      })
    }
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
                <p>$ {item.price.toFixed(2)}</p>
                <p>{item.size}</p>
                <ul>
                <li>{item.description}</li>
                {item.advantages.map((advantage) => {
                  return (
                    <li>
                    {advantage}
                  </li>
                  )
                 
                })}
               
                </ul>
      
                <button className="primaryBtn" onClick={addToCartHandler}>Add to Cart</button>
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
