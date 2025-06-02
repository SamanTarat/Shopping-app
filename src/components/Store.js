import React,{ useContext} from 'react';

//context
import { ProductsContext } from "../context/ProductContextProvider"

//components
import Products from '../shared/Products';

// styles 
import styles from '../styles/Store.module.css'

const Store = () => {

    const products = useContext(ProductsContext)
    
    return (
        <div className={styles.container}>
            {
                products.map(product => <Products key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;