import React from "react";
import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img
        src={pizza.img}
        alt={pizza.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{pizza.name}</h2>
      <p className="text-gray-700">${pizza.price.toFixed(2)}</p>
      <ul className="mt-2">
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-600 text-sm">
            - {ingredient}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center">
        {/* Botón "Ver más" */}
        <Link
          to={`/pizza/${pizza.id}`}
          className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-400"
        >
          Ver más
        </Link>
        {/* Botón "Agregar al carrito" */}
        <button
          onClick={() => addToCart(pizza)}
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
