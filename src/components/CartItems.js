import React, { useContext } from 'react';


//context
import { cartContext } from "../context/CartContextProvider";

//Icon
import remove from "../assets/icon/trash.svg"

//Functions
import { shorten } from "../helper/functions"

//styles 
import styles from '../styles/CartItems.module.css'

const CartItems = (props) => {

    const {image , price , title , quantity} = props.data;
    const {dispatch} = useContext(cartContext);


    return (
    <div >
        <div className={styles.container}>
            <img src={image} alt='ProductImage' className={styles.productImage}/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price}$</p>
            </div>
            <div className={styles.buttonContainer}>
                { 
                    quantity > 1 ? <button onClick={() => dispatch({type:"DECREASE" , payload: props.data})}>-</button> 
                    :<button onClick={() => dispatch({type:"REMOVE_ITEM" , payload: props.data})}>{<img src={remove} alt='remove'/>}</button>
                }
                <div className={styles.quantity}>{quantity}</div>
                <button onClick={() => dispatch({type:"INCREASE" , payload: props.data})}>+</button>
            </div>
        </div>     
    </div>
    );
};

export default CartItems;