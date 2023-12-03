import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Product.module.css'
import { addProduct } from '../../../Redux/cartSlice'
import { useDispatch } from 'react-redux'

const SingleProducts = ({pizza}) => {

  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1)
  const [extras, setExtras] = useState([])

  const dispatch = useDispatch();

  const changePrice = (number) => {
      setPrice(price + number)
  }

  const handleSize = (sizeIndex) => {
      const difference = pizza.prices[sizeIndex] - pizza.prices[size]
      setSize(sizeIndex)
      changePrice(difference)
  }

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if(checked){
        changePrice(option.price);
        setExtras(prev => [...prev, option])
    }else{
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id))
    }
  }

const handleClick = () => {
  dispatch(addProduct({...pizza, extras, price, quantity}))
}

  return (
    <div className='container-fluid'>
        <div className={`${styles.single_product} row`}>
              <div className='col-12 col-md-6'>
                  <div className={styles.single_itemOne}>
                    <Image src={pizza.img} width={600} height={600} alt=''/>
                  </div>
              </div>
              <div className='col-12 col-md-6 mt-5'>
                  <div className={styles.single_itemTwo}>
                    <h1>{pizza.title}</h1>
                   <p className={`${styles.singPrice}`}>${price} &#160;&#160;
                   <span className={`${styles.review}`}>8 Reviews</span></p> 

                    <p>{pizza.desc}</p>


                    <p>Category: <span>Chicken, Launch, Pizza, Burger</span></p>
                    <p>Tags: <span>Healthy, Organic, Chicken, Sauce</span></p>
                  </div>

                  {/* Choose Pizza Size*/}
                  <div className={`${styles.sizes_container} mt-5`}>
                        <h5>Choose Pizza Size</h5>
                        <div className={styles.sizes}>
                            <div className={styles.size} onClick={() => handleSize(0)}>
                                <Image src="/images/Pizza-icon.PNG" alt='' width={40} height={40}/>
                                <span className={styles.number}>Small</span>
                            </div> 
                            <div className={styles.size} onClick={() => handleSize(1)}>
                                <Image src="/images/Pizza-icon.PNG" alt='' width={60} height={60}/>
                                <span className={styles.number}>Medium</span>
                            </div> 
                            <div className={styles.size} onClick={() => handleSize(2)}>
                                <Image src="/images/Pizza-icon.PNG" alt='' width={80} height={80}/>
                                <span className={styles.number}>Large</span>
                            </div>
                        </div> 
                  </div>

                  {/* Choose additional ingredient*/}
                  <div className={`${styles.ingredients_container} mt-5`}>
                        <h5>Choose additional ingredients</h5>
                        <div className={styles.ingredients_wrap}>
                            {pizza.extraOptions.map((option)=> (
                                <div className={styles.ingredients} key={option._id}>
                                <input 
                                className={styles.checkbox}
                                type='checkbox' 
                                id={option.text} 
                                name={option.text}
                                onChange={(e)=> handleChange(e, option)}/>
                                <label htmlFor='double'>{option.text}</label>
                              </div>
                            ))}           
                        </div>
                  </div>


                  <div className={`${styles.select} d-flex mt-5`}>
                         <input type='number' defaultValue={1} onChange={(e) => setQuantity(e.target.value)}/>

                          <button onClick={handleClick} class={`${styles.filter_btn} btn`}>
                                ADD TO CART
                          </button>

                          <i class="fa-regular fa-heart"></i>
                  </div>

                  

              </div>
        </div>
    </div>
  )
}


{/* Fetch single product using the id */}
export const getServerSideProps = async ({params}) => {
  // const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
  console.log('Response:', res.data);
  return{
    props:{
      pizza: res.data
    }
  }
}

export default SingleProducts