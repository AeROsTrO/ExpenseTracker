import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';
//initial state
const initialState = {
    transactions: [
        //negative means expense, +ve means income
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (<GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
        {/* //accesible to any components that need it */}
        {children}
    </GlobalContext.Provider>);
}