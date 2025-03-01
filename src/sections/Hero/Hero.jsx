import React from "react";
import TestimonialCard from "../../components/HeroComponents/TestimonialCard";
import { testimonials1 } from "../../data/testimonialsData";
import { heroImages } from "../../data/imageData";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-white py-4 lg:py-6 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="w-full lg:w-4/12 z-10 pb-30">
            <div className="mb-3">
              <span className="inline-flex items-center text-azul-primario font-medium text-lg bg-azul-primario/10 px-4 py-1 rounded-full">
                ✦ Alcance Masivo
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-azul-primario leading-[60px] mb-6">
              Conquista la ciudad y{" "}
              <span className="text-rojo-primario">dispara tus ventas</span> con
              pantallas digitales
            </h1>

            <p className="text-lg mb-2 w-3/4">
              Publicidad exterior digital de{" "}
              <span className="font-bold text-azul-primario">alto impacto</span>{" "}
              que{" "}
              <span className="text-rojo-primario font-bold">
                conecta con tu audiencia
              </span>{" "}
              en los momentos clave.
            </p>

            <div className="flex flex-col gap-4 mt-6">
              <button className="group bg-rojo-primario hover:bg-red-700 text-white font-medium py-3 px-5 w-3/4 rounded-full transition duration-300 shadow-lg shadow-red-600/20 flex items-center justify-center">
                Aparta tu espacio ahora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="group bg-azul-primario hover:bg-blue-950 text-white font-medium py-3 w-3/4 px-5 rounded-full transition duration-300 shadow-lg shadow-azul-primario/20 flex items-center justify-center">
                Explorar ubicaciones
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-7/12 relative justify-between flex">
            <div className="relative justify-between">
              <div className="relative justify-between">
                <div
                  className="flex items-center justify-center relative rounded-[265.50px] overflow-hidden border-2 border-gray-200 shadow-2xl bg-gradient-to-b from-white to-gray-50"
                  style={{
                    height: "742px",
                    width: "531px",
                  }}
                >
                  {/* Efecto de brillo superior */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-azul-primario-2claro/20 to-transparent z-10"></div>

                  {/* Efecto de brillo inferior */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-azul-primario-2claro/30 to-transparent z-10"></div>

                  <img
                    data-layer="Rectangle 4"
                    className="Rectangle4 w-[473px] h-[673px] rounded-[250px] object-cover object-center transition-transform duration-700 hover:scale-105"
                    src={heroImages.mainImage.mainImage}
                  />
                </div>

                <div className="absolute -left-6 md:-left-16 top-1/7 z-20">
                  <TestimonialCard testimonial={testimonials1[0]} />
                </div>

                <div className="absolute -right-6 md:-right-16 top-2/4 z-20">
                  <TestimonialCard testimonial={testimonials1[1]} />
                </div>

                <div className="absolute bottom-1 right-2/5 z-20">
                  <TestimonialCard testimonial={testimonials1[2]} />
                </div>
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-6 h-full justify-between">
              {heroImages.showcaseImages.map((img, index) => (
                <div
                  key={index}
                  className="w-60 h-60 rounded-xl overflow-hidden shadow-lg border border-gray-200 relative group"
                >
                  {/* Overlay con gradiente al hacer hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-azul-primario/30 to-azul-primario-oscuro/30 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>

                  <img
                    src={img}
                    alt={`Digital billboard example ${index + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Efecto de brillo en las esquinas */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-white/30 blur-md rounded-full -translate-x-8 -translate-y-8"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/30 blur-md rounded-full translate-x-8 translate-y-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
