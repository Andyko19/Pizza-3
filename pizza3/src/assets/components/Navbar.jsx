import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  ShoppingCartIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-navbar bg-cover bg-center h-16">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Botones de navegación */}
            <div className="flex space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link
                to="/carrito"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                <span>Carrito</span>
              </Link>
              <Link
                to="/register"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <UserPlusIcon className="h-5 w-5" />
                <span>Registro</span>
              </Link>
              <Link
                to="/login"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                <span>Iniciar sesión</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
