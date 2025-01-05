import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams(); // Obtener el ID de la pizza desde la URL
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener la pizza");
        }
        const data = await response.json();
        setPizza(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al consumir la API:", error);
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) {
    return <p>Cargando pizza...</p>;
  }

  if (!pizza) {
    return <p>No se encontró la pizza.</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <img
        src={pizza.img}
        alt={pizza.name}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold mt-4">{pizza.name}</h2>
      <p className="text-lg text-gray-700 mt-2">${pizza.price.toFixed(2)}</p>
      <p className="mt-4">{pizza.description}</p>
      <ul className="mt-4">
        <h3 className="text-lg font-bold">Ingredientes:</h3>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-600">
            - {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizza;
