import React from 'react';
import logo from '../assets/icons/logo.png';

const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Sección superior con logo y descripción */}
        <div className="flex flex-col md:flex-row justify-between mb-20 gap-12">
          {/* Logo y descripción */}
          <div className="mb-10 md:mb-0 md:w-2/5">
            <div className="flex items-center mb-8">
              <img src={logo} alt="Sistemas Globales" className="h-20 mr-4" />
              <span className="text-azul-primario text-3xl font-bold">Sistemas Globales</span>
            </div>
            <p className="text-negro-suave text-lg mb-8 leading-relaxed">
              Conectamos marcas con audiencias en el momento y lugar precisos. 
              Nuestra experiencia nos permite ofrecer soluciones publicitarias 
              efectivas y de alto impacto.
            </p>
            
            <div className="flex space-x-6 mt-8">
              {/* Twitter Icon */}
              <a href="#" className="text-azul-primario hover:text-rojo-primario transition-colors transform hover:scale-110">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              
              {/* Facebook Icon */}
              <a href="#" className="text-azul-primario hover:text-rojo-primario transition-colors transform hover:scale-110">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              
              {/* LinkedIn Icon */}
              <a href="#" className="text-azul-primario hover:text-rojo-primario transition-colors transform hover:scale-110">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
              {/* Instagram Icon */}
              <a href="#" className="text-azul-primario hover:text-rojo-primario transition-colors transform hover:scale-110">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Columnas de navegación */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-3/5">
            {/* Empresa */}
            <div>
              <h3 className="text-azul-primario font-semibold text-xl mb-6 border-b border-gray-200 pb-3">Empresa</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-negro-suave hover:text-rojo-primario transition-colors text-lg">Sobre nosotros</a></li>
                <li><a href="#" className="text-negro-suave hover:text-rojo-primario transition-colors text-lg">Trayectoria</a></li>
                <li><a href="#" className="text-negro-suave hover:text-rojo-primario transition-colors text-lg">Clientes</a></li>
                <li><a href="#" className="text-negro-suave hover:text-rojo-primario transition-colors text-lg">Contacto</a></li>
              </ul>
            </div>

            {/* Servicios */}
            <div>
              <h3 className="text-azul-primario font-semibold text-xl mb-6 border-b border-gray-200 pb-3">Servicios</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-negro-suave hover:text-rojo-primario transition-colors text-lg">Vallas publicitarias</a></li>
                <li><a href="#" className="text-negro-suave hover:text-rojo-primario transition-colors text-lg">Paneles digitales</a></li>
                <li><a href="#" className="text-negro-suave hover:text-rojo-primario transition-colors text-lg">Mobiliario urbano</a></li>
                <li><a href="#" className="text-negro-suave hover:text-rojo-primario transition-colors text-lg">Publicidad en transporte</a></li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-azul-primario font-semibold text-xl mb-6 border-b border-gray-200 pb-3">Contáctanos</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-azul-primario mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-negro-suave text-lg">Av. Principal 1234, Buenos Aires</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-azul-primario mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-negro-suave text-lg">+54 11 5555-5555</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-azul-primario mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-negro-suave text-lg">info@sistemasglobales.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-200 mb-10"></div>

        {/* Sección inferior con copyright y legal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-negro-suave text-base mb-6 md:mb-0">
            Copyright © 2025 Sistemas Globales. Todos los derechos reservados.
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#" className="text-negro-suave hover:text-rojo-primario transition-colors text-base">Términos de servicio</a>
            <a href="#" className="text-negro-suave hover:text-rojo-primario transition-colors text-base">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;