import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // Por defecto, el token es true.

  const logout = () => setToken(false); // Cambiar el token a false.

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useUser = () => useContext(UserContext);
