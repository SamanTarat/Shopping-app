import React,{ useContext } from 'react';
import { useParams , Link } from "react-router-dom";

//context
import { ProductsContext } from '../context/ProductContextProvider';

//styles
import styles from '../styles/ProductDetails.module.css'

const ProductDetails = () => {

    const params = useParams();
    const data = useContext(ProductsContext)
    const products = data[params.id - 1]

    return (
        <div className={styles.container}>
         <div className={styles.textContainer}>
           <img src={products?.image} alt='product' className={styles.image}/>
              <h3>{products?.title}</h3>
              <p className={styles.description}>{products?.description}</p>
              <p className={styles.category}><span>Category</span>:{products?.category}</p>
            <div className={styles.buttonContainer}>
                 <p className={styles.price}>{products?.price}$</p>
                 <Link to="/store">Go back to store</Link>
            </div>
          </div>
        </div>
    );
};

export default ProductDetails;