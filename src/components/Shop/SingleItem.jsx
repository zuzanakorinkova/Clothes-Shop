import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { DUMMY_ITEMS } from '../../data/items'
import styles from './Shop.module.css';
import ShippingInfo from './ShippingInfo';
import CartContext from '../../store/cart-context';
import {motion} from "framer-motion";

export default function SingleItem() {
    const [defaultImage, setDefaultImage] = useState('')
    const params = useParams()
    const cartCtx = useContext(CartContext)

    let itemName;
    let itemPrice;
    let itemImage;

    useEffect(() => {
      DUMMY_ITEMS.filter(i => i.id === params.id).map((item) => {
        itemName = item.name
        itemPrice = item.price
        itemImage = setDefaultImage(item.images[0])
      })

    }, [DUMMY_ITEMS])

   
   console.log(defaultImage) 

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
            <div key={item.id} className={styles.itemContainer}>
              <div className={styles.itemImages}>
                <div>
                  <img src={'../' + defaultImage} alt="product image" width="100%" />
                </div>
                <div className={styles.itemImageArray}>
                  {item.images.map((img, index) => {
                    return (
                    <button key={index} onClick={() => setDefaultImage(img)}>
                      <img src={'../' + img} alt="product image" width="100%"/>
                    </button>
                    )
                  })}
                </div>
              </div>
              <div className={styles.itemDescription}>
                 <h2> {item.name}</h2>
                <p>$ {item.price.toFixed(2)}</p>
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
                <div className={styles.sizes}>
                  <p>{item.size}</p>
                  {/* External link? */}
                  <a href="#">Size guide</a>
                </div>
               
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
