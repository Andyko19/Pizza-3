import React, { useState } from "react";
import { pizzas } from "../../pizzas";
import CardPizza from "./Cardpizza";

const Home = () => {
  const [pizzaQuantities, setPizzaQuantities] = useState(
    pizzas.map((pizza) => ({ ...pizza, quantity: 0 }))
  );

  const increaseQuantity = (id) => {
    setPizzaQuantities((prev) =>
      prev.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  const decreaseQuantity = (id) => {
    setPizzaQuantities((prev) =>
      prev.map((pizza) =>
        pizza.id === id && pizza.quantity > 0
          ? { ...pizza, quantity: pizza.quantity - 1 }
          : pizza
      )
    );
  };

  const total = pizzaQuantities.reduce(
    (acc, pizza) => acc + pizza.quantity * pizza.price,
    0
  );

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pizzaQuantities.map((pizza) => (
          <CardPizza
            key={pizza.id}
            pizza={pizza}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-md text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Home;
