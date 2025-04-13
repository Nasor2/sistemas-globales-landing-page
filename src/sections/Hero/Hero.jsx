import React from "react";
import { HashLink } from "react-router-hash-link";
import { ArrowRight, CheckCircle, MapPin, Users } from "lucide-react";
import { heroImages } from "../../data/imageData";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full py-4 lg:py-6 overflow-hidden pt-24 sm:pt-28 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Contenido izquierdo */}
          <div className="w-full lg:w-5/12 z-10 pb-8 text-center lg:text-left mx-auto lg:mx-0">
            <div className="mb-4">
              <span className="inline-flex items-center text-green-600 font-medium text-lg bg-gradient-to-r from-green-50 to-green-100 px-4 py-1.5 rounded-full shadow-sm">
                <span className="mr-2">✦</span> Alcance Masivo{" "}
                <span className="ml-2">✦</span>
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-azul-primario leading-tight mb-6">
              Conquista la ciudad y{" "}
              <span className="text-rojo-primario relative">
                posiciona tu marca
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,5 Q50,0 100,5 Q150,10 200,5"
                    stroke="#ff3a3a"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              con pantallas digitales
            </h1>

            <p className="text-lg mb-8 w-full lg:w-11/12 text-center lg:text-left mx-auto lg:mx-0 text-gray-700 leading-relaxed">
              Publicidad exterior digital de{" "}
              <span className="font-bold text-azul-primario">alto impacto</span>{" "}
              que{" "}
              <span className="text-rojo-primario font-bold">
                conecta con tu audiencia
              </span>{" "}
              en momentos clave.
            </p>

            {/* Lista de beneficios mejorada */}
            <div className="mb-8 space-y-4 w-full lg:w-11/12 mx-auto lg:mx-0">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm border border-gray-100 transition-transform hover:translate-x-1">
                <div className="bg-green-100 p-2 rounded-full">
                  <MapPin className="text-green-600 w-5 h-5" />
                </div>
                <span className="text-gray-700 font-medium">
                  Ubicaciones estratégicas de alto tráfico
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm border border-gray-100 transition-transform hover:translate-x-1">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="text-blue-600 w-5 h-5" />
                </div>
                <span className="text-gray-700 font-medium">
                  Impacto visual garantizado 24/7
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <HashLink smooth to="/#contacto" className="w-full sm:w-auto">
                <button className="group bg-gradient-to-r from-rojo-primario to-red-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center">
                  <span className="mr-2">Aparta tu espacio</span>
                  <span className="relative">
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </HashLink>

              <HashLink smooth to="/#ubicaciones" className="w-full sm:w-auto">
                <button className="group bg-gradient-to-br from-azul-primario via-blue-800 to-blue-700 border-2 text-white  hover:bg-blue-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 w-full sm:w-auto flex items-center justify-center">
                  <span className="mr-2">Ver ubicaciones</span>
                  <span className="relative">
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </HashLink>
            </div>
          </div>

          {/* Contenido derecho - Imágenes */}
          <div className="w-full lg:w-7/12 relative hidden lg:block">
            <div className="flex gap-6">
              {/* Imagen principal con efecto flotante */}
              <div className="relative animate-float-slow">
                <div
                  className="flex items-center justify-center relative rounded-3xl overflow-hidden border-2 border-gray-200 shadow-2xl bg-gradient-to-b from-white to-gray-50 group"
                  style={{
                    height: "750px",
                    width: "560px",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-azul-primario/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    src={heroImages.mainImage.mainImage}
                    alt="Digital Billboard Main Image"
                  />

                  {/* Etiqueta flotante */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-20">
                    <span className="text-azul-primario font-semibold text-sm">
                      Alta visibilidad
                    </span>
                  </div>
                </div>
              </div>

              {/* Imágenes secundarias */}
              <div className="flex flex-col gap-6 justify-between">
                {heroImages.showcaseImages.slice(0, 3).map((img, index) => (
                  <div
                    key={index}
                    className={`w-56 h-56 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative group animate-float-${index % 2 === 0 ? "slow" : "medium"}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-azul-primario/20 to-rojo-primario/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>

                    <img
                      src={img.img}
                      alt={`Digital billboard example ${index + 1}`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Indicador de ubicación */}
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm z-20 text-xs font-medium text-gray-700 flex items-center">
                      <MapPin className="w-3 h-3 mr-1 text-rojo-primario" />
                      {img.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilo para animaciones */}
      <style>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
