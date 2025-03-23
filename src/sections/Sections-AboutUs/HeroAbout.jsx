import React, { useEffect, useRef } from "react";
import main from "../../assets/images/main-img-bg.jpeg";
import { UsersRound } from 'lucide-react';

const HeroAbout = () => {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Simple fade-in animation on load
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-4");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br  overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left column - Heading */}
          <div>
            <div
              ref={headingRef}
              className="transform transition duration-1000 ease-out opacity-0 translate-y-4"
            >
              <span className="bg-green-100 text-green-600 text-lg font-medium px-4 py-2 rounded-full tracking-wide inline-flex items-center">
              <UsersRound className="mr-2 h-5 w-5" />Conocenos
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-azul-primario leading-tight mb-8">
                Donde Todas las {" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Marcas</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-rojo-primario-claro opacity-50"></span>
                </span>{" "} 
                Brillan
              </h1>
            </div>
          </div>

          {/* Right column - Description and CTA */}
          <div className="flex flex-col justify-center">
            <div
              ref={textRef}
              className="transform transition duration-1000 delay-300 ease-out opacity-0 translate-y-4"
            >
              <p className="text-negro-suave text-xl mb-8 leading-relaxed">
              Facilitamos espacios publicitarios digitales de alto impacto en los entornos urbanos más transitados. Nuestra red de pantallas LED permite a las marcas transmitir mensajes impactantes que captan la atención.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#"
                  className="px-8 py-4 bg-rojo-primario text-white font-medium rounded-lg hover:bg-red-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Cotiza ahora
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="px-8 py-4 bg-white text-azul-primario font-medium rounded-lg border border-azul-primario-oscuro hover:bg-azul-primario-oscuro hover:text-white transition flex items-center justify-center"
                >
                  Ver ubicaciones
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team image section */}
        <div
          ref={imageRef}
          className="relative rounded-2xl overflow-hidden shadow-2xl transform transition duration-1000 delay-500 ease-out opacity-0 translate-y-4"
        >
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent z-10"></div>

          {/* Feature badges */}
          <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-4">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Puntos de alto tráfico</h3>
                  <p className="text-sm text-negro-suave">
                  Presencia en puntos clave
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main image using the imported image */}
          <div className="relative z-0 h-96 lg:h-[36rem] w-full">
            <img
              src={main}
              alt="Team collaborating around a table"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
