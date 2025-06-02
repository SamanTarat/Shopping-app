import React from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Route , Routes , Navigate } from "react-router-dom"
import Store from "./components/Store";
import ProductContextProvider from "./context/ProductContextProvider";
import ProductDetails from "./components/ProductDetails";
import CartContextProvider from "./context/CartContextProvider";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import LoginContextProvider from "./context/loginContext";


function App() {
  return (
    <>
    <ProductContextProvider>
     <CartContextProvider>
      <LoginContextProvider>
       <NavBar />
        <Routes>
         <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
           </Routes>
            <Routes>
           <Route path="/" element={<Navigate to="/store"/>}/>
          <Route path="/store" element={<Store />}/>
         <Route path="/store/:id" element={<ProductDetails />}/>
        <Route path="/cart" element={<Cart />}/>
       </Routes>
      </LoginContextProvider>
     </CartContextProvider>
    </ProductContextProvider>
    </>
  );
}

export default App;