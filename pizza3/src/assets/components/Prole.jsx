import React from "react";

const Prole = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Perfil de Usuario</h2>
      <p className="text-lg text-gray-700 mb-4">Email: usuario@ejemplo.com</p>
      <button className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Prole;
