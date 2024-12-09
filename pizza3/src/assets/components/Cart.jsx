import React, { useState } from "react";
import { pizzaCart } from "../../pizzas"; // Lista inicial de pizzas en el carrito.

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart); // Estado para las pizzas en el carrito.

  // Función para aumentar la cantidad de una pizza en el carrito
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  // Función para disminuir la cantidad de una pizza en el carrito
  const decreaseQuantity = (id) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((pizza) =>
            pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
          )
          .filter((pizza) => pizza.quantity > 0) // Eliminar si la cantidad es 0
    );
  };

  // Calcular el total a pagar
  const total = cart.reduce(
    (sum, pizza) => sum + pizza.price * pizza.quantity,
    0
  );

  // Función para manejar el clic en "Total a Pagar"
  const handleCheckout = () => {
    alert(`El total a pagar es: $${total.toFixed(2)}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>

      {/* Listado de pizzas en el carrito */}
      {cart.length > 0 ? (
        cart.map((pizza) => (
          <div
            key={pizza.id}
            className="flex items-center justify-between mb-4"
          >
            <img
              src={pizza.image}
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

      {/* Total a pagar */}
      <div className="mt-6 p-4 bg-gray-100 rounded-md text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-2"
          disabled={total === 0} // Deshabilitar si no hay pizzas
        >
          Total a Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;
