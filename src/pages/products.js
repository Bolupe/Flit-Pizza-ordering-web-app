import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/Product.module.css';
import styles from '../styles/Homepage.module.css';
import Filter from '../../components/Filter';
import Add from '../../components/Add';
import AddButton from '../../components/AddButton';

const Products = ({ pizzaList, admin }) => {
  const [close, setClose] = useState(true);

  // Check if pizzaList is not defined or not an array
  if (!pizzaList || !Array.isArray(pizzaList) || pizzaList.length === 0) {
    return (
      <div className='container-fluid'>
        <p className={styles.noPizzas}>We are sorry, but no pizzas are available.</p>
      </div>
    );
  }

  return (
    <div className='container-fluid'>
      {/* Pizza page*/}
      <div className={`${style.product} row`}>
        {/* filter/sorting */}
        <Filter />

        {/* Admin create pizza button*/}
        {admin && <AddButton setClose={setClose} />}

        {!close && <Add setClose={setClose} />}

        {pizzaList.map((pizza) => (
          <div key={pizza._id} className={`${styles.dishes_card} col-12 col-md-4`}>
            <div className={styles.card}>
              <Link href={`/product/${pizza._id}`}>
                <Image src={pizza.img} alt="..." width="300" height="300" />
              </Link>
              <div>
                <h5>
                  {pizza.title} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <span className={styles.pizza_price}>$65.00</span>
                </h5>
                <div className={`${styles.rating} py-3`}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>{pizza.desc}</p>
                <Link href={`/product/${pizza._id}`}>
                  <button className={`${styles.pizza_btn} my-3`}>
                    <i className="fa-solid fa-cart-shopping"></i> &nbsp;
                    ORDER NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;