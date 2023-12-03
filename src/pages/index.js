import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Homepage.module.css'
import PizzaList from '../../components/pizzaList'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({pizzaList}) {
  return (
    <>
      <div className='container-fluid'>
          <div className={`${styles.home} row`}>
            
              <div className={`${styles.pizza_home} col-12 col-md-6`}>
                  <h1>
                    Handmade, With an Extra Pinch of <span>Love</span>
                  </h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Link href="/products" passHref>
                <button className={`${styles.pizza_btn} my-3`}>
                  <i className="fa-solid fa-cart-shopping"></i> &nbsp; ORDER NOW
                </button>
                </Link>
              </div>
              <div className='col-12 col-md-6'>
                  <Image className={styles.pizza_main} src="/images/pizza-banner-img.png" alt='' width="450" height="450"/>
                  <div className={styles.onion}>
                      <Image src="/images/pizza-onion.png" alt='' width="100" height="90"/>
                  </div>
                    <div className={styles.pizza_banner}>
                      <Image src="/images/pizza-banner-img-bottom.png" alt='' width="200" height="200"/>
                    </div>
              </div>
          </div>

          {/* Daily fresh and tasty*/}
          <div className='row'>
              <div className='col-12 col-md-4'>
                    <Image src="/images/pizza-daily-fresh.png" alt='' width="400" height="400"/>
              </div>
              <div className='col-12 col-md-8'>
                  <div className={styles.fresh_tasty}>
                      <div className={styles.daily_fresh}>
                        <h5>Daily fresh and <br/> always tasty</h5>
                        <p>
                          There are many variations of passages of Lorem 
                          Ipsum available, but the majority haved
                        </p>
                      </div>
                      <div className={styles.vacter}>
                          <Image src="/images/pizza-daily-fresh-vacter.png" alt='' width={90} height={90}/>
                      </div>
                  </div>
              </div>
          </div>

          {/* PizzaList*/}
         <PizzaList pizzaList={pizzaList}/>



          {/* Our strength */}
          <div className={`${styles.strength} row`}>
                <div className={`${styles.section_tag} col-12 col-md-6`}>
                    <h6 className={styles.outline}>Our Strength </h6>
                    <h4>Why We Are The Best?</h4>
                </div>

              <div className={`${styles.dishes_strength} col-12 col-md-6`}>
                    <Image src="/images/pizza-strength-vacter.png" alt='' width={250} height={200}/>
              </div>

              <div className={`${styles.foods} col-12 col-md-3`}>
                    <Image src="/images/all-kinds-of-foods.png" alt='' width={34} height={40}/>
                    <h4>All Kinds of Foods</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type setting industry.
                    </p>
              </div>

              <div className={`${styles.foods} col-12 col-md-3`}>
                    <Image src="/images/fresh-foods.png" alt='' width={34} height={40}/>
                    <h4>All Kinds of Foods</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type setting industry.
                    </p>
              </div>

              <div className={`${styles.foods} col-12 col-md-3`}>
                    <Image src="/images/best-taste.png" alt='' width={34} height={40}/>
                    <h4>All Kinds of Foods</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type setting industry.
                    </p>
              </div>

              <div className={`${styles.foods} col-12 col-md-3`}>
                    <Image src="/images/on-time-delivery.png" alt='' width={34} height={40}/>
                    <h4>All Kinds of Foods</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
              </div>
          </div>

          {/* Client Testimonials*/}
          <div className='row'>
            {/* section-outline*/}
              <div className={`${styles.section_tag} col-12 col-md-12 mt-4`}>
                    <Image src="/images/leaf.png" alt="..." width={100} height={100}/>  
                    <h6 className={styles.outline}>Customer Feedback</h6>
                    <h4>Client Testimonials</h4>
                </div>
               <div className={`${styles.testimonials} col-12 col-md-3 text-center`}>
                   <div className={styles.test_wrap}>
                    <Image src="/images/client-1.jpg" alt="..." width={100} height={100}/>
                    <div className='text-center'>
                      <h5 className='my-3'>Takar Bowa</h5>
                      <p>Lorem ipsum is simply dummy text of the print 
                        book. it has survived not only five
                        centuries, but also the leap
                      </p>
                        
                    </div>
                  </div>
              </div>

              <div className={`${styles.testimonials} col-12 col-md-3 text-center`}>
                   <div className={styles.test_wrap}>
                    <Image src="/images/client-2.jpg" alt="..." width={100} height={100}/>
                    <div className='text-center'>
                       <h5 className='my-3'>Takar Bowa</h5>
                      <p>Lorem ipsum is simply dummy text of the print 
                        book. it has survived not only five
                        centuries, but also the leap
                      </p>
                        
                    </div>
                  </div>
              </div>

              <div className={`${styles.testimonials} col-12 col-md-3 text-center`}>
                   <div className={styles.test_wrap}>
                    <Image src="/images/client-3.jpg" alt="..." width={100} height={100}/>
                    <div className='text-center'>
                       <h5 className='my-3'>Takar Bowa</h5>
                      <p>Lorem ipsum is simply dummy text of the print 
                        book. it has survived not only five
                        centuries, but also the leap
                      </p>
                        
                    </div>
                  </div>
              </div>

              
              <div className={`${styles.testimonials} col-12 col-md-3 text-center`}>
                   <div className={styles.test_wrap}>
                    <Image src="/images/client-4.jpg" alt="..." width={100} height={100}/>
                    <div className='text-center'>
                       <h5 className='my-3'>Takar Bowa</h5>
                      <p>Lorem ipsum is simply dummy text of the print 
                        book. it has survived not only five
                        centuries, but also the leap
                      </p>
                        
                    </div>
                  </div>
              </div> 

          </div>
      </div>
        
    </>
  )
}

