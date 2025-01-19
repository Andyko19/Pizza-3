import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  // Método para login
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setEmail(data.email);
        console.log("Token recibido:", data.token);
      } else {
        throw new Error("Error al iniciar sesión.");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Método para registro
  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setEmail(data.email);
        console.log("Token recibido:", data.token);
      } else {
        throw new Error("Error al registrarse.");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Método para obtener el perfil del usuario
  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setEmail(data.email);
      } else {
        throw new Error("Error al obtener el perfil del usuario.");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Método para logout
  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, getProfile, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useUser = () => useContext(UserContext);
