import React from "react";
import { HashLink } from "react-router-hash-link";

const CTA = () => {
  return (
    <section
      id="cta-section"
      className="w-full bg-white px-4 py-16 flex justify-center items-center"
    >
      <div className="w-full max-w-6xl rounded-3xl bg-gradient-to-br from-azul-primario via-blue-800 to-blue-700 py-16 px-8 md:px-12 overflow-hidden relative shadow-2xl">
        {/* Efectos decorativos con gradientes */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
        
        {/* Patrón de puntos decorativo */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex justify-between">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="w-1 h-1 bg-white rounded-full m-6" />
              ))}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Maximiza tu impacto publicitario
            </h2>
            <div className="h-1 w-24 bg-rojo-primario mx-auto mb-6 rounded-full" />
            <p className="text-white text-base md:text-lg opacity-90 max-w-2xl mx-auto">
              Únete a las marcas que han potenciado su visibilidad con nuestras
              pantallas LED de alta resolución.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <HashLink
              smooth to="/#contacto"
              className="w-auto bg-rojo-primario hover:bg-red-500 text-white font-medium text-base py-4 px-10 rounded-full transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Solicitar Cotización
            </HashLink>
            <HashLink
              to="/#ubicaciones"
              className="w-auto bg-transparent border-2 border-white text-white font-medium text-base py-4 px-10 rounded-full hover:bg-white/10 transition-all duration-200 text-center transform hover:-translate-y-1"
            >
              Ver Ubicaciones
            </HashLink>
          </div>

          {/* Elementos decorativos de fondo */}
          <div className="absolute -bottom-4 -left-16 w-32 h-32 border-4 border-white/10 rounded-3xl transform rotate-12 hidden lg:block" />
          <div className="absolute -top-8 -right-12 w-24 h-24 border-4 border-white/10 rounded-full hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default CTA;