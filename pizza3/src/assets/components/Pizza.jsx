import React, { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect - Componente montado o actualizado");
    const fetchPizza = async () => {
      try {
        console.log("Iniciando la solicitud de pizza específica...");
        const response = await fetch("http://localhost:5000/api/pizzas");
        if (!response.ok) {
          throw new Error("Error al obtener la pizza");
        }
        const data = await response.json();
        console.log("Datos de la pizza obtenidos:", data);
        setPizza(data); // Guardar los detalles de la pizza
        setLoading(false);
      } catch (error) {
        console.error("Error al consumir la API:", error);
        setLoading(false);
      }
    };

    fetchPizza();
    return () => {
      console.log("useEffect - Componente desmontado");
    };
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Cargando pizza...</p>;
  }

  if (!pizza) {
    return <p className="text-center text-red-500">No se encontró la pizza.</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <img
        src={pizza.image}
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
      <button
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md w-full"
        disabled
      >
        Agregar al carrito (Sin funcionalidad)
      </button>
    </div>
  );
};

export default Pizza;
