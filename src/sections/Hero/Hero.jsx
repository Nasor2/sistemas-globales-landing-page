import React from 'react';
import bgHero from '../../assets/images/a-profbg-hero.jpeg';

const Hero = () => {
  return (
    <main className="relative flex flex-col items-center lg:items-start w-screen min-h-screen overflow-hidden pt-32 sm:pt-40 md:pt-52">
      {/* Background */}
      <div
        className="absolute inset-0 transform scale-110"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center lg:items-start justify-start">
        <div className="max-w-4xl space-y-8 text-center lg:text-left">
          {/* Indicador de Publicidad */}
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md rounded-full px-6 py-2.5 border border-white/10">
            <span className="animate-ping w-2 h-2 bg-[#D90429] rounded-full mr-3"></span>
            <span className="text-white/90 text-sm font-medium">Publicidad Exterior Digital</span>
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
            Convierte la Ciudad en
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#D90429] to-red-400 bg-clip-text text-transparent">
                Tu Mejor Vitrina
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#D90429] to-red-400 opacity-70"></div>
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Domina el paisaje urbano con pantallas LED estratégicas.
            <br />
            Alcanza a millones las 24 horas, todos los días.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="group relative px-8 py-4 bg-[#D90429] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#D90429]/20 flex justify-center lg:justify-start">
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="relative text-lg font-semibold text-white flex items-center">
                Cotiza ahora
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>

            <button className="px-8 py-4 rounded-xl border-2 border-white/20 hover:border-white/40 text-white text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5 flex justify-center lg:justify-start">
              Explorar ubicaciones
            </button>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 mt-12">
            {[
              ['500+', 'Pantallas LED Estratégicas'],
              ['15M+', 'Impactos Diarios'],
              ['98%', 'Tasa de Conversión']
            ].map(([number, label]) => (
              <div key={label} className="text-center lg:text-left group cursor-pointer">
                <div className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {number}
                </div>
                <div className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="white"
              fillOpacity="0.05"
            />
          </svg>
        </div>
      </div>
    </main>
  );
};

export default Hero;
