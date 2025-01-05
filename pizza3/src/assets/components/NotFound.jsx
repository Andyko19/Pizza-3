import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold text-red-500">
        404 - Página no encontrada
      </h1>
      <p className="text-lg mt-4">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        to="/"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
