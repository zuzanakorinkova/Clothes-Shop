import { DUMMY_ITEMS } from '../../data/items';
import { DUMMY_COLLECTIONS } from '../../data/collections';
import CardListItem from './CardListItem';
import styles from './Shop.module.css';


export default function AllItems() {

  return (
    <div>
      {
        DUMMY_COLLECTIONS.map((collection) => {
          return (
          <div key={collection.id}>
             
            <div className={styles.collectionContainer}>
              <div> 
                <h2>{collection.name}</h2>
              </div>
              <div>
                <img src={`../ ${collection.thumbnail}`} alt="thumbnail" width={50} />
              </div>
            </div>
            <ul className={styles.cardListContainer}>
              {DUMMY_ITEMS.filter(i => i.collection === collection.id).map((items) => {
              return(
                  <CardListItem key={items.id} items={items} />
              )})}
              </ul>
          </div>
          )
     
        })
      }
    </div>
  )
}
