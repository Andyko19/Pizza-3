import React, { useState } from "react";
import Home from "./Home";
import Cart from "./Cart";
import Register from "./Register";
import Login from "./Login";
import {
  HomeIcon,
  ShoppingCartIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [view, setView] = useState("home"); // Estado para cambiar entre las vistas

  return (
    <div>
      <nav className="bg-navbar bg-cover bg-center h-16">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Botones de navegación */}
            <div className="flex space-x-4">
              <button
                onClick={() => setView("home")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  view === "home"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </button>
              <button
                onClick={() => setView("cart")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  view === "cart"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <ShoppingCartIcon className="h-5 w-5" />
                <span>Carrito</span>
              </button>
              <button
                onClick={() => setView("register")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  view === "register"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <UserPlusIcon className="h-5 w-5" />
                <span>Registro</span>
              </button>
              <button
                onClick={() => setView("login")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  view === "login"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                <span>Iniciar sesión</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Renderizado dinámico basado en la vista seleccionada */}
      <div className="p-6">
        {view === "home" && <Home />}
        {view === "cart" && <Cart />}
        {view === "register" && <Register />}
        {view === "login" && <Login />}
      </div>
    </div>
  );
};

export default Navbar;
