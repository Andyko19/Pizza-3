import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ShoppingCartIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const { total } = useCart();
  const { token, logout } = useUser();
  return (
    <div>
      <nav className="bg-navbar bg-cover bg-center h-16">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Botones de navegación */}
            <div className="flex space-x-4">
              <NavLink
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </NavLink>
              <NavLink
                to="/carrito"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                <span>Carrito</span>
              </NavLink>
              {token ? (
                <>
                  <NavLink
                    to="/prole"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <UserIcon className="h-5 w-5" />
                    <span>Perfil</span>
                  </NavLink>
                  <button
                    onClick={logout}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <ArrowRightOnRectangleIcon className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/register"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <UserPlusIcon className="h-5 w-5" />
                    <span>Registro</span>
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <ArrowRightOnRectangleIcon className="h-5 w-5" />
                    <span>Iniciar sesión</span>
                  </NavLink>
                </>
              )}
            </div>
            <div className="flex items-center space-x-2 text-gray-200 text-sm font-medium">
              <ShoppingCartIcon className="h-5 w-5" />: ${total.toFixed(2)}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
