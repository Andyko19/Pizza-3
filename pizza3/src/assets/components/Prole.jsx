import React, { useEffect } from "react";
import { useUser } from "../context/UserContext";

const Prole = () => {
  const { email, getProfile, logout } = useUser();

  useEffect(() => {
    getProfile(); // Llamar al método para obtener el perfil
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Perfil de Usuario</h2>
      {email ? (
        <>
          <p className="text-lg text-gray-700 mb-4">Email: {email}</p>
          <button
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600"
            onClick={logout}
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <p className="text-center text-red-500">No se pudo cargar el perfil.</p>
      )}
    </div>
  );
};

export default Prole;
