import React from "react";

const CardPizza = ({ pizza, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img
        src={pizza.image}
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
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => decreaseQuantity(pizza.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
          -
        </button>
        <span className="text-lg font-bold">{pizza.quantity}</span>
        <button
          onClick={() => increaseQuantity(pizza.id)}
          className="bg-green-500 text-white px-3 py-1 rounded-md"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
