import React from 'react'
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.ftwrapper}>
        <div className='container-fluid'>
            <div className='row py-5'>
                <div className={`${styles.ft_col} col-12 col-md-3`}>
                    <h3>INFORMATION</h3>

                    <ul className={styles.info}>
                          <li>Home</li>
                          <li>Blog</li>
                          <li>About Us</li>
                          <li>Menu</li>
                          <li>Contact Us</li>
                    </ul>
                </div>

                <div className={`${styles.ft_col} col-12 col-md-3`}>
                    <h3>TOP ITEMS</h3>

                    <ul className={styles.info}>
                          <li>Pepperoni</li>
                          <li>Swiss Mushroom</li>
                          <li>Barbecue Chicken</li>
                          <li>Vegetarian</li>
                          <li>Ham & Cheese</li>
                    </ul>
                </div>

                <div className={`${styles.ft_col} col-12 col-md-3`}>
                    <h3>OTHERS</h3>

                    <ul className={styles.info}>
                          <li>Checkout</li>
                          <li>Cart</li>
                          <li>Product</li>
                          <li>Locations</li>
                          <li>Legal</li>
                    </ul>
                </div>

                <div className={`${styles.ft_col} col-12 col-md-3`}>
                    <h3>SOCIAL MEDIA</h3>

                    <div className={styles.social}>
                      <i class={`${styles.facebook} fa-brands fa-facebook-f`}></i>
                      <i class={`${styles.pinterest} fa-brands fa-pinterest-p`}></i>
                      <i class={`${styles.twitter} fa-brands fa-twitter`}></i>
                      <i class={`${styles.instagram} fa-brands fa-instagram`}></i>
                    </div>

                    <p>Signup and get exclusive offers and coupon codes</p>

                    <button className={`${styles.pizza_btn} my-3`}>
                      SIGN UP
                  </button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer