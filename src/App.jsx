import React, {useState} from "react";
import Router from "./components/Router";
import Footer from "./components/Footer";
import CartProvider from "./store/CartProvider";

function App() {
    return (
        <CartProvider>
            <Router  />
            <Footer />
       </CartProvider>
       
    )
}

export default App;
