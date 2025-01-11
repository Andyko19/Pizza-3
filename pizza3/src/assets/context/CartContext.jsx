import { createContext, useContext } from "react";

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);

export default CartContext;
