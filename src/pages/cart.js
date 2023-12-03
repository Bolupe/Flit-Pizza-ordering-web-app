import React, { useState, useEffect } from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { reset } from '../../Redux/cartSlice';

//Paypal integration
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import OrderDetails from '../../components/OrderDetails';

const Cart = () => {

const dispatch = useDispatch();
const cart = useSelector((state) => state.cart);

const [open, setOpen] = useState(false)
const [cash, setCash] = useState(false)

const amount = cart.total;
const currency = "USD";
const style = {"layout":"vertical"};

const router = useRouter()

//Paypal payment option integration
  const ButtonWrapper = ({ currency, showSpinner }) => {
  
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, dispatch, options, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

//End of Paypal payment option integration


  return (
    <div className={`${styles.add_container} container-fluid`}>
        <div className={styles.table}>
            <table class="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extra</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>

                {cart.products.map((product)=> (
                        <tr key={product._id}>
                        <td>
                            <Image src={product.img} alt="" width={100} height={100} />
                        </td>
                        <td>
                            <span className={styles.name}>{product.title}</span>
                        </td>
                        <td>
                            <span className={styles.extra}>
                                {product.extras.map((extra)=> (
                                    <span key={extra._id}>{extra.text}</span>
                                ))}
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>
                                ${product.price}
                            </span>
                        </td>
                        <td>
                            <span className={styles.quantity}>
                                {product.quantity}
                            </span>
                        </td>
                        <td>
                            <span className={styles.total}>
                                ${product.price * product.quantity}
                            </span>
                        </td>
                    </tr>
                ))}
                
                </tbody>
            </table>
        </div>

        <div className={styles.addToCart}>
                <div className={styles.addToCart_wrap}>
                    <h2 className={styles.title}>CART TOTAL</h2>

                    <div className={styles.total_text}>
                    <b className={`${styles.total_title}`}>Subtotal:</b> ${cart.total}
                    </div>

                    <div className={styles.total_text}>
                    <b className={`${styles.total_title}`}>Discount:</b> $79.60
                    </div>

                    <div className={styles.total_text}>
                    <b className={`${styles.total_title}`}>Total:</b> ${cart.total}
                    </div>


                    {open ? (
                        <div className={styles.payment}>
                            <button className={`${styles.cash_payment}`} onClick={()=> setCash(true)}>
                                CASH ON DELIVERY
                            </button>

                            {/* Paypal button*/}
                            <PayPalScriptProvider
                        options={{
                            // "clientId": "add a valid client id here",
                            components: "buttons",
                            currency: "USD",
                            "disable-funding": "credit,card,p24"
                        }}
                        >
                            <ButtonWrapper currency={currency} showSpinner={false}/>
                        </PayPalScriptProvider>
                        </div>
                    ) : 
                    
                    <button onClick={()=> setOpen(true)} className={`${styles.button} pizza_btn mt-5`}>CHECKOUT NOW!</button>
                    
                    }
                    
                </div>
                {cash && (
                    <OrderDetails total={cart.total} createOrder={createOrder}/>
                ) }
                
        </div>
    </div>
  )
}

export default Cart