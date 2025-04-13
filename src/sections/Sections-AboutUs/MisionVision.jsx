import React, { useEffect, useState } from "react";
import img2 from "../../assets/images/aboutUs1.png";
import img1 from "../../assets/images/aboutUs2.png";
import { Target, Award, Compass } from "lucide-react";

const MissionVision = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const missionSection = document.getElementById("mission-vision-section");
    if (missionSection) observer.observe(missionSection);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      id="mission-vision-section" 
      className="max-w-5xl mx-auto px-8"
    >
      {/* Header with animated underline */}
      <div 
        className="text-center mb-8"
      >
        <span 
          className="bg-green-100 text-green-600 text-lg font-medium px-4 py-2 rounded-full tracking-wide inline-flex items-center mb-4"
        >
          <Target className="mr-2 h-5 w-5" /> Misión y Visión
        </span>
        <h2 
          className="text-5xl md:text-6xl font-bold text-azul-primario mb-6"
        >
          Horizonte Visual
        </h2>
        <p 
          className="max-w-xl mx-auto text-negro-suave"
        >
          Creamos experiencias visuales que conectan marcas con audiencias en el entorno urbano.
        </p>
      </div>

      {/* Mission Section */}
      <div 
        className="flex flex-col md:flex-row items-center mb-8 gap-16"
      >
        {/* Mission Text with enhanced card-like styling */}
        <div 
          className="p-8 border-l-4 border-red-700 bg-white rounded-3xl shadow-2xl"
        >
          <div className="flex items-center mb-6">
            <Award className="h-10 w-10 text-rojo-primario mr-4" />
            <h2 
              className="text-3xl font-bold text-red-700"
            >
              Nuestra Misión
            </h2>
          </div>
          <p 
            className="text-negro-suave text-lg leading-relaxed max-w-lg"
          >
            Promover soluciones innovadoras y efectivas en publicidad digital
            para maximizar el impacto de las marcas que confian en nosotros.
          </p>
        </div>

        {/* Rounded Image - Left Side with subtle shadow */}
        <div 
          className="w-80 h-128 flex-shrink-0"
        >
          <div className="bg-red-700 rounded-full overflow-hidden w-80 h-128 pt-8 shadow-2xl">
            <img
              src={img2}
              alt="Young woman with books"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div 
        className="flex flex-col-reverse md:flex-row items-center gap-16"
      >
        {/* Rounded Image - Right Side with subtle shadow */}
        <div 
          className="w-80 h-128 flex-shrink-0 ml-auto"
        >
          <div className="bg-gradient-to-br from-azul-primario via-blue-800 to-blue-700 rounded-full overflow-hidden w-80 h-128 pt-8 shadow-2xl">
            <img
              src={img1}
              alt="Young man"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Vision Text with enhanced card-like styling */}
        <div 
          className="p-8 border-r-4 border-azul-primario bg-white rounded-3xl shadow-2xl"
        >
          <div className="flex items-center mb-6">
            <Compass className="h-10 w-10 text-azul-primario mr-4" />
            <h2 
              className="text-3xl font-bold text-azul-primario"
            >
              Nuestra Visión
            </h2>
          </div>
          <p 
            className="text-negro-suave text-lg leading-relaxed max-w-lg"
          >
            Para 2030, ser la empresa lider en publicidad en Cartagena por la
            calidad de los servicios, la innovación tecnológica y compromiso con
            el éxito de las marcas que nos confian su estrategia
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;