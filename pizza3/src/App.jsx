import React from "react";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import Cart from "./assets/components/Cart";
// import Register from "./components/Register";
// import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Cambiar entre Home y Cart según el desafío */}
      <Home />
      {/* <Cart /> */}
    </div>
  );
};

export default App;
