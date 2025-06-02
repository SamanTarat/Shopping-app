import React from "react";
import { useState,createContext } from "react";

export const loginContext = createContext();

const initialCredentials = {
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
    agree:false,}

const LoginContextProvider = ({children}) => {

    const [loginCredentials, setLoginCredentials] = useState(initialCredentials)

    return (
        <loginContext.Provider value={{data :loginCredentials, setData :setLoginCredentials , initial: initialCredentials}}>
            {children}
        </loginContext.Provider>
    );

};

export default LoginContextProvider;