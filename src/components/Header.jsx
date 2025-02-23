import React, { useState, useEffect } from 'react';
import logoWhite from '../assets/icons/logo-white.png';

const navigationItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Ubicaciones', href: '#ubicaciones' },
  { label: 'Contacto', href: '#contacto' }
];

const NavigationLink = ({ href, children, onClick, className = '' }) => (
  <a
    href={href}
    onClick={onClick}
    className={`text-white relative group ${className}`}
  >
    <span className="relative z-10 font-medium tracking-wider">{children}</span>
    <span className="absolute inset-x-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bottom-0"></span>
    <span className="absolute inset-x-0 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-75 transition-transform duration-500 -bottom-1 opacity-50"></span>
  </a>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-blue-900/80 via-black/80 to-blue-900/80 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto px-5 xl:px-30 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <img 
                src={logoWhite}
                alt="Logo" 
                className="relative min-h-16 w-20 hover:opacity-90 transition-opacity duration-200"
              />
            </div>
            <span className="text-3xl font-bold text-white tracking-wider relative">
              <span className="relative z-10">Sistemas Globales</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 via-blue-400 to-red-500 transform scale-x-0 group-hover:scale-x-100transition-transform duration-500"></span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navigationItems.map(({ label, href }) => (
              <NavigationLink key={label} href={href} className="text-xl font-bold">
                {label}
              </NavigationLink>
            ))}
            <button className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-blue-400 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-white font-bold transform hover:scale-105 transition-all duration-200 text-xl">
                Cotizar
              </div>
            </button>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <svg className="relative h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-white/10">
            <div className="flex flex-col space-y-6 pt-6">
              {navigationItems.map(({ label, href }) => (
                <NavigationLink 
                  key={label} 
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg"
                >
                  {label}
                </NavigationLink>
              ))}
              <button className="relative group w-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-blue-400 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-white font-bold text-center transform hover:scale-105 transition-all duration-200 text-xl">
                  Cotizar
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;