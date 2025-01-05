import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de campos vacíos
    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }
    // Validación de la longitud de la contraseña
    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    // Validación de coincidencia de contraseñas
    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }
    // Si todo está correcto
    setMessage("Registro exitoso.");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600"
        >
          Registrar
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-center font-bold ${
            message === "Registro exitoso." ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Register;
