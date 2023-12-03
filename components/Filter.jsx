import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Product.module.css'

const Filter = () => {
  return (
    <div>
            <div className={`${styles.filter_sorting} col-12 col-md-12`}>
                    <div className='row'>
                          <div className='col-12 col-md-6'>
                            <button class={`${styles.filter_btn} btn`} type="button" data-bs-toggle="offcanvas" data-bs-target="#pizzaFilter" aria-controls="pizzaFilter">
                                <Image src='/images/filter.png' width={18} height={18} alt="filter"/>  Filter
                                </button>

                                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="pizzaFilter" aria-labelledby="pizzaFilterLabel">
                                    <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="pizzaFilterLabel">Filter By Price</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <div>
                                            <input type="range" class="form-range" id="customRange1"/>
                                            <p>Price: $40 - $74</p>
                                            <button class={`${styles.filter_btn} btn`} type="button" data-bs-toggle="offcanvas" data-bs-target="#pizzaFilter" aria-controls="pizzaFilter">
                                                Filter
                                            </button>
                                        </div>

                                        <div className={`${styles.filterRes} mt-5`}>
                                            <h5>Top Product</h5>

                                            <div className={`${styles.filterRes_wrap} mt-3`}>
                                                <div className={styles.res_itemOne}>
                                                    <Image src="/images/pizza-1.png" alt="pizza" width={130} height={130}/>
                                                </div>
                                                <div className={styles.res_itemTwo}>
                                                    <p>Shrimp pizza</p>
                                                    <p>$35.00</p>
                                                </div>
                                            </div>

                                            <div className={`${styles.filterRes_wrap} mt-3`}>
                                                <div className={styles.res_itemOne}>
                                                    <Image src="/images/pizza-1.png" alt="pizza" width={130} height={130}/>
                                                </div>
                                                <div className={styles.res_itemTwo}>
                                                    <p>Shrimp pizza</p>
                                                    <p>$35.00</p>
                                                </div>
                                            </div>

                                            <div className={`${styles.filterRes_wrap} mt-3`}>
                                                <div className={styles.res_itemOne}>
                                                    <Image src="/images/pizza-1.png" alt="pizza" width={130} height={130}/>
                                                </div>
                                                <div className={styles.res_itemTwo}>
                                                    <p>Shrimp pizza</p>
                                                    <p>$35.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                          </div>
                          <div className='col-12 col-md-6'>
                                <div className={styles.sortingRes}>
                                    <p>Showing all 9 results</p>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Default Sorting</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                          </div>
                    </div>
             </div>
    </div>
  )
}

export default Filter