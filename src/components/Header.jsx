import React, { useState, useEffect, useCallback } from "react";
import logo from "../assets/icons/logo.png";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavLink = ({ to, children, onClick, isHashLink = false }) => {
  const Component = isHashLink ? HashLink : Link;
  
  return (
    <Component
      to={to}
      onClick={onClick}
      className="text-azul-primario-oscuro hover:text-rojo-primario font-normal text-base transition duration-300 relative group"
      {...(isHashLink ? { smooth: true } : {})}
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-rojo-primario transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </Component>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Memoize the scroll handler to avoid unnecessary re-creations
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  // Detect scroll to change styles
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Call once on mount to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Reset scroll position and close mobile menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  
  const closeMenu = () => setIsMenuOpen(false);

  const navigationLinks = [
    { path: "/", label: "Inicio", isHashLink: false },
    { path: "/about", label: "Nosotros", isHashLink: false },
    { path: "/#ubicaciones", label: "Ubicaciones", isHashLink: true }
  ];

  const mobileNavLinks = [
    ...navigationLinks
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
      aria-label="Navegación principal"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <HashLink to="/#hero" smooth className="flex items-center space-x-2 sm:space-x-4">
            <img 
              src={logo} 
              alt="Sistemas Globales" 
              className="h-12 sm:h-16 w-auto" 
              width="64" 
              height="64" 
            />
            <h1 className="text-azul-primario text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              Sistemas Globales
            </h1>
          </HashLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center" aria-label="Navegación de escritorio">
            <div className="flex space-x-4 lg:space-x-10 mr-4 lg:mr-10">
              {navigationLinks.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path} 
                  isHashLink={link.isHashLink}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <HashLink
              smooth 
              to="/#contacto"
              className="bg-rojo-primario text-white px-5 py-2 rounded-full font-normal text-base hover:bg-[#c71f1f] transition duration-300 shadow-lg"
            >
              Cotiza ahora
            </HashLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-azul-primario"
            aria-expanded={isMenuOpen}
            aria-label="Abrir menú de navegación"
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

        {/* Mobile Menu with animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav 
            className="mt-4 py-3 bg-white rounded-lg shadow-xl"
            aria-label="Navegación móvil"
          >
            <div className="flex flex-col space-y-4 p-4">
              {mobileNavLinks.map((link) => {
                const Component = link.isHashLink ? HashLink : Link;
                return (
                  <Component
                    key={link.path}
                    to={link.path}
                    className="text-azul-primario hover:text-rojo-primario font-semibold text-base py-2 px-4 transition duration-300 rounded-md hover:bg-gray-50"
                    onClick={closeMenu}
                    {...(link.isHashLink ? { smooth: true } : {})} // Only add smooth prop for HashLinks
                  >
                    {link.label}
                  </Component>
                );
              })}
              <HashLink
                smooth
                to="/#contacto"
                className="bg-rojo-primario text-white py-2 px-6 rounded-full font-semibold text-base text-center hover:bg-[#c71f1f] transition duration-300 shadow-md mt-2"
                onClick={closeMenu}
              >
                Cotiza ahora
              </HashLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;