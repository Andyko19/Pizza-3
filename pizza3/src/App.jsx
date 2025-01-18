import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";
import Cart from "./assets/pages/Cart";
import Pizza from "./assets/pages/Pizza";
import Prole from "./assets/components/Prole";
import NotFound from "./assets/components/NotFound";
import Footer from "./assets/components/Footer";
import ProtectedRoute from "./assets/routes/ProctectedRoute";
import PublicRoute from "./assets/routes/PublicRoute";
import { CartProvider } from "./assets/context/CartProvider";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CartProvider>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Cart />} />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route
              path="/prole"
              element={
                <ProtectedRoute>
                  <Prole />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} /> {/* Ruta para 404 */}
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
