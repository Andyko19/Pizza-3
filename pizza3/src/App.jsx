import React from "react";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
/*import Cart from "./assets/components/Cart";*/
import Footer from "./assets/components/Footer";
import { CartProvider } from "./assets/components/CartContext";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Navbar />

        <Home />
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
