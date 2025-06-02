import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


//icons
import cartIcon from "../assets/icon/shoppingCart.svg"

//context
import { cartContext } from '../context/CartContextProvider';
import Profile from './Profile';
import { loginContext } from '../context/loginContext';

//styles 
import styles from '../styles/Navbar.module.css'

const NavBar = () => {

    const {state} = useContext(cartContext);
    const {data} = useContext(loginContext)
    console.log(data)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                    {!data.username ? 
                        <div className={styles.spacing}>
                                <Link className={styles.productLink} to='/login'>Login</Link>

                                     <Link className={styles.productLink} to='/signup'>signUp</Link>

                                         <Link className={styles.productLink} to="/store">Products</Link>  
                        </div>
                                         : <Profile/>}

            
                            <div className={styles.iconContainer}>
                                <Link to="/cart"><img src={cartIcon} alt='ShoppingCart'/></Link>
                                <span>
                                    {state.counter}
                                </span>
                            </div>
            </div>
         </div>
    );
};

export default NavBar;