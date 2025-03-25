import React, { useState, useEffect } from "react";
import logo from "../assets/icons/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detectar scroll para cambiar estilos
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Efecto para desplazar la página hacia arriba cuando cambia la ruta
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Cerrar el menú móvil cuando cambia la ruta
  }, [location.pathname]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-4">
            <img src={logo} alt="Sistemas Globales" className="h-12 sm:h-16 w-auto" />
            <h1 className="text-azul-primario text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              Sistemas Globales
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-4 lg:space-x-10 mr-4 lg:mr-10">
              <Link
                to="/"
                className="text-azul-primario-oscuro hover:text-rojo-primario font-normal text-base transition duration-300 relative group"
              >
                Inicio
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-rojo-primario transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link
                to="/about"
                className="text-azul-primario-oscuro hover:text-rojo-primario font-normal text-base transition duration-300 relative group"
              >
                Nosotros
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-rojo-primario transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link
                to="/ubicaciones"
                className="text-azul-primario-oscuro hover:text-rojo-primario font-normal text-base transition duration-300 relative group"
              >
                Ubicaciones
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-rojo-primario transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>
            <Link
              to="/contacto"
              className="bg-rojo-primario text-white px-5 py-2 rounded-full font-normal text-base hover:bg-[#c71f1f] transition duration-300 shadow-lg"
            >
              Cotiza ahora
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-azul-primario"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-3 bg-white rounded-lg shadow-xl">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                to="/"
                className="text-azul-primario hover:text-rojo-primario font-semibold text-base py-2 px-4 transition duration-300 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/about"
                className="text-azul-primario hover:text-rojo-primario font-semibold text-base py-2 px-4 transition duration-300 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                to="/ubicaciones"
                className="text-azul-primario hover:text-rojo-primario font-semibold text-base py-2 px-4 transition duration-300 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Ubicaciones
              </Link>
              <Link
                to="/contacto"
                className="text-azul-primario hover:text-rojo-primario font-semibold text-base py-2 px-4 transition duration-300 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link
                to="/cotizar"
                className="bg-rojo-primario text-white py-2 px-6 rounded-full font-semibold text-base text-center hover:bg-[#c71f1f] transition duration-300 shadow-md mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cotiza ahora
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;