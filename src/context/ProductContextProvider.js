import React, { useState,useEffect,createContext } from 'react';

// Api Call
import { getProducts } from '../services/api';

// Context
export const ProductsContext = createContext();

const ProductContextProvider = (props) => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
             setProducts(await getProducts());
        }

        fetchApi();
    },[])


    return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;

