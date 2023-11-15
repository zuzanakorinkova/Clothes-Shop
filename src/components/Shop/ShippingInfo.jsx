import React from 'react'
import styles from './Shop.module.css'

export default function ShippingInfo() {
  return (
    <>
        <h3 className={styles.shippingTitle}>We offer complimentary express shipping.</h3>
        <span>Free returns are available worldwide. If your item is eligible for return, you have 30 days from the date you receive your order to follow this procedure</span>
    </>
  )
}
