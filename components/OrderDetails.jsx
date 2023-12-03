import React, { useState } from 'react'
import styles from "../src/styles/OrderDetails.module.css"

const OrderDetails = ({total, createOrder}) => {

    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");

    const handleClick = () => {
        createOrder({customer, address, total, method: 0})
    }

  return (
        <div className={styles.DetailWrapper}>
            <div className={styles.DetailContainer}>
                <h2>You will pay $12 on delivery.</h2>
                <div className={styles.DetailItem}>
                    <label className={styles.label}>Name Surname</label>

                    <input type='text' placeholder='John Doe' onChange={(e) => setCustomer(e.target.value)}/>
                    
                </div>

                <div className={styles.DetailItem}>
                    <label className={styles.label}>Phone Number</label>

                    <input type='text' placeholder='+234 703 46 36' onChange={(e) => setCustomer(e.target.value)}/>
                    
                </div>

                <div className={styles.DetailItem}>
                    <label className={styles.label}>Address</label>

                    <textarea 
                    rows={5}
                    placeholder='10 John street' 
                    onChange={(e) => setAddress(e.target.value)}/>
                    
                </div>

                <button className={styles.pizza_btn} onClick={handleClick}>Order</button>
            </div>
        </div>
  )
}

export default OrderDetails