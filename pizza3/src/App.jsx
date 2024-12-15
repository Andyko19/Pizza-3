import React from "react";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import Cart from "./assets/components/Cart";
import { CartProvider } from "./assets/components/CartContext";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Navbar />

        <Home />
        <Cart />
      </CartProvider>
    </div>
  );
};

export default App;
