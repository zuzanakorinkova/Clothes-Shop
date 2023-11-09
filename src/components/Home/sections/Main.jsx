import React from 'react';
import TopImg from '../../../assets/topimg.jpg';
import SmallImg from '../../../assets/topimg_sm.jpg'
import styles from '../Home.module.css'

export default function Main() {
  return (
    <div>
          <div className={styles.topimages}>
              <h1 className={styles.companyName}>Core.</h1>
              <img className={styles.large} src={TopImg} alt="contemporary-art" />
              <img className={styles.small} src={SmallImg} alt="ema_chamb" />
          </div>
        <div>

        </div>
    </div>

  )
}
