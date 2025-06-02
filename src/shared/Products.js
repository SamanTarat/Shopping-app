import React, { useContext } from 'react';
import { Link } from "react-router-dom"

//functions
import { shorten, isInCart , itemCounter } from '../helper/functions';

//context 
import { cartContext } from "../context/CartContextProvider"

//icon 
import trashIcon from "../assets/icon/trash.svg"

//styles 
import styles from '../styles/Product.module.css'

const Products = ({productData}) => {

    const { state , dispatch } = useContext(cartContext)

    return (
        <div className={styles.container}>
                                <img className={styles.cardImage} src={productData.image} alt='product' style={{width: "200px"}}/>
                                <h3>{shorten(productData.title)}</h3>
                                <h3>{productData.price}$</h3>
                <div className={styles.buttonContainer}>
                        <div className={styles.linkContainer}>
                                    <Link to={`/store/${productData.id}`}>Details</Link>
                                    {itemCounter(state , productData.id) === 1 && <button onClick={()=> dispatch({payload: productData , type:"REMOVE_ITEM"})}>{<img src={trashIcon} alt='remove'/>}</button>}
                                    {itemCounter(state , productData.id) > 1 && <button  onClick={()=> dispatch({payload: productData , type:"DECREASE"})}>-</button>}
                                    <div className={styles.counter}>{itemCounter(state , productData.id)}</div>
                                    {
                                        isInCart(state , productData.id) 
                                        ? <button onClick={() => dispatch({payload: productData , type: "INCREASE"})}>+</button> 
                                        : <button onClick={() => dispatch({payload: productData , type: "ADD_ITEM"})}>Add To Cart</button>
                                    }
                        </div>
                </div>
        </div>
    );
};

export default Products;