import React , { useReducer, createContext } from 'react';

const initialState = {
    selectedItems : [],
    counter : 0,
    totalPrice :0,
    checkout : false,
}


const getShoppingItems = items => {
    const counter = items.reduce((counter , product) => counter + product.quantity,0 );
    const totalPrice = items.reduce((total , product) => total + product.quantity * product.price,0).toFixed(2);
    return {counter , totalPrice};
}

export const cartContext = createContext();


const cartReducer = (state , action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            if (!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity : 1,
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...getShoppingItems(state.selectedItems),
                checkout:false,
            }

        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter( item => item.id !== action.payload.id )
            return {
                ...state,
                selectedItems : [...newSelectedItems],
                ...getShoppingItems(newSelectedItems)
            }

        case "INCREASE":
                const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
                state.selectedItems[indexI].quantity++;
                return {
                    ...state,
                    ...getShoppingItems(state.selectedItems)
                }
        case "DECREASE":
                const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
                state.selectedItems[indexD].quantity--;
                return {
                    ...state,
                    ...getShoppingItems(state.selectedItems)
    
                }

        case "CHECKOUT": 
              return {
                selectedItems : [],
                counter : 0,
                totalPrice :0 ,
                checkout : true,
            }

        case "CLEAR": 
             return {
                selectedItems : [],
                counter : 0,
                totalPrice :0 ,
                checkout : false,
            }

        default:
            return state;
    }
}

const CartContextProvider = ({children}) => {

    const [ state , dispatch ] = useReducer(cartReducer , initialState)

    return (
        <cartContext.Provider value={{state , dispatch}}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;