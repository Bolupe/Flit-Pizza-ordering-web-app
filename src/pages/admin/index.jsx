// Order page
import React, { useState } from 'react';
import styles from '../../styles/Admin.module.css';
import Image from 'next/image';

const Adminpage = ({ orders, products }) => {
  const [pizzaList, setPizzaList] = useState(products || []); // Ensure products is an array
  const [orderList, setOrderList] = useState(orders || []); // Ensure orders is an array
  const status = ['preparing', 'On the way', 'delivered'];

  return (
    <div className="container-fluid">
      <div className={`${styles.admin} row`}>
        <div className={`${styles.pizza_list} col-12 col-md-6`}>
          <h3 className={styles.title}>Products</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pizzaList.map((product) => (
                <tr key={product._id}>
                  <td>
                    <Image src={product.img} alt="" width="80" height="80" />
                  </td>
                  <td>{product._id.slice(0, 6)}...</td>
                  <td>{product.title}</td>
                  <td>${product.prices[0]}</td>
                  <td>
                    <button className={styles.edit}>Edit</button>
                    <button className={styles.delete}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-12 col-md-6">
          <h3 className={styles.title}>Orders</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((order) => (
                <tr key={order._id}>
                  <td>{order._id.slice(0, 6)}...</td>
                  <td>{order.customer}</td>
                  <td>${order.total}</td>
                  <td>{order.method === 0 ? <span>cash</span> : <span>paid</span>}</td>
                  <td>{status[order.status]}</td>
                  <td>
                    <button className={styles.edit}>Next Stage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
