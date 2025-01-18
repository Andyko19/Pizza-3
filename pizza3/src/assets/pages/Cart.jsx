import React from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } = useCart();
  const { token } = useUser();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {cart.length > 0 ? (
        cart.map((pizza) => (
          <div
            key={pizza.id}
            className="flex items-center justify-between mb-4"
          >
            <img
              src={pizza.img}
              alt={pizza.name}
              className="w-16 h-16 rounded-md"
            />
            <div className="flex-1 mx-4">
              <h3 className="text-lg font-bold">{pizza.name}</h3>
              <p className="text-gray-700">${pizza.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => decreaseQuantity(pizza.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                -
              </button>
              <span className="mx-2 text-lg font-bold">{pizza.quantity}</span>
              <button
                onClick={() => increaseQuantity(pizza.id)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Tu carrito está vacío.</p>
      )}
      <div className="mt-6 p-4 bg-gray-100 rounded-md text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
      </div>
      <button
        className={`w-full py-2 px-4 rounded-md font-bold ${
          token
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!token} // Deshabilita si token es false
      >
        Pagar
      </button>
    </div>
  );
};

export default Cart;
