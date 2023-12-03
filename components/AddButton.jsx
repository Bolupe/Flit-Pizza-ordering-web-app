import styles from "../src/styles/Add.module.css";
import React, { useState } from 'react'

function AddButton({setClose}) {

    const [files, setFiles] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extra, setExtra] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices); 
    }

    const handleExtraInput = (e) => {
        setExtra({...extra, [e.target.name]: e.target.value})
    }

    const handleExtra = (e) => {
        setExtraOptions((prev)=> [...prev, extra])
    }


  return (
    <div>

        <button type="button" class={`${styles.add_btn} btn`} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"> Add New Pizza</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Pizza</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                <div class="mb-3">
                    <label for="upload_img" class="col-form-label">Choose Pizza Image</label>
                    <input 
                    type="file" 
                    class="form-control" 
                    id="upload_img"
                    onChange={(e) => setFiles(e.target.files[0])}/>
                </div>
                <div class="mb-3">
                    <label for="pizza-title" class="col-form-label">Pizza Title</label>
                    <input type="text" 
                    class="form-control" 
                    id="pizza-title"
                    onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="desc" class="col-form-label">Pizza Description</label>
                    <textarea 
                    class="form-control" 
                    id="desc"
                    onChange={(e)=> setDesc(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <div className={`${styles.sizes} mb-3`}>
                        <label for="price_one" class="col-form-label">Pizza Prices</label>
                        <input type="number" 
                        class="form-control" 
                        id="price_one"
                        placeholder="Small"
                        onChange={(e)=> changePrice(e, 0)}/>
                    </div>

                    <div className={`${styles.sizes} mb-3`}>
                        <input type="number" 
                        class="form-control" 
                        id="price_one"
                        placeholder="Medium"
                        onChange={(e)=> changePrice(e, 1)}/>
                    </div>

                    <div className={`${styles.sizes} mb-3`}>
                        <input type="number" 
                        class="form-control" 
                        id="price_one"
                        placeholder="Large"
                        onChange={(e)=> changePrice(e, 2)}/>
                    </div>
                </div>

                    <div class="mb-3">
                        <div className={`${styles.sizes} mb-3`}>
                            <label class="col-form-label">Extra</label>
                            <input type="text" 
                            class="form-control"
                            name="text"
                            placeholder="Item"
                            onChange={handleExtraInput}/>
                        </div>

                        <div className={`${styles.sizes} mb-3`}>
                            <input type="number" 
                            class="form-control"
                            name="price"
                            placeholder="Price"
                            onChange={handleExtraInput}/>
                        </div>
                        <button type="button" className="btn" onClick={handleExtra}>Add</button>
                    </div>
                    <div className="mb-3">
                        {extraOptions.map((option)=> (
                            <span key={option.text}>{option.text}</span>
                        ))}
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" onClick={handleCreate} class="btn btn-primary">Create Pizza</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    
  )
}

export default AddButton