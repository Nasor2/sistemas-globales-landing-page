import React, { useState } from "react";
import { motion } from "framer-motion";
import mainimage from "../../assets/images/main-image-features.jpg";
import { Shapes, Eye, TrendingUp, LandPlot } from "lucide-react";

const Features = () => {
  const [activeFeatures, setActiveFeatures] = useState(["dashboard"]);

  const toggleFeature = (feature) => {
    if (activeFeatures.includes(feature)) {
      setActiveFeatures(activeFeatures.filter((f) => f !== feature));
    } else {
      setActiveFeatures([...activeFeatures, feature]);
    }
  };

  const isFeatureActive = (feature) => {
    return activeFeatures.includes(feature);
  };

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const statsCardVariants = {
    hidden: { opacity: 0, y: 20, x: -20 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { 
        duration: 0.6,
        delay: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 py-8 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Features label */}
      <motion.div className="flex justify-center mb-4" variants={itemVariants}>
        <span className="bg-green-100 text-green-600 text-lg font-medium px-4 py-2 rounded-full tracking-wide inline-flex items-center">
          <Shapes className="mr-2 h-5 w-5" /> Ventajas
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-azul-primario mb-4 max-w-3xl mx-auto leading-tight"
        variants={itemVariants}
      >
        Hacemos brillar tu publicidad exterior
      </motion.h2>

      {/* Subheading */}
      <motion.p 
        className="text-gray-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto text-sm sm:text-base"
        variants={itemVariants}
      >
        Soluciones de publicidad exterior que captan todas las miradas
      </motion.p>

      {/* Content layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Features List */}
        <motion.div 
          className="lg:w-1/2 flex flex-col pt-6 space-y-2"
          variants={containerVariants}
        >
          {/* Feature 1 */}
          <motion.div 
            className="border-b border-gray-200 pb-6 transition-all duration-300 hover:bg-white hover:shadow-md rounded-xl p-4"
            variants={featureVariants}
          >
            <div
              className="flex items-center mb-3 cursor-pointer group"
              onClick={() => toggleFeature("dashboard")}
            >
              <div
                className={`p-3 rounded-lg mr-4 transition-all duration-300 ${isFeatureActive("dashboard") ? "bg-amber-200" : "bg-amber-100"} group-hover:bg-amber-200`}
              >
                <LandPlot className="h-6 w-6 text-amber-600" />
              </div>
              <h3
                className={`text-xl font-semibold ${isFeatureActive("dashboard") ? "text-indigo-800" : "text-azul-primario"} group-hover:text-indigo-800 transition-colors duration-300`}
              >
                Visibilidad máxima
              </h3>
              <svg
                className={`w-5 h-5 ml-auto text-gray-500 transition-transform duration-300 ease-in-out ${isFeatureActive("dashboard") ? "transform rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isFeatureActive("dashboard")
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 pl-14 transform transition-transform duration-500 ease-in-out">
                Ubicaciones estratégicas para que tu mensaje llegue a más
                personas
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="border-b border-gray-200 py-6 transition-all duration-300 hover:bg-white hover:shadow-md rounded-xl p-4"
            variants={featureVariants}
          >
            <div
              className="flex items-center mb-3 cursor-pointer group"
              onClick={() => toggleFeature("sync")}
            >
              <div
                className={`p-3 rounded-lg mr-4 transition-all duration-300 ${isFeatureActive("sync") ? "bg-blue-200" : "bg-blue-100"} group-hover:bg-blue-200`}
              >
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3
                className={`text-xl font-semibold ${isFeatureActive("sync") ? "text-indigo-800" : "text-azul-primario"} group-hover:text-indigo-800 transition-colors duration-300`}
              >
                Pantallas de alto rendimiento
              </h3>
              <svg
                className={`w-5 h-5 ml-auto text-gray-500 transition-transform duration-300 ease-in-out ${isFeatureActive("sync") ? "transform rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isFeatureActive("sync")
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 pl-14 transform transition-transform duration-500 ease-in-out">
                Brillantes de día, nítidas de noche. Visibilidad perfecta las 24
                horas
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="py-6 transition-all duration-300 hover:bg-white hover:shadow-md rounded-xl p-4"
            variants={featureVariants}
          >
            <div
              className="flex items-center mb-3 cursor-pointer group"
              onClick={() => toggleFeature("embedded")}
            >
              <div
                className={`p-3 rounded-lg mr-4 transition-all duration-300 ${isFeatureActive("embedded") ? "bg-orange-200" : "bg-orange-100"} group-hover:bg-orange-200`}
              >
                <Eye className="h-6 w-6 text-orange-600" />
              </div>
              <h3
                className={`text-xl font-semibold ${isFeatureActive("embedded") ? "text-indigo-800" : "text-azul-primario"} group-hover:text-indigo-800 transition-colors duration-300`}
              >
                Impacto Visual
              </h3>
              <svg
                className={`w-5 h-5 ml-auto text-gray-500 transition-transform duration-300 ease-in-out ${isFeatureActive("embedded") ? "transform rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isFeatureActive("embedded")
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 pl-14 transform transition-transform duration-500 ease-in-out">
                Pantallas LED de alta definición que hacen brillar tu mensaje.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="lg:w-1/2"
          variants={imageVariants}
        >
          <div className="rounded-3xl relative h-full flex items-center justify-center">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl relative w-full h-full transform transition-all duration-300 hover:scale-102 hover:shadow-2xl">
              {/* Sales Card - Positioned to match design */}
              <motion.div 
                className="absolute top-8 left-8 z-10"
                variants={statsCardVariants}
              >
                <div
                  className="bg-white rounded-3xl p-5 shadow-lg"
                  style={{ minWidth: "220px" }}
                >
                  <div className="text-azul-primario text-sm font-medium mb-1">
                    Alcance Diario
                  </div>
                  <div className="flex items-center">
                    <div className="text-azul-primario text-4xl font-bold">
                      55K+
                    </div>
                    <div className="ml-3 text-green-500 flex items-center">
                      +3.8%
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm mt-2">
                    Comparado con 53K el año pasado
                  </div>
                </div>
              </motion.div>

              {/* Image - Expanded to fill container */}
              <img
                src={mainimage}
                alt="Team looking at analytics"
                className="w-full h-full object-cover"
                style={{
                  display: "block",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;