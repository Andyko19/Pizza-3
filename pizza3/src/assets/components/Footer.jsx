import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} AG19. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
