import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { DUMMY_ITEMS } from '../../data/items'
import styles from './Shop.module.css';
import ShippingInfo from './ShippingInfo';
import CartContext from '../../store/cart-context';

export default function SingleItem() {
    const [defaultImage, setDefaultImage] = useState('')
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const params = useParams()
    const cartCtx = useContext(CartContext)

  
    useEffect(() => {
      DUMMY_ITEMS.filter(i => i.id === params.id).map((item) => {
        setName(item.name);
        setPrice(item.price);
        setDefaultImage(item.images[0])
       
      })

    }, [DUMMY_ITEMS])




    const addToCartHandler = () => {
      cartCtx.addToCart({
        id: params.id,
        name: name,
        amount: 1,
        price: price
      })
    }
  return (
    <>
    {DUMMY_ITEMS.filter(i => i.id === params.id).map((item) => {
        return (
            <div key={item.id} className={styles.itemContainer}>
              <div className={styles.itemImages}>
                <div>
                  <img className={styles.defaultImage} src={defaultImage} alt="product image" />
                </div>
                <div className={styles.itemImageArray}>
                  {item.images.map((img, index) => {
                    return (
                    <button key={index} onClick={() => setDefaultImage(img)}>
                      <img src={img} alt="product image" width="100%"/>
                    </button>
                    )
                  })}
                </div>
              </div>
              <div className={styles.itemDescription}>
                <div>
                  <h2> {item.name}</h2>
                  <p>$ {item.price.toFixed(2)}</p>
                </div>
              
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
                <div>
                  <div className={styles.sizes}>
                    <p>{item.size}</p>
                    {/* TODO: Modal */}
                    <a href="#">Size guide</a>
                  </div>
                
                  <button className="primaryBtn" onClick={addToCartHandler}>Add to Cart</button>
                </div>
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
