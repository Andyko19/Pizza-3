import React, { useEffect, useState } from "react";
/*import { pizzas } from "../../pizzas";*/
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect - Componente montado o actualizado");
    const fetchPizzas = async () => {
      try {
        console.log("Iniciando la solicitud de pizzas...");
        const response = await fetch("http://localhost:5000/api/pizzas");
        console.log("Respuesta obtenida:", response);
        if (!response.ok) {
          throw new Error("Error al obtener las pizzas");
        }
        const data = await response.json();
        console.log("Datos de las pizzas obtenidos:", data);
        setPizzas(data); // Guardar las pizzas obtenidas de la API
        setLoading(false);
      } catch (error) {
        console.error("Error al consumir la API:", error);
        setLoading(false);
      }
    };

    fetchPizzas();
    return () => {
      console.log("useEffect - Componente desmontado"); // Fase de desmontaje
    };
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Cargando pizzas...</p>;
  }
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;
