import React from "react";
import { useCart } from "../context/CartContext";

const CartComponent = () => {
  const { cart, addToCart, increaseQuantity, decreaseQuantity, total } =
    useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default CartComponent;
