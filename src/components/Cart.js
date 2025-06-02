import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { popUp } from '../functions/popUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Context
import { cartContext } from "../context/CartContextProvider";

//Components
import CartItems from './CartItems';

//styles
import styles1 from '../styles/ShopCart.module.css'

const Cart = () => {
    
    
    const {state , dispatch} = useContext(cartContext);
    
    const checkOutHandler = ()=> {
        dispatch({type: "CHECKOUT"});
        popUp('success', 'Checked out successfully')
    }
    
    return (
        <div className={styles1.container}>
        <div className={styles1.cartContainer}>
            {state.selectedItems.map(item => <CartItems key={item.id} data={item}/>)}
        </div>
        {
            state.counter > 0 && 
            <div className={styles1.payments}>
                <p><span>Total Items :</span>{state.counter}</p>
                <p><span>Total Price :</span>{state.totalPrice}$</p>
                <div className={styles1.buttonContainer}>
                    <button onClick={checkOutHandler} className={styles1.checkout}>Check Out</button>
                    <button onClick={()=> {dispatch({type:"CLEAR"})}} className={styles1.clear}>Clear</button>
                </div>
            </div>
        }
        {
            state.counter === 0 && !state.checkout &&
            <div className={styles1.complete}>
                <h3>Cart Has Been Cleared.</h3>
                <Link to='/store'>Want to Buy ?</Link>
            </div>
        }
        {   
            state.checkout && 
            <div className={styles1.complete}>
                <h3>Checked Out Successfully !</h3>
                <Link to='/store'>Buy More</Link>
            </div>
        }
        <ToastContainer />
    </div>
    )
};

export default Cart;