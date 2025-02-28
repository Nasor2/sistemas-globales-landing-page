import React, { useState } from "react";
import logo from "../assets/icons/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <img src={logo} alt="Sistemas Globales" className="h-18 w-auto" />
            <h1 className="text-azul-primario text-3xl font-bold tracking-tight">
              Sistemas Globales
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-10 mr-10">
              <a
                href="#servicios"
                className="text-azul-primario-oscuro hover:text-rojo-primario font-normal text-lg transition duration-300 relative group"
              >
                Servicios
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-rojo-primario transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <Link
                to="/about"
                className="text-azul-primario-oscuro hover:text-rojo-primario font-normal text-lg transition duration-300 relative group"
              >
                Nosotros
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-rojo-primario transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <a
                href="#ubicaciones"
                className="text-azul-primario-oscuro hover:text-rojo-primario font-normal text-lg transition duration-300 relative group"
              >
                Ubicaciones
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-rojo-primario transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a
                href="#contacto"
                className="text-azul-primario-oscuro hover:text-rojo-primario font-normal text-lg transition duration-300 relative group"
              >
                Contacto
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-rojo-primario transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </div>
            <a
              href="#cotizar"
              className="bg-rojo-primario text-white px-5 py-2 rounded-full font-normal text-lg hover:bg-[#c71f1f] transition duration-300 shadow-lg transform "
            >
              Cotiza ahora
            </a>
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
              <a
                href="#servicios"
                className="text-azul-primario hover:text-rojo-primario font-semibold text-lg py-2 px-4 transition duration-300 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="text-azul-primario hover:text-rojo-primario font-semibold text-lg py-2 px-4 transition duration-300 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#ubicaciones"
                className="text-azul-primario hover:text-rojo-primario font-semibold text-lg py-2 px-4 transition duration-300 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Ubicaciones
              </a>
              <a
                href="#contacto"
                className="text-azul-primario hover:text-rojo-primario font-semibold text-lg py-2 px-4 transition duration-300 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <a
                href="#cotizar"
                className="bg-rojo-primario text-white py-2 px-6 rounded-full font-semibold text-lg text-center hover:bg-[#c71f1f] transition duration-300 shadow-md mt-2 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Cotiza ahora
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
