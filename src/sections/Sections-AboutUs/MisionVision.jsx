import React, { useEffect, useState } from "react";
import img2 from "../../assets/images/aboutUs1.png";
import img1 from "../../assets/images/aboutUs2.png";
import { Target, Award, Compass } from "lucide-react";
import { motion } from "framer-motion";

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
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="bg-green-100 text-green-600 text-lg font-medium px-4 py-2 rounded-full tracking-wide inline-flex items-center mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Target className="mr-2 h-5 w-5" /> Misión y Visión
        </motion.span>
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-azul-primario mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Horizonte Visual
        </motion.h2>
        <motion.p 
          className="max-w-xl mx-auto text-negro-suave"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Creamos experiencias visuales que conectan marcas con audiencias en el entorno urbano.
        </motion.p>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
        className="flex flex-col md:flex-row items-center mb-8 gap-16"
        initial={{ opacity: 0, x: -30 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {/* Mission Text with enhanced card-like styling */}
        <motion.div 
          className="p-8 border-l-4 border-red-700 bg-white rounded-3xl shadow-2xl"
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ 
            x: -8, 
            scale: 1.02,
            transition: { duration: 0.3 } 
          }}
        >
          <div className="flex items-center mb-6">
            <Award className="h-10 w-10 text-rojo-primario mr-4" />
            <motion.h2 
              className="text-3xl font-bold text-red-700"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Nuestra Misión
            </motion.h2>
          </div>
          <motion.p 
            className="text-negro-suave text-lg leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Promover soluciones innovadoras y efectivas en publicidad digital
            para maximizar el impacto de las marcas que confian en nosotros.
          </motion.p>
        </motion.div>

        {/* Rounded Image - Left Side with subtle shadow */}
        <motion.div 
          className="w-80 h-128 flex-shrink-0"
          whileHover={{ 
            rotate: -2, 
            scale: 1.05,
            transition: { duration: 0.3 } 
          }}
        >
          <div className="bg-red-700 rounded-full overflow-hidden w-80 h-128 pt-8 shadow-2xl">
            <motion.img
              src={img2}
              alt="Young woman with books"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Vision Section */}
      <motion.div 
        className="flex flex-col-reverse md:flex-row items-center gap-16"
        initial={{ opacity: 0, x: 30 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.7, delay: 1.0 }}
      >
        {/* Rounded Image - Right Side with subtle shadow */}
        <motion.div 
          className="w-80 h-128 flex-shrink-0 ml-auto"
          whileHover={{ 
            rotate: 2, 
            scale: 1.05,
            transition: { duration: 0.3 } 
          }}
        >
          <div className="bg-azul-primario rounded-full overflow-hidden w-80 h-128 pt-8 shadow-2xl">
            <motion.img
              src={img1}
              alt="Young man"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
            />
          </div>
        </motion.div>

        {/* Vision Text with enhanced card-like styling */}
        <motion.div 
          className="p-8 border-r-4 border-azul-primario bg-white rounded-3xl shadow-2xl"
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          whileHover={{ 
            x: 8, 
            scale: 1.02,
            transition: { duration: 0.3 } 
          }}
        >
          <div className="flex items-center mb-6">
            <Compass className="h-10 w-10 text-azul-primario mr-4" />
            <motion.h2 
              className="text-3xl font-bold text-azul-primario"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Nuestra Visión
            </motion.h2>
          </div>
          <motion.p 
            className="text-negro-suave text-lg leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Para 2030, ser la empresa lider en publicidad en Cartagena por la
            calidad de los servicios, la innovación tecnológica y compromiso con
            el éxito de las marcas que nos confian su estrategia
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MissionVision;